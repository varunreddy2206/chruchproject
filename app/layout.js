import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import TopHeader from "@/components/TopHeader";
import TopBar from "@/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RoboOnline",
  description: "Cutting-edge software, AI, and IT services",
  icons: {
    icon: "/Logo-removebg-preview1 (1).ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A2222]`}
      >
        {/* <TopHeader /> */}
        <TopBar/>
        <Header />
        <main className="pt-[50px]">{/* Add top padding to avoid overlap */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
