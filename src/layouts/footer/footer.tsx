import React from 'react';
import Image from 'next/image';
import { Email, Location } from '@/components/svg';
import logo from '@/assets/images/logo/logo.svg';
import pay from '@/assets/images/footer/footer-pay-2.png';
import Link from 'next/link';

type IProps = {
    clr?: string
}
export default function Footer({ clr='#f5f5f5' }: IProps) {
  return (
    <footer>
        <div className="tp-footer-area tp-footer-style-2 tp-footer-style-5" style={{backgroundColor: clr}}>
        <div className="tp-footer-top pt-95 pb-45">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-footer-widget footer-col-1 mb-50">
                        <div className="tp-footer-widget-content">
                            <div className="tp-footer-logo">
                               <Link href="/">
                                 <Image src={logo} alt="logo"/>
                               </Link>
                            </div>
                            <p className="tp-footer-desc">Hivio - Mang đến thiết bị âm thanh cao cấp từ những thương hiệu hàng đầu thế giới.</p>
                            <div className="tp-footer-social">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-footer-widget footer-col-2 mb-50">
                        <h4 className="tp-footer-widget-title">Tài Khoản</h4>
                        <div className="tp-footer-widget-content">
                            <ul>
                                <li><a href="#">Theo Dõi Đơn Hàng</a></li>
                                <li><a href="#">Vận Chuyển</a></li>
                                <li><a href="#">Yêu Thích</a></li>
                                <li><a href="#">Tài Khoản</a></li>
                                <li><a href="#">Lịch Sử Đơn Hàng</a></li>
                                <li><a href="#">Đổi Trả</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-footer-widget footer-col-3 mb-50">
                        <h4 className="tp-footer-widget-title">Thông Tin</h4>
                        <div className="tp-footer-widget-content">
                            <ul>
                                <li><a href="#">Câu Chuyện Của Chúng Tôi</a></li>
                                <li><a href="#">Tuyển Dụng</a></li>
                                <li><a href="#">Chính Sách Bảo Mật</a></li>
                                <li><a href="#">Điều Khoản & Điều Kiện</a></li>
                                <li><a href="#">Tin Tức Mới</a></li>
                                <li><a href="#">Liên Hệ</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="tp-footer-widget footer-col-4 mb-50">
                        <h4 className="tp-footer-widget-title">Liên Hệ</h4>
                        <div className="tp-footer-widget-content">
                            <div className="tp-footer-talk mb-20">
                                <span>Có câu hỏi? Gọi cho chúng tôi</span>
                                <h4><a href="tel:1900-6868">1900 6868</a></h4>
                            </div>
                            <div className="tp-footer-contact">
                                <div className="tp-footer-contact-item d-flex align-items-start">
                                <div className="tp-footer-contact-icon">
                                    <span>
                                        <Email/>
                                    </span>
                                </div>
                                <div className="tp-footer-contact-content">
                                    <p><a href="mailto:info@hivio.vn">info@hivio.vn</a></p>
                                </div>
                                </div>
                                <div className="tp-footer-contact-item d-flex align-items-start">
                                <div className="tp-footer-contact-icon">
                                    <span>
                                        <Location/>
                                    </span>
                                </div>
                                <div className="tp-footer-contact-content">
                                    <p><a href="#" target="_blank">Quận Hoàng Mai <br/> Hà Nội, Việt Nam</a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tp-footer-bottom">
            <div className="container">
                <div className="tp-footer-bottom-wrapper">
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="tp-footer-copyright">
                            <p>© {new Date().getFullYear()} Hivio. Tất cả quyền được bảo lưu.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tp-footer-payment text-md-end">
                            <p>
                              <Image src={pay} alt="pay"/>
                            </p>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
        </div>
     </div>
    </footer>
  )
}
