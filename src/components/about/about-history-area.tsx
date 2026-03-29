"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, EffectFade } from "swiper/modules";
import Image from "next/image";

// slider data
const slider_data = [
  {
    title: "Khởi Nguồn <br> Hivio",
    subtitle_1: "Hivio ra đời từ niềm đam mê âm thanh chất lượng cao. Chúng tôi bắt đầu với một cửa hàng nhỏ tại Hà Nội, chuyên cung cấp tai nghe và thiết bị âm thanh chính hãng cho cộng đồng audiophile Việt Nam.",
    subtitle_2: "Khám phá bộ sưu tập của chúng tôi ngay hôm nay!",
    img: "/assets/images/history/history-1.jpg",
    thumb_text: "Chào mừng đến với <br> Hivio",
    year: 2021,
  },
  {
    title: "Mở Rộng <br> Hệ Thống",
    subtitle_1: "Sau một năm hoạt động, Hivio mở rộng danh mục sản phẩm với hơn 200 thiết bị từ các thương hiệu hàng đầu: Sony, Sennheiser, Bose, Marshall. Chúng tôi trở thành đại lý ủy quyền chính thức.",
    subtitle_2: "Cam kết 100% hàng chính hãng, bảo hành đầy đủ.",
    img: "/assets/images/history/history-2.jpg",
    thumb_text: "Chào mừng đến với <br> Hivio",
    year: 2022,
  },
  {
    title: "Ra Mắt <br> Cửa Hàng Online",
    subtitle_1: "Năm 2023 đánh dấu bước ngoặt khi Hivio chính thức ra mắt nền tảng thương mại điện tử. Khách hàng trên toàn quốc có thể dễ dàng mua sắm thiết bị âm thanh cao cấp từ nhà.",
    subtitle_2: "Giao hàng miễn phí toàn quốc cho đơn hàng từ 2 triệu đồng.",
    img: "/assets/images/history/history-1.jpg",
    thumb_text: "Chào mừng đến với <br> Hivio",
    year: 2023,
  },
  {
    title: "Phát Triển <br> Bền Vững",
    subtitle_1: "Hivio tiếp tục phát triển với hơn 50.000 khách hàng tin tưởng. Chúng tôi đầu tư vào trải nghiệm nghe thử tại showroom và dịch vụ tư vấn chuyên sâu cho từng nhu cầu âm thanh.",
    subtitle_2: "Đồng hành cùng bạn trên hành trình khám phá âm thanh!",
    img: "/assets/images/history/history-2.jpg",
    thumb_text: "Chào mừng đến với <br> Hivio",
    year: 2025,
  },
];

// slider nav data
const slider_nav_data = [2021, 2022, 2023, 2025];

export default function AboutHistoryArea() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  return (
    <section
      className="tp-history-area pt-140 pb-140"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-history-slider mb-50">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, EffectFade]}
                effect="fade"
                className="tp-history-slider-active swiper-container"
              >
                {slider_data.map((item, i) => (
                  <SwiperSlide
                    key={i}
                    className="tp-thistory-item"
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <div className="row">
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="tp-history-wrapper pr-45">
                          <div className="tp-history-content mb-40">
                            <h3
                              className="tp-history-title"
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            ></h3>
                            <p>{item.subtitle_1}</p>
                            <p>{item.subtitle_2}</p>
                          </div>
                          <div className="tp-history-year">
                            <p>{item.year}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="tp-history-thumb-wrapper ml-150 p-relative">
                          <div className="tp-history-thumb-text">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.thumb_text,
                              }}
                            ></p>
                          </div>
                          <div className="tp-history-thumb m-img">
                            <Image
                              src={item.img}
                              alt="thumb_img"
                              width={588}
                              height={380}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="tp-history-nav">
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                className="tp-history-nav-active swiper-container"
                onSwiper={setThumbsSwiper}
                spaceBetween={220}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
              >
                {slider_nav_data.map((num, i) => (
                  <SwiperSlide
                    key={i}
                    className="tp-history-nav-year text-center"
                  >
                    <p>{num}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
