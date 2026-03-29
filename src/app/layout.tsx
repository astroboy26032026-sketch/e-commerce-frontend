import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import ReduxProviders from "@/components/provider/redux-provider";
import "./globals.scss";

const jost = Jost({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--tp-ff-heading",
});
const jost_b = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--tp-ff-body",
});
const jost_p = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--tp-ff-p",
});
const jost_j = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--tp-ff-jost",
});
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--tp-ff-roboto",
});

export const metadata: Metadata = {
  title: "Hivio - Thiết Bị Âm Thanh Cao Cấp",
  description: "Hivio - Cửa hàng thiết bị âm thanh trực tuyến hàng đầu Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${jost_b.variable} ${jost.variable} ${jost_p.variable} ${jost_j.variable} ${roboto.variable}`}
      >
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  );
}
