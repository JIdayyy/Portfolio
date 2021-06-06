import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
interface IProps {
  page?: String;
  children?: React.ReactNode;
}

export default function Layout({ page, children }: IProps) {
  return (
    <div>
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
