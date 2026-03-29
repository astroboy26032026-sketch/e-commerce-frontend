import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderArea from "@/layouts/header/header-area";
import Footer from "@/layouts/footer/footer";
import not_found from "@/assets/images/error/error.png";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Không Tìm Thấy - Hivio",
};

export default function NotFoundPage() {
  return (
    <Wrapper>
      {/* header area */}
      <HeaderArea />
      {/* header area */}

      <main>
        {/* not found area */}
        <section className="tp-error-area pt-110 pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="tp-error-content text-center">
                  <div className="tp-error-thumb">
                    <Image src={not_found} alt="not-found" />
                  </div>

                  <h3 className="tp-error-title">Rất tiếc! Không tìm thấy trang</h3>
                  <p>
                    Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
                  </p>

                  <Link href="/" className="tp-btn">
                    Về Trang Chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* not found area */}
      </main>

      {/* footer area */}
      <Footer />
      {/* footer area */}
    </Wrapper>
  );
}
