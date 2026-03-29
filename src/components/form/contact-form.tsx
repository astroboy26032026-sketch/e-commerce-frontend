'use client';
import { IContactFormData } from "@/types/form-d-t";
import { contactSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import ErrMsg from "../err-msg";

export default function ContactForm() {
  const {register,handleSubmit,formState: { errors },reset} = useForm<IContactFormData>({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = async (values: IContactFormData) => {
    // TODO: Integrate with email service (e.g. EmailJS, Nodemailer)
    reset();
  }
  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input
              {...register("name",{required: true})}
              name="name"
              id="name"
              type="text"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Họ và Tên</label>
          </div>
          <ErrMsg msg={errors.name?.message as string} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input
              {...register("email",{required: true})}
              name="email"
              id="email"
              type="email"
              placeholder="info@hivio.vn"
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Email của bạn</label>
          </div>
          <ErrMsg msg={errors.email?.message as string} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input
              {...register("subject",{required: true})}
              name="subject"
              id="subject"
              type="text"
              placeholder="Nhập chủ đề"
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="subject">Chủ đề</label>
          </div>
          <ErrMsg msg={errors.subject?.message as string} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea
              {...register("msg",{required: true})}
              id="msg"
              placeholder="Viết tin nhắn của bạn tại đây..."
            ></textarea>
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Tin nhắn của bạn</label>
          </div>
          <ErrMsg msg={errors.msg?.message as string} />
        </div>
      </div>
      <div className="tp-contact-suggetions mb-20">
        <div className="tp-contact-remeber">
          <input id="remeber" type="checkbox" />
          <label htmlFor="remeber">
            Lưu tên, email và trang web của tôi trên trình duyệt này cho lần bình luận tiếp theo.
          </label>
        </div>
      </div>
      <div className="tp-contact-btn">
        <button type="submit">Gửi Tin Nhắn</button>
      </div>
    </form>
  );
}
