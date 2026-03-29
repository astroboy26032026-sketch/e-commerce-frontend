"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import main_img from "@/assets/images/slider/5/slider-1.png";

export default function HeroBanner() {
  return (
    <section className="tp-slider-area p-relative z-index-1 fix">
      <div className="tp-slider-active-5s swiper-containers">
        <div className="swiper-wrappers">
          <div
            className="tp-slider-item-5 scene tp-slider-height-5 swiper-slide d-flex align-items-center"
            data-bg-color="#f5f5f5"
            style={{
              backgroundColor: "#f5f5f5",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="tp-slider-content-5 p-relative z-index-1">
                    <h3 className="tp-slider-title-5" style={{
                      color: "#1a1a1a",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      fontSize: "clamp(36px, 5vw, 60px)",
                      letterSpacing: "-0.5px",
                    }}>
                      Hivio
                    </h3>
                    <p style={{
                      color: "#999999",
                      fontSize: "15px",
                      marginTop: "20px",
                      marginBottom: "30px",
                      maxWidth: "400px",
                      lineHeight: 1.7,
                      fontFamily: "'Jost', sans-serif",
                    }}>
                      Khám phá bộ sưu tập tai nghe, loa và ampli
                      cao cấp từ những thương hiệu hàng đầu thế giới.
                    </p>

                    <div className="tp-slider-btn-5">
                      <Link href="/shop" className="tp-btn-green" style={{
                        backgroundColor: "#1a1a1a",
                        borderColor: "#1a1a1a",
                        letterSpacing: "2px",
                        padding: "15px 40px",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}>
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="tp-slider-thumb-wrapper-5 p-relative">
                    <div className="tp-slider-thumb-5 main-img layer">
                      <Image
                        data-depth="0.2"
                        src={main_img}
                        alt="Hivio Nam"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
