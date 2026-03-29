import { ICartType } from "@/types/cart-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Minus, Plus, Remove } from "../svg";
import { useAppDispatch } from "@/redux/hook";
import {add_cart_product,quantityDecrement,remove_product} from "@/redux/feature/cartSlice";
import { formatPrice } from "@/utils/format-price";

// prop  type
type IProps = {
  cartItem: ICartType;
};

export default function CartItem({ cartItem }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td className="tp-cart-img">
        <Link href={`/shop-details/${cartItem.id}`}>
          <Image
            src={`${cartItem?.img}`}
            alt="cart-img"
            width={78}
            height={100}
          />
        </Link>
      </td>
      <td className="tp-cart-title">
        <Link href={`/shop-details/${cartItem.id}`}>{cartItem.title}</Link>
      </td>
      <td className="tp-cart-price">
        <span>{formatPrice(cartItem.price)}</span>
      </td>
      <td className="tp-cart-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span
            className="tp-cart-minus"
            onClick={() => dispatch(quantityDecrement(cartItem))}
          >
            <Minus />
          </span>
          <input
            className="tp-cart-input"
            type="text"
            value={cartItem.orderQuantity}
            readOnly
          />
          <span
            onClick={() => dispatch(add_cart_product(cartItem))}
            className="tp-cart-plus"
          >
            <Plus />
          </span>
        </div>
      </td>
      <td className="tp-cart-action">
        <button
          onClick={() =>
            dispatch(remove_product({ id: cartItem.id, title: cartItem.title }))
          }
          className="tp-cart-action-btn"
        >
          <Remove /> <span>Xóa</span>
        </button>
      </td>
    </tr>
  );
}
