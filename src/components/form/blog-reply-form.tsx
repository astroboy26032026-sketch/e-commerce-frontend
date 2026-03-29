import React from 'react';

export default function BlogReplyForm() {
  return (
    <form>
        <div className="tp-postbox-details-form-inner">
            <div className="tp-postbox-details-input-box">
                <div className="tp-contact-input">
                    <input name="name" id="name" type="text" placeholder="Nguyễn Văn A"/>
                </div>
                <div className="tp-postbox-details-input-title">
                    <label htmlFor="name">Họ và Tên</label>
                </div>
            </div>
            <div className="tp-postbox-details-input-box">
                <div className="tp-contact-input">
                    <input name="email" id="email" type="email" placeholder="info@hivio.vn"/>
                </div>
                <div className="tp-postbox-details-input-title">
                    <label htmlFor="email">Email của bạn</label>
                </div>
            </div>
            <div className="tp-postbox-details-input-box">
                <div className="tp-contact-input">
                    <textarea id="msg" placeholder="Viết tin nhắn của bạn tại đây..."></textarea>
                </div>
                <div className="tp-postbox-details-input-title">
                    <label htmlFor="msg">Tin nhắn của bạn</label>
                </div>
            </div>
            </div>
            <div className="tp-postbox-details-suggetions mb-20">
            <div className="tp-postbox-details-remeber">
                <input id="remeber" type="checkbox"/>
                <label htmlFor="remeber">Lưu tên, email và trang web của tôi trên trình duyệt này cho lần bình luận tiếp theo.</label>
            </div>
            </div>
            <div className="tp-postbox-details-input-box">
            <button className="tp-postbox-details-input-btn" type="submit">
                Đăng Bình Luận
            </button>
        </div>
    </form>
  )
}
