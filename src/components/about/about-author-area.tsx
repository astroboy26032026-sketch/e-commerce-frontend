import React from "react";
import Image from "next/image";
import logo_1 from "@/assets/images/brand/author/logo_01.png";
import logo_2 from "@/assets/images/brand/author/logo_02.png";
import logo_3 from "@/assets/images/brand/author/logo_03.png";
import logo_4 from "@/assets/images/brand/author/logo_04.png";

const brands = [logo_1, logo_2, logo_3, logo_4];

export default function AboutAuthorArea() {
  return (
    <section className="tp-author-area pb-120">
      <div className="container">
        <div
          className="tp-author-inner p-relative z-index-1 tp-author-bg-overlay fix"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <span className="tp-author-shape-1"></span>
          <div
            className="tp-author-bg include-bg"
            style={{
              backgroundImage: "url(/assets/images/author/author-bg.jpg)",
            }}
          ></div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-author-wrapper p-relative z-index-1">
                <div className="tp-author-info-wrapper d-flex align-items-center mb-30">
                  <div className="tp-author-info-avater mr-10">
                    <Image
                      src="/assets/images/users/user-4.jpg"
                      alt="user"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="tp-author-info">
                    <h3 className="tp-author-info-title">Nguyễn Văn An</h3>
                    <span className="tp-author-info-designation">
                      Người sáng lập Hivio
                    </span>
                  </div>
                </div>
                <div className="tp-author-content">
                  <p>
                    Chúng tôi hợp tác trực tiếp với các thương hiệu âm thanh để đảm bảo
                    mỗi sản phẩm đều đạt tiêu chuẩn cao nhất về chất lượng,
                    âm thanh và trải nghiệm người dùng.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-author-brand-wrapper d-flex flex-wrap align-items-center justify-content-lg-end">
                {brands.map((item, i) => (
                  <div className="tp-author-brand-item text-center" key={i}>
                    <Image src={item} alt="LOGO" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
