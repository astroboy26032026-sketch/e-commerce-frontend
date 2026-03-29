'use client';
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartTwo, QuickView, Wishlist } from "../svg";
import { IProduct } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product } from "@/redux/feature/cartSlice";
import { add_to_wishlist } from "@/redux/feature/wishlistSlice";
import Link from "next/link";
import { setModalProduct } from "@/redux/feature/productSlice";
import { formatPrice } from "@/utils/format-price";

type IProps = {
  product: IProduct;
};

export default function ProductItem({ product }: IProps) {
  const {cart_products} = useAppSelector((state) => state.cart);
  const {wishlists} = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  const router = useRouter();
  // is already in cart
  const isAlreadyInCart = cart_products.some((item) => item.id === product.id);
  // is already in wishlist
  const isAlreadyInWishlist = wishlists.some((item) => item.id === product.id);

  // handle add to cart
  function handleAddToCart(prd: IProduct) {
    if(isAlreadyInCart){
      router.push('/cart');
    } else {
      dispatch(add_cart_product({
        id: prd.id,
        img: prd.image as string,
        price: Number(prd.final_price),
        quantityAvailable: prd.stock,
        title: prd.title
      }))
    }
  };
  // handle add to wishlist
  function handleAddToWishlist(prd: IProduct) {
    if(isAlreadyInWishlist){
      router.push('/wishlist');
    } else {
      dispatch(add_to_wishlist({
        id: prd.id,
        img: prd.image as string,
        price: Number(prd.final_price),
        quantityAvailable: prd.stock,
        title: prd.title
      }))
    }
  }

  return (
    <div className="tp-product-item-5 p-relative white-bg mb-40">
      <div className="tp-product-thumb-5 w-img fix mb-15">
        <Link href={`/shop-details/${product?.slug}`}>
          <Image
            src={`${product?.image}`}
            alt="product-img"
            width={306}
            height={353}
          />
        </Link>

        <div className="tp-product-action-2 tp-product-action-5 tp-product-action-greenStyle">
          <div className="tp-product-action-item-2 d-flex flex-column">
            <button
              onClick={()=>handleAddToCart(product)}
              type="button"
              className={`tp-product-action-btn-2 tp-product-add-cart-btn ${isAlreadyInCart ? 'active' : ''}`}
            >
              <CartTwo />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                {isAlreadyInCart ? 'Đã trong giỏ' : 'Thêm vào giỏ'}
              </span>
            </button>
            <button
              type="button"
              className="tp-product-action-btn-2 tp-product-quick-view-btn"
              onClick={() => dispatch(setModalProduct(product))}
            >
              <QuickView />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Xem nhanh
              </span>
            </button>
            <button
              onClick={() => handleAddToWishlist(product)}
              type="button"
              className={`tp-product-action-btn-2 tp-product-add-to-wishlist-btn ${isAlreadyInWishlist ? 'active' : ''}`}
            >
              <Wishlist />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                {isAlreadyInWishlist ? 'Đã yêu thích' : 'Yêu thích'}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="tp-product-content-5">
        <div className="tp-product-tag-5">
          <span>
            <a href="#">{product?.category_name}</a>
          </span>
        </div>
        <h3 className="tp-product-title-5">
          <Link href={`/shop-details/${product?.slug}`}>{product?.title}</Link>
        </h3>

        <div className="tp-product-price-wrapper-5">
          <span className="tp-product-price-5 new-price">
            {formatPrice(product?.final_price)}{" "}
          </span>
          {Number(product.discount) > 0 && (
            <span className="tp-product-price-5 old-price">
              {formatPrice(product?.price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
