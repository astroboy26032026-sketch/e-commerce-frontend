import React from "react";
import Image from "next/image";
import ContactForm from "../form/contact-form";
import icon_1 from "@/assets/images/contact/contact-icon-1.png";
import icon_2 from "@/assets/images/contact/contact-icon-2.png";
import icon_3 from "@/assets/images/contact/contact-icon-3.png";

export default function ContactArea() {
  return (
    <>
      {/* breadcrumb area */}
      <section className="breadcrumb__area include-bg text-center pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">Liên Hệ Với Chúng Tôi</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Trang Chủ</a>
                  </span>
                  <span>Liên Hệ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area */}

      {/* contact area */}
      <section className="tp-contact-area pb-100">
        <div className="container">
          <div className="tp-contact-inner">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="tp-contact-wrapper">
                  <h3 className="tp-contact-title">Gửi Tin Nhắn</h3>

                  <div className="tp-contact-form">
                    {/* form area */}
                    <ContactForm />
                    {/* form area */}
                    <p className="ajax-response"></p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="tp-contact-info-wrapper">
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image
                          src={icon_1}
                          alt="icon"
                        />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p data-info="mail">
                        <a href="mailto:info@hivio.vn">info@hivio.vn</a>
                      </p>
                      <p data-info="phone">
                        <a href="tel:1900-6868">1900 6868</a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image
                          src={icon_2}
                          alt="icon"
                        />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps/place/Ho%C3%A0ng+Mai,+Hanoi"
                          target="_blank"
                        >
                          Quận Hoàng Mai <br /> Hà Nội, Việt Nam
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                         <Image
                          src={icon_3}
                          alt="icon"
                        />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <div className="tp-contact-social-wrapper mt-5">
                        <h4 className="tp-contact-social-title">
                          Theo dõi chúng tôi
                        </h4>

                        <div className="tp-contact-social-icon">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact area */}

      {/* <!-- map area start --> */}
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#1a1a1a" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.6!2d105.8544!3d20.9804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac5a5b5b5b5b%3A0x1234567890abcdef!2zUXXhuq1uIEhvw6BuZyBNYWksIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1678114595329!5m2!1svi!2s"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- map area end --> */}
    </>
  );
}
