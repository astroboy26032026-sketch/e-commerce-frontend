import React from "react";
import { WorkFour, WorkOne, WorkThree, WorkTwo } from "../svg";

const work_data = [
  {
    id: 1,
    icon: <WorkOne />,
    title: "Tìm Kiếm",
    subtitle: "Khám phá thiết bị âm thanh phù hợp",
  },
  {
    id: 2,
    icon: <WorkTwo />,
    title: "Đặt Hàng",
    subtitle: "Thanh toán nhanh chóng và an toàn",
  },
  {
    id: 3,
    icon: <WorkThree />,
    title: "Giao Hàng",
    subtitle: "Vận chuyển tận nơi toàn quốc",
  },
  {
    id: 4,
    icon: <WorkFour />,
    title: "Trải Nghiệm",
    subtitle: "Tận hưởng âm thanh cao cấp",
  },
];

export default function AboutWorkArea() {
  return (
    <section className="tp-work-area pt-115 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="tp-work-section-title-wrapper text-center mb-60">
              <h3 className="tp-work-section-title">
                Khám Phá <br /> Quy Trình Của Chúng Tôi
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {work_data.map((item) => (
            <div className="col-lg-3 col-sm-6" key={item.id}>
              <div className="tp-work-item mb-35 text-center">
                <div className="tp-work-icon d-flex align-items-end justify-content-center">
                  <span>{item.icon}</span>
                </div>
                <div className="tp-work-content">
                  <h3 className="tp-work-title">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4">
            <div className="tp-work-quote text-center">
              <p>
                Hãy khám phá ngay hôm nay và tìm <br /> thiết bị âm thanh hoàn hảo cho bạn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
