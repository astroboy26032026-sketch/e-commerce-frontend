'use client';
import React from "react";
import CheckoutCoupon from "./checkout-coupon";
import ErrMsg from "../err-msg";
import useCheckoutSubmit from "@/hooks/use-checkout-submit";
import { CardElement } from "@stripe/react-stripe-js";
import { useAppSelector } from "@/redux/hook";
import { formatPrice } from "@/utils/format-price";

export default function CheckoutArea() {
  const {handleSubmit,onSubmit,register,errors,handleCouponSubmit,setCouponCode,handleShippingCharge,shippingCharge,total,cart_products,loading} = useCheckoutSubmit();
  const {user} = useAppSelector((state) => state.auth);
  return (
      <section
        className="tp-checkout-area pb-120"
        data-bg-color="#EFF1F5"
        style={{ backgroundColor: "#EFF1F5" }}
      >
         <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-7">
                  <div className="tp-checkout-verify">
                    <CheckoutCoupon handleCouponSubmit={handleCouponSubmit} setCouponCode={setCouponCode} />
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="tp-checkout-bill-area">
                      <h3 className="tp-checkout-bill-title">Thông Tin Thanh Toán</h3>
                      <div className="tp-checkout-bill-form">
                        <div className="tp-checkout-bill-inner">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="tp-checkout-input">
                                <label>
                                  Họ <span>*</span>
                                </label>
                                <input {...register("fname", { required: `Họ là bắt buộc!` })} type="text" placeholder="Họ" defaultValue={user?.username} />
                                <ErrMsg msg={errors.fname?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="tp-checkout-input">
                                <label>
                                  Tên <span>*</span>
                                </label>
                                <input {...register("lname", { required: `Tên là bắt buộc!` })} type="text" placeholder="Tên" />
                                <ErrMsg msg={errors.lname?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>Tên công ty (tùy chọn)</label>
                                <input {...register("company")} type="text" placeholder="Tên công ty" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>Quốc gia / Khu vực </label>
                                <input {...register("state",{ required: `Quốc gia là bắt buộc!` })} type="text" placeholder="Việt Nam" defaultValue="Việt Nam" />
                                <ErrMsg msg={errors.state?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>Địa chỉ</label>
                                <input
                                  {...register("address",{ required: `Địa chỉ là bắt buộc!` })}
                                  type="text"
                                  placeholder="Số nhà và tên đường"
                                />
                                <ErrMsg msg={errors.address?.message as string} />
                              </div>

                              <div className="tp-checkout-input">
                                <input
                                  type="text"
                                  placeholder="Căn hộ, tòa nhà, v.v. (tùy chọn)"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>Thành phố / Tỉnh</label>
                                <input {...register("city",{ required: `Thành phố là bắt buộc!` })} type="text" placeholder="Thành phố hoặc Tỉnh" />
                                <ErrMsg msg={errors.city?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="tp-checkout-input">
                                <label>Tỉnh / Thành phố</label>
                                <select {...register("country",{ required: `Tỉnh/Thành phố là bắt buộc!` })} id="country" className="nice-select w-100">
                                  <option value="">Chọn Tỉnh/Thành phố</option>
                                  <option value="ho-chi-minh">TP. Hồ Chí Minh</option>
                                  <option value="ha-noi">Hà Nội</option>
                                  <option value="da-nang">Đà Nẵng</option>
                                  <option value="can-tho">Cần Thơ</option>
                                  <option value="hai-phong">Hải Phòng</option>
                                  <option value="binh-duong">Bình Dương</option>
                                  <option value="dong-nai">Đồng Nai</option>
                                </select>
                                <ErrMsg msg={errors.country?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="tp-checkout-input">
                                <label>Mã bưu điện</label>
                                <input {...register("zipCode",{ required: `Mã bưu điện là bắt buộc!` })} type="text" placeholder="Mã bưu điện" />
                                <ErrMsg msg={errors.zipCode?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>
                                  Số điện thoại <span>*</span>
                                </label>
                                <input {...register("phone", { required: `Số điện thoại là bắt buộc!` })} type="text" placeholder="Số điện thoại" />
                                <ErrMsg msg={errors.phone?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>
                                  Địa chỉ Email <span>*</span>
                                </label>
                                <input {...register("email", { required: `Email là bắt buộc!` })} type="email" placeholder="Email" defaultValue={user?.email} />
                                <ErrMsg msg={errors.email?.message as string} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="tp-checkout-input">
                                <label>Ghi chú đơn hàng (tùy chọn)</label>
                                <textarea {...register("orderNote")} placeholder="Ghi chú về đơn hàng, ví dụ: ghi chú đặc biệt cho giao hàng."></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    {/* checkout place order */}
                    <div className="tp-checkout-place white-bg">
                      <h3 className="tp-checkout-place-title">Đơn Hàng Của Bạn</h3>

                      <div className="tp-order-info-list">
                        <ul>
                          <li className="tp-order-info-list-header">
                            <h4>Sản phẩm</h4>
                            <h4>Tổng</h4>
                          </li>
                          {cart_products?.map((product) => (
                          <li key={product.id} className="tp-order-info-list-desc">
                            <p>
                              {product.title} <span> x {product.orderQuantity}</span>
                            </p>
                            <span>
                              {formatPrice(product.price * (product.orderQuantity ?? 0))}
                            </span>
                          </li>
                          ))}
                          <li className="tp-order-info-list-subtotal">
                            <span>Tạm tính</span>
                            <span>{formatPrice(total)}</span>
                          </li>
                          <li className="tp-order-info-list-shipping">
                            <span>Vận chuyển</span>
                            <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                              <span>
                                <input id="flat_rate" type="radio" name="shipping" value={20} onChange={(e) => handleShippingCharge(e.target.value)} checked={shippingCharge === 20} />
                                <label htmlFor="flat_rate">
                                  Phí cố định: <span>60.000₫</span>
                                </label>
                              </span>
                              <span>
                                <input
                                  id="local_pickup"
                                  type="radio"
                                  name="shipping"
                                  onChange={(e) => handleShippingCharge(e.target.value)}
                                  value={25}
                                  checked={shippingCharge === 25}
                                />
                                <label htmlFor="local_pickup">
                                  Nhận tại cửa hàng: <span>75.000₫</span>
                                </label>
                              </span>
                            </div>
                          </li>
                          <li className="tp-order-info-list-total">
                            <span>Tổng cộng</span>
                            <span>{formatPrice(total + shippingCharge)}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="tp-checkout-payment">
                        <div className="tp-checkout-payment-item">
                          <input type="radio" id="back_transfer" name="payment" />
                          <label
                            htmlFor="back_transfer"
                            data-bs-toggle="direct-bank-transfer"
                            className="mb-15"
                          >
                            Chuyển khoản ngân hàng
                          </label>
                          <div className="direct-bank-transfer">
                            <CardElement
                              options={{
                                style: {
                                  base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                      color: "#aab7c4",
                                    },
                                  },
                                  invalid: {
                                    color: "#9e2146",
                                  },
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tp-checkout-btn-wrapper">
                        <button disabled={loading} type="submit" className="tp-checkout-btn w-100">
                          {loading ? 'Đang xử lý...' : 'Đặt Hàng'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </form>
        </div>
      </section>
  );
}
