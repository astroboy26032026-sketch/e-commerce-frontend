import React from "react";
import Image from "next/image";
import about_img from "@/assets/images/about/about-big-1.jpg";

export default function AboutArea() {
  return (
    <section className="tp-about-area pb-80 pt-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-about-banner-wrapper">
              <span className="tp-about-banner-subtitle">Về Chúng Tôi</span>
              <h3 className="tp-about-banner-title">
                Câu Chuyện Hivio
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-about-banner-thumb w-img">
              <Image src={about_img} alt="about-img" style={{height:"auto"}} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-about-banner-content">
              <p>
                Hivio tự hào mang đến cho bạn những thiết bị âm thanh cao cấp
                từ các thương hiệu hàng đầu thế giới. Từ tai nghe Sony, Sennheiser,
                loa Marshall đến ampli và DAC chuyên nghiệp - mỗi sản phẩm đều được
                tuyển chọn kỹ lưỡng.
              </p>

              <p>
                Cam kết về chất lượng được thể hiện trong từng sản phẩm chúng tôi
                cung cấp. Chúng tôi hợp tác trực tiếp với các nhà phân phối chính hãng
                để đảm bảo mỗi thiết bị đều là hàng authentic, bảo hành chính hãng.
                Với giao diện thân thiện và quy trình đặt hàng đơn giản, việc mua
                thiết bị âm thanh trực tuyến chưa bao giờ dễ dàng đến thế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
