"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Scrollbar, Pagination, Navigation } from "swiper/modules";
import { ICategory } from "@/types/category-d-t";
import { useRouter } from "next/navigation";
import Image from "next/image";

const slider_setting: SwiperOptions = {
  slidesPerView: 5,
  spaceBetween: 12,
  pagination: {
    el: ".tp-category-slider-dot-4",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-category-slider-button-next-5",
    prevEl: ".tp-category-slider-button-prev-5",
  },
  scrollbar: {
    el: ".tp-category-5-swiper-scrollbar",
    draggable: true,
    dragClass: "tp-swiper-scrollbar-drag",
    snapOnRelease: true,
  },

  breakpoints: {
    "1400": {
      slidesPerView: 5,
    },
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 4,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 2,
    },
    "400": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

//   type
type IProps = {
  categories: ICategory[];
};
export default function CategorySlider({ categories }: IProps) {
  const router = useRouter();
  function handleCategory (slug:string) {
    router.push(`/shop?parentCategory=${slug}`)
  }
  return (
    <Swiper
      {...slider_setting}
      modules={[Scrollbar, Pagination, Navigation]}
      className="tp-category-slider-active-5 swiper-container mb-50"
    >
      {categories.map((item) => (
        <SwiperSlide
          key={item.id}
          className="tp-category-item-5 p-relative z-index-1 fix"
        >
          <a className="pointer" onClick={()=> handleCategory(item.slug)} style={{ display: "block", textAlign: "center" }}>
            <div style={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#f5f5f5",
              marginBottom: "12px",
            }}>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
            <h3 className="tp-category-title-5" style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#1a1a1a",
              marginTop: "14px",
              paddingBottom: "10px",
              lineHeight: 1.4,
            }}>{item.title}</h3>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
