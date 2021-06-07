import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import image from "next/image";

export default function Layout({ page, children }: IProps) {
  const [isScroll, setIsScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleScroll = (e: IEvent) => {
    if (e.deltaY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onWheel={handleScroll}
      className="w-full flex items-center justify-between align-middle flex-col min-h-screen"
    >
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar isScroll={isScroll} />
      {children}
      {isLoading && (
        <div className=" w-screen h-screen bg-mainColor flex items-center justify-center align-middle fixed">
          <div className="hypnotic-2"></div>
        </div>
      )}
      <Footer />
    </div>
  );
}
