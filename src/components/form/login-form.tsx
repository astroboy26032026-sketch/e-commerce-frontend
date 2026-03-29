"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// internal
import { CloseEye, OpenEye } from "@/components/svg";
import ErrorMsg from "@/components/err-msg";
import { loginSchema } from "@/utils/schema";
import { ILoginFormData } from "@/types/form-d-t";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { IErrorResponse } from "@/types/error-res-d-t";


const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginUser,{isLoading,error}] = useLoginUserMutation();
  const router = useRouter();
  // react hook form
  const {register,handleSubmit,formState: { errors },reset} = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues:{
      email:'',
      password:''
    }
  });
  // onSubmit
  const onSubmit = async (values: ILoginFormData) => {
    try {
      const loginData = await loginUser({
        email: values.email,
        password: values.password,
      }).unwrap();

      if (loginData.data) {
        router.push("/");
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
              {...register("email", { required: `Email là bắt buộc!` })}
              name="email"
              id="email"
              type="email"
              placeholder="info@hivio.vn"
              defaultValue={''}
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
                type={showPass ? "text" : "password"}
                placeholder="Tối thiểu 6 ký tự"
                defaultValue={''}
              />
            </div>
            <div className="tp-login-input-eye" id="password-show-toggle">
              <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <OpenEye /> : <CloseEye />}
              </span>
            </div>
            <div className="tp-login-input-title">
              <label htmlFor="password">Mật khẩu</label>
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message!} />
        </div>
      </div>
      <div className="tp-login-bottom mt-30">
        <button disabled={isLoading} type="submit" className="tp-login-btn w-100">
          Đăng Nhập
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
