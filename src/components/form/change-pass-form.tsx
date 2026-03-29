"use client";
import React from "react";
import { IChangePassFormData } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ErrMsg from "../err-msg";
import { useAppSelector } from "@/redux/hook";
import { IErrorResponse } from "@/types/error-res-d-t";
import { useChangePasswordMutation } from "@/redux/api/authApi";

export default function ChangePassForm() {
  const { user } = useAppSelector((state) => state.auth);
  const {register,handleSubmit,formState: { errors },reset} = useForm<IChangePassFormData>();
  const [changePassword] = useChangePasswordMutation();

  const onSubmit: SubmitHandler<IChangePassFormData> = async (data) => {
    try {
        if(!user?.id){
            toast.error('Vui lòng đăng nhập trước');
            return;
        }
        else {
            const changePassData = await changePassword({
                currentPassword: data.currentPassword,
                newPassword: data.newPassword,
            }).unwrap();
            if(changePassData){
                toast.success(changePassData?.message);
                reset();
            }
        }
    } catch(error) {
        const errRes = error as IErrorResponse;
        toast.error(errRes.data.message as string);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xxl-6 col-md-6">
            <div className="tp-profile-input-box">
              <div className="tp-profile-input">
                <input
                  {...register("currentPassword", {
                    required: `Mật khẩu hiện tại là bắt buộc!`,
                    minLength:{
                        message:"Mật khẩu hiện tại phải có ít nhất 6 ký tự",
                        value:6
                    }
                  })}
                  name="currentPassword"
                  id="currentPassword"
                  type="password"
                />
              </div>
              <div className="tp-profile-input-title">
                <label htmlFor="currentPassword">Mật khẩu Hiện Tại</label>
              </div>
              {errors?.currentPassword?.message && <ErrMsg msg={errors.currentPassword.message} />}
            </div>
          </div>
          <div className="col-xxl-6 col-md-6">
            <div className="tp-profile-input-box">
              <div className="tp-profile-input">
                <input
                  {...register("newPassword", {
                    required: `Mật khẩu mới là bắt buộc!`,
                    minLength:{
                        message:"Mật khẩu mới phải có ít nhất 6 ký tự",
                        value:6
                    }
                  })}
                  name="newPassword"
                  id="newPassword"
                  type="password"
                />
              </div>
              <div className="tp-profile-input-title">
                <label htmlFor="newPassword">Mật khẩu Mới</label>
              </div>
              {errors?.newPassword?.message && <ErrMsg msg={errors.newPassword.message} />}
            </div>
          </div>
          <div className="col-xxl-6 col-md-6">
            <div className="profile__btn">
              <button type="submit" className="tp-btn">
                Cập Nhật
              </button>
            </div>
          </div>
        </div>
      </form>
  )
}
