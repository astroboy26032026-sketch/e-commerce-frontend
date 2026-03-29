'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
// internal
import useCartInfo from '@/hooks/use-cart-info';
import empty_cart_img from '@/assets/images/product/cartmini/empty-cart.png';
import { remove_product } from '../../redux/feature/cartSlice';
import { useAppSelector } from '@/redux/hook';
import { ICartType } from '@/types/cart-type';
import { formatPrice } from "@/utils/format-price";

// prop type 
type IProps = {
    openSidebar: boolean;
    onShowSidebar: () => void;
}

const CartMiniSidebar = ({ openSidebar, onShowSidebar }: IProps) => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const { total } = useCartInfo();
  const dispatch = useDispatch();

  // handle remove product
  const handleRemovePrd = (prd:ICartType) => {
    dispatch(remove_product({id: prd.id,title: prd.title}));
  }

  return (
    <>
      <div className={`cartmini__area cartmini__style-green ${openSidebar ? 'cartmini-opened' : ''}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Giỏ hàng</h4>
              </div>
              <div className="cartmini__close">
                <button onClick={onShowSidebar} type="button" className="cartmini__close-btn cartmini-close-btn">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            {cart_products.length > 0 && <div className="cartmini__widget">
              {cart_products.map((item,i) => (
                <div key={i} className="cartmini__widget-item">
                  <div className="cartmini__thumb">
                    <Link href={`/shop-details/${item.slug || item.id}`} onClick={onShowSidebar}>
                      <Image src={`${item?.img}`} width={70} height={60} alt={item.title} />
                    </Link>
                  </div>
                  <div className="cartmini__content">
                    <h5 className="cartmini__title">
                      <Link href={`/shop-details/${item.slug || item.id}`} onClick={onShowSidebar}>{item.title}</Link>
                    </h5>
                    <div className="cartmini__price-wrapper">
                      <span className="cartmini__price">{formatPrice(item.price)}</span>
                      <span className="cartmini__quantity">{" "}x{item.orderQuantity}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Xóa khỏi giỏ hàng"
                    onClick={() => handleRemovePrd(item)}
                    className="cartmini__del pointer"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                </div>
              ))}
            </div>
            }
            {/* if no item in cart */}
            {cart_products.length === 0 && <div className="cartmini__empty text-center">
              <Image src={empty_cart_img} alt="empty-cart-img" />
              <p>Giỏ hàng trống</p>
              <Link href="/shop" className="tp-btn">Đến Cửa Hàng</Link>
            </div>}
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Tạm tính:</h4>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="cartmini__checkout-btn">
              <Link href="/cart" onClick={onShowSidebar} className="tp-btn mb-10 w-100">
                 Xem Giỏ Hàng
             </Link>
              <Link href="/checkout" onClick={onShowSidebar} className="tp-btn tp-btn-border w-100">
              Thanh Toán
             </Link>
            </div>
          </div>
        </div>
      </div>
      {/* overlay start */}
      <div onClick={onShowSidebar} className={`body-overlay ${openSidebar ? 'opened' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default CartMiniSidebar;