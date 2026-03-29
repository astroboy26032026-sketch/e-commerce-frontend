"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import CartItem from "./cart-item";
import { clearCart } from "@/redux/feature/cartSlice";
import Link from "next/link";
import useCartInfo from "@/hooks/use-cart-info";
import { formatPrice } from "@/utils/format-price";

export default function CartArea() {
  const dispatch = useAppDispatch();
  const { cart_products } = useAppSelector((state) => state.cart);
  const {total} = useCartInfo();
  return (
    <section className="tp-cart-area pb-120">
      <div className="container">
        {cart_products.length === 0 ? (
          <div className="text-center pt-50">
            <h3>Giỏ hàng trống</h3>
            <Link href="/shop" className="tp-cart-checkout-btn mt-20">
              Tiếp Tục Mua Hàng
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-cart-list mb-25 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={2} className="tp-cart-header-product">
                        Sản Phẩm
                      </th>
                      <th className="tp-cart-header-price">Giá</th>
                      <th className="tp-cart-header-quantity">Số Lượng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart_products.map((item) => (
                      <CartItem cartItem={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-12">
                    <div className="tp-cart-update text-md-end mr-30">
                      <button
                        onClick={() => dispatch(clearCart())}
                        type="button"
                        className="tp-cart-update-btn"
                      >
                        Xóa Giỏ Hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-cart-checkout-wrapper">
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span className="tp-cart-checkout-top-title">Tạm Tính</span>
                  <span className="tp-cart-checkout-top-price">{formatPrice(total)}</span>
                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Tổng Cộng</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="tp-cart-checkout-proceed">
                  <Link
                    href="/checkout"
                    className="tp-cart-checkout-btn w-100"
                  >
                    Tiến Hành Thanh Toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
