import React from "react";
import { ShapeLine } from "./svg";
import Timer from "./timer";
import Image, { StaticImageData } from "next/image";
import shape_1 from "@/assets/images/deal/shape/shape-1.png";
import shape_2 from "@/assets/images/deal/shape/shape-2.png";
import shape_3 from "@/assets/images/deal/shape/shape-3.png";
import shape_4 from "@/assets/images/deal/shape/shape-4.png";
import shape_5 from "@/assets/images/deal/shape/shape-5.png";
import shape_6 from "@/assets/images/deal/shape/shape-6.png";
import shape_7 from "@/assets/images/deal/shape/shape-7.png";

function Shape({ id, imgSrc }: { id: string; imgSrc: StaticImageData }) {
  return (
    <div className={`tp-deal-shape-${id}`}>
      <Image className="layer" src={imgSrc} alt="shape" />
    </div>
  );
}

export default function WeeklyDealArea() {
  return (
    <section
      className="tp-deal-area pt-135 pb-140 p-relative z-index-1 fix scene"
      data-bg-color="#f5f5f5"
      style={{backgroundColor:"#f5f5f5"}}
    >
      <div className="tp-deal-shape">
        <Image className="tp-deal-shape-7" src={shape_7} alt="shape" />
      </div>
      <div className="tp-deal-shape">
        <Shape id="1" imgSrc={shape_1} />
        <Shape id="2" imgSrc={shape_2} />
        <Shape id="3" imgSrc={shape_3} />
        <Shape id="4" imgSrc={shape_4} />
        <Shape id="5" imgSrc={shape_5} />
        <Shape id="6" imgSrc={shape_6} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="tp-deal-content text-center">
              <span className="tp-deal-title-pre">
                Ưu đãi hấp dẫn trong tuần!
                <ShapeLine />
              </span>
              <h3 className="tp-deal-title">
                Nhanh tay chọn thiết bị giá tốt nhất tuần!
              </h3>

              <div className="tp-deal-countdown">
                <div className="tp-product-countdown">
                  <div className="tp-product-countdown-inner">
                    <Timer expiryTimestamp={new Date("Dec 30 2026 20:20:22")} />
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
