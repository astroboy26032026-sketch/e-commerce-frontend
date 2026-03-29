import React from "react";
import { Delivery, Money, Payment, Support } from "../svg";

export default function FeatureArea() {
  return (
    <section className="tp-feature-area tp-feature-border-5 pb-55">
      <div className="container">
        <div className="tp-feature-inner-5">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="tp-feature-item-5 d-flex align-items-center">
                <div className="tp-feature-icon-5">
                  <span>
                    <Delivery />
                  </span>
                </div>
                <div className="tp-feature-content-5">
                  <h3 className="tp-feature-title-5">Giao Hàng Linh Hoạt</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="tp-feature-item-5 d-flex align-items-center">
                <div className="tp-feature-icon-5">
                  <span>
                    <Money />
                  </span>
                </div>
                <div className="tp-feature-content-5">
                  <h3 className="tp-feature-title-5">Hoàn Tiền 100%</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="tp-feature-item-5 d-flex align-items-center">
                <div className="tp-feature-icon-5">
                  <span>
                    <Payment />
                  </span>
                </div>
                <div className="tp-feature-content-5">
                  <h3 className="tp-feature-title-5">Thanh Toán An Toàn</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="tp-feature-item-5 d-flex align-items-center">
                <div className="tp-feature-icon-5">
                  <span>
                    <Support />
                  </span>
                </div>
                <div className="tp-feature-content-5">
                  <h3 className="tp-feature-title-5">Hỗ Trợ 24/7</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
