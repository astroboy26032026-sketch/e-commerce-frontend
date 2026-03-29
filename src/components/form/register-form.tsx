"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
// internal
import { CloseEye, OpenEye } from "@/components/svg";
import ErrorMsg from "@/components/err-msg";
import { registerSchema } from "@/utils/schema";
import { IRegisterFormData } from "@/types/form-d-t";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { IErrorResponse } from "@/types/error-res-d-t";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [registerUser, {isLoading,error}] = useRegisterUserMutation();
  const router = useRouter();
  // react hook form
  const {register,handleSubmit,formState: { errors },reset} = useForm<IRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });
  // on submit
  const onSubmit = async (values: IRegisterFormData) => {
    try {
      if(values){
        const registerData =  await registerUser({
          email: values.email,
          password: values.password,
          username: values.name,
        }).unwrap();
        if(registerData.data){
          router.push("/login");
        }
      }
    } catch (err) {
      const errorRes = err as IErrorResponse;
      toast.error(errorRes.data.message as string);
    } finally {
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-login-input-wrapper">
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input
              {...register("name", { required: `Tên là bắt buộc!` })}
              id="name"
              name="name"
              type="text"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="name">Họ và Tên</label>
          </div>
          <ErrorMsg msg={errors.name?.message!} />
        </div>
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input
              {...register("email", { required: `Email là bắt buộc!` })}
              id="email"
              name="email"
              type="email"
              placeholder="info@hivio.vn"
            />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="email">Email của bạn</label>
          </div>
          <ErrorMsg msg={errors.email?.message!} />
        </div>
        <div className="tp-login-input-box">
          <div className="p-relative">
            <div className="tp-login-input">
              <input
                {...register("password", { required: `Mật khẩu là bắt buộc!` })}
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Tối thiểu 6 ký tự"
              />
            </div>
            <div className="tp-login-input-eye" id="password-show-toggle">
              <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <CloseEye /> : <OpenEye />}
              </span>
            </div>
            <div className="tp-login-input-title">
              <label htmlFor="password">Mật khẩu</label>
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message!} />
        </div>
      </div>
      <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        <div className="tp-login-remeber">
          <input
            {...register("remember", {
              required: `Điều khoản dịch vụ là bắt buộc!`,
            })}
            id="remember"
            name="remember"
            type="checkbox"
          />
          <label htmlFor="remember">
            Tôi chấp nhận các điều khoản Dịch vụ & <a href="#">Chính sách Bảo mật</a>.
          </label>
          <ErrorMsg msg={errors.remember?.message!} />
        </div>
      </div>
      <div className="tp-login-bottom">
        <button disabled={isLoading} type="submit" className="tp-login-btn w-100">
          Đăng Ký
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
