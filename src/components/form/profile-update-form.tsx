"use client";
import React from "react";
import { IUpdateProfileFormData } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ErrMsg from "../err-msg";
import { useAppSelector } from "@/redux/hook";
import { EmailTwo, LocationTwo, Phone, UserThree } from "../svg";
import { useUpdateUserMutation } from "@/redux/api/authApi";
import { IErrorResponse } from "@/types/error-res-d-t";

export default function ProfileUpdateForm() {
  const { user } = useAppSelector((state) => state.auth);
  const {register,handleSubmit,formState: { errors },reset} = useForm<IUpdateProfileFormData>();
  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<IUpdateProfileFormData> = async (data) => {
    try {
        if(!user?.id){
            toast.error('Vui lòng đăng nhập trước');
            return;
        }
        else {
            const updateData = await updateUser({
                id:user?.id,
                user:{
                    username: data.name,
                    email:data.email,
                    address: data.address,
                    bio: data.bio,
                    phone: data.phone,
                    role: user?.role
                }
            }).unwrap();
            toast.success(updateData.message);
            reset();
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
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                {...register("name", { required: `Tên là bắt buộc!` })}
                name="name"
                type="text"
                placeholder="Nhập tên người dùng"
                defaultValue={user?.username}
              />
              <span>
                <UserThree />
              </span>
              {errors?.name?.message && <ErrMsg msg={errors.name.message} />}
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-md-6">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                {...register("email", { required: `Email là bắt buộc!` })}
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                defaultValue={user?.email}
              />
              <span>
                <EmailTwo />
              </span>
              {errors?.email?.message && <ErrMsg msg={errors.email.message} />}
            </div>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                {...register("phone", { required: false })}
                name="phone"
                type="text"
                placeholder="Nhập số điện thoại"
                defaultValue="0123 456 7889"
              />
              <span>
                <Phone />
              </span>
            </div>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="profile__input-box">
            <div className="profile__input">
              <input
                {...register("address", { required: false })}
                name="address"
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                defaultValue="Quận Hoàng Mai, Hà Nội"
              />
              <span>
                <LocationTwo />
              </span>
            </div>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="profile__input-box">
            <div className="profile__input">
              <textarea
                {...register("bio", { required: false })}
                name="bio"
                placeholder="Nhập tiểu sử của bạn"
                defaultValue="Xin chào, đây là tiểu sử của tôi..."
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="profile__btn">
            <button type="submit" className="tp-btn">
              Cập Nhật Hồ Sơ
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
