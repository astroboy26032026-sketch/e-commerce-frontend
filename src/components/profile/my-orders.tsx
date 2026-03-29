import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { IUserOrdersRes } from "@/types/order-d-t";


const getStatusClass = (status: string) => {
    switch (status) {
        case "pending":
        return "pending";
        case "processing":
        return "hold";
        case "delivered":
        return "done";
        default:
        return "";
    }
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case "pending":
        return "Chờ xử lý";
        case "processing":
        return "Đang xử lý";
        case "delivered":
        return "Đã giao";
        default:
        return status;
    }
};

// prop type
type IProps = {
    orderData: IUserOrdersRes
  }

const MyOrders = ({ orderData }:IProps) => {
  const order_items = orderData?.orders;
  return (
    <div className="profile__ticket table-responsive">
      {!order_items ||
        (order_items?.length === 0 && (
          <div
            style={{ height: "210px" }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <i
                style={{ fontSize: "30px" }}
                className="fa-solid fa-cart-circle-xmark"
              ></i>
              <p>Bạn chưa có đơn hàng nào!</p>
            </div>
          </div>
        ))}
      {order_items && order_items?.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã Đơn</th>
              <th scope="col">Thời Gian</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Xem</th>
            </tr>
          </thead>
          <tbody>
            {order_items.map((item, i) => (
              <tr key={i}>
                <th scope="row">#{item.id}</th>
                <td data-info="title">
                  {dayjs(item.createdAt).format("DD/MM/YYYY")}
                </td>
                <td
                  data-info={`status ${getStatusClass(item.status)}`}
                  className={`status text-capitalize ${getStatusClass(item.status)}`}
                >
                  {getStatusLabel(item.status)}
                </td>
                <td>
                  <Link href={`/order/${item.id}`} className="tp-logout-btn">
                    Hóa Đơn
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;
