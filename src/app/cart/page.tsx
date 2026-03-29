import { Metadata } from "next";
import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderArea from "@/layouts/header/header-area";
import Footer from "@/layouts/footer/footer";
import CartArea from "@/components/cart/cart-area";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";

export const metadata: Metadata = {
  title: "Giỏ Hàng - Hivio",
};

export default function CartPage() {
  return (
    <Wrapper>
      {/* header area */}
      <HeaderArea />
      {/* header area */}

      <main>
        {/* breadcrumb area */}
        <BreadcrumbArea
          top_cls="pt-95 pb-50"
          title="Giỏ Hàng"
          subtitle="Cửa Hàng"
        />
        {/* breadcrumb area */}

        {/* cart area */}
        <CartArea />
        {/* cart area */}
      </main>

      {/* footer area */}
      <Footer />
      {/* footer area */}
    </Wrapper>
  );
}
