import React from "react";
import { useRouter } from "next/navigation";
// internal
import { Box, DeliveryTwo, Processing, Truck } from "../svg";
import { IUserOrdersRes } from "@/types/order-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { userLoggedOut } from "@/redux/feature/authSlice";

// prop type
type IProps = {
  orderData: IUserOrdersRes
}

const NavProfileTab = ({ orderData }:IProps) => {
  const {user} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();
  const router = useRouter();
  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/')
  }
  return (
    <div className="profile__main">
      <div className="profile__main-top pb-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-content">
                <h4 className="profile__main-title">Xin chào {user?.username}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile__main-logout text-sm-end">
              <a onClick={handleLogout} className="pointer tp-logout-btn">
                Đăng Xuất
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__main-info">
        <div className="row gx-3">
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-download">{orderData?.totalDoc}</span>
                  <Box />
                </span>
              </div>
              <h4 className="profile__main-info-title">Tổng Đơn Hàng</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-order">{orderData?.pending}</span>
                  <Processing />
                </span>
              </div>
              <h4 className="profile__main-info-title">Chờ Xử Lý</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-wishlist">
                    {orderData?.processing}
                  </span>
                  <Truck />
                </span>
              </div>
              <h4 className="profile__main-info-title">Đang Giao</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-wishlist">
                    {orderData?.delivered}
                  </span>
                  <DeliveryTwo />
                </span>
              </div>
              <h4 className="profile__main-info-title">Hoàn Thành</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavProfileTab;
