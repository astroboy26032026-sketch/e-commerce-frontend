import React from "react";

// prop type 
type IProps = {
  handleCouponSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
}

export default function CheckoutCoupon({handleCouponSubmit,setCouponCode}: IProps) {
  const [showCoupon, setShowCoupon] = React.useState(false);
  return (
    <div className="tp-checkout-verify-item">
      <p className="tp-checkout-verify-reveal">
        Có mã giảm giá?{" "}
        <button onClick={() => setShowCoupon(!showCoupon)} type="button" className="tp-checkout-coupon-form-reveal-btn">
          Nhấn vào đây để nhập mã
        </button>
      </p>

      {showCoupon && (
        <div id="tpCheckoutCouponForm" className="tp-return-customer">
          <form onSubmit={handleCouponSubmit}>
            <div className="tp-return-customer-input">
              <label>Mã giảm giá :</label>
              <input type="text" placeholder="Nhập mã" onChange={(e) => setCouponCode(e.target.value.toUpperCase())} />
            </div>
            <button
              type="submit"
              className="tp-return-customer-btn tp-checkout-btn"
            >
              Áp Dụng
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
