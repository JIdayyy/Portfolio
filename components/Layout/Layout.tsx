import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
interface IProps {
  page?: String;
  children?: React.ReactNode;
}

export default function Layout({ page, children }: IProps) {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = (e: IEvent) => {
    if (e.deltaY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
    console.log(isScroll);
  };

  return (
    <div onWheel={handleScroll} className="w-full min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar isScroll={isScroll} />
      {children}
      <Footer />
    </div>
  );
}
