'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import logo from "@/assets/images/logo/logo.svg";
import { IOrderResponse } from '@/types/order-d-t';
import ReactToPrint from 'react-to-print';
import { ICartType } from '@/types/cart-type';
import { formatPrice } from "@/utils/format-price";

type IProps = {
    order:IOrderResponse
}

export default function OrderArea({order}:IProps) {
  const {username,address,city,country,state,zip_code,phone,email,shipCost,amount,products,id,created_at} = order || {};
  const printRef = useRef<HTMLDivElement | null>(null);
  let order_products: ICartType[] = [];
  try {
    order_products = JSON.parse(products);
  } catch {
    order_products = [];
  }
  return (
    <>
    {order ? (
      <section className="invoice__area pt-120 pb-120">
      <div className="container">
        <div className="invoice__msg-wrapper">
          <div className="row">
            <div className="col-xl-12">
              <div className="invoice_msg mb-40">
                <p className="text-black alert alert-success">Cảm ơn <strong>{username}</strong>! Đơn hàng của bạn đã được tiếp nhận.</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={printRef} className="invoice__wrapper grey-bg-2 pt-40 pb-40 pl-40 pr-40 tp-invoice-print-wrapper">
          <div className="invoice__header-wrapper border-2 border-bottom border-white mb-40">
            <div className="row">
              <div className="col-xl-12">
                <div className="invoice__header pb-20">
                  <div className="row align-items-end">
                    <div className="col-md-4 col-sm-6">
                      <div className="invoice__left">
                        <Image src={logo} alt="logo" className='mb-10' />
                        <p>{address} <br /> {city}, {country} </p>
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-6">
                      <div className="invoice__right mt-15 mt-sm-0 text-sm-end">
                        <h3 className="text-uppercase font-70 mb-20">Invoice</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice__customer mb-30">
            <div className="row">
              <div className="col-md-6 col-sm-8">
                <div className="invoice__customer-details">
                  <h4 className="mb-10 text-uppercase">{username}</h4>
                  <p className="mb-0 text-uppercase">{country}</p>
                  <p className="mb-0 text-uppercase">{city}</p>
                  <p className="mb-0">{phone}</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-4">
                <div className="invoice__details mt-md-0 mt-20 text-md-end">
                  <p className="mb-0">
                    <strong>Order ID:</strong> #{id}
                  </p>
                  <p className="mb-0">
                    <strong>Date:</strong> {dayjs(created_at).format("MMMM D, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice__order-table pt-30 pb-30 pl-40 pr-40 bg-white mb-30">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Item Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {products && order_products?.map((item, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.orderQuantity}</td>
                    <td>{formatPrice(item.price)}</td>
                    <td>{formatPrice(item.price * (item.orderQuantity ?? 0))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="invoice__total pt-40 pb-10 alert-success pl-40 pr-40 mb-30">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="invoice__shippint-cost mb-30">
                  <h5 className="mb-0">Shipping Cost</h5>
                  <p className="tp-font-medium">{formatPrice(shipCost)}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="invoice__total-ammount mb-30 text-end">
                  <h5 className="mb-0">Total Ammount</h5>
                  <p className="tp-font-medium text-danger">
                    <strong>{formatPrice(parseInt(amount))}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="invoice__print text-end mt-3">
          <div className="row">
            <div className="col-xl-12">
              <ReactToPrint
                trigger={() => (
                  <button
                    type="button"
                    className="tp-invoice-print tp-btn tp-btn-black"
                  >
                    <span className="mr-5">
                      <i className="fa-regular fa-print"></i>
                    </span>{" "}
                    Print
                  </button>
                )}
                content={() => printRef.current}
                documentTitle="Invoice"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    ) : (
      <div className='text-center mt-50'>
        <h3>No order found</h3>
      </div>
    )}
    </>
  )
}
