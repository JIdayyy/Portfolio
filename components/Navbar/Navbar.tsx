import { getDisplayName } from "next/dist/next-server/lib/utils";
import Link from "next/link";
import { useState, useEffect, FunctionComponent } from "react";
import { session, signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

const Navbar: FunctionComponent<IProps> = ({ isScroll }: IProps) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [session, loading] = useSession();

  return (
    <div
      className={`${
        isScroll && !isMenu && "bg-opacity-60"
      } h-20 bg-mainColor w-full flex zindex items-center fixed top-0 align-middle justify-around `}
    >
      {isModal && (
        <div className="absolute  flex flex-col items-center justify-center align-middle top-0 text-white w-full bg-black bg-opacity-90 min-h-screen">
          <div className="bg-indigo-900 relative  bg-opacity-20  w-60 pt-10 h-80 flex flex-col items-center justify-around align-middle font-bold rounded">
            <button
              className="absolute top-3 right-3 "
              onClick={() => setIsModal(false)}
            >
              <Image src="/img/cross.png" width={10} height={10} />
            </button>

            <h3 className="mt-10">Téléchargez mon CV :</h3>
            <p className="text-xs mt-20">( Format .pdf )</p>
            <a
              href="/Abbadie Julien CV.pdf"
              download="CV_ABBADIE_JULIEN"
              target="_blank"
            >
              <button
                className="border outline-none focus:outline-none bg-indigo-400 hover:bg-indigo-600 mt-20 py-2 px-4 rounded-md my-9"
                type="button"
              >
                Télécharger
              </button>
            </a>
          </div>
        </div>
      )}
      <div className="text-4xl  font-bold text-blue">Ja.</div>
      <button
        onClick={() => setIsMenu(!isMenu)}
        className="md:hidden focus:outline-none outline-none transform  translate-x-20 w-11"
      >
        <img src="img/burger.png" alt="" />
      </button>

      {isMenu && (
        <ul className="fixed top-20 transition-opacity duration-500 hover:opacity-100 opacity-80   bg-mainColor w-full text-white flex flex-col items-center justify-center align-middle">
          <Link href="/">
            <li
              onClick={() => setIsMenu(!isMenu)}
              className="border-b  hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full"
            >
              Accueil
            </li>
          </Link>
          <Link href="/about">
            <li
              onClick={() => setIsMenu(!isMenu)}
              className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full"
            >
              A Propos
            </li>
          </Link>
          <Link href="/project">
            <li
              onClick={() => setIsMenu(!isMenu)}
              className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full"
            >
              Projects
            </li>
          </Link>
          <li>
            {" "}
            <a
              href="/Abbadie Julien CV.pdf"
              download="CV_ABBADIE_JULIEN"
              target="_blank"
            >
              <button
                className="py-4 outline-none focus:outline-none"
                type="button"
              >
                Télécharger Mon CV
              </button>
            </a>
          </li>
          <li
            onClick={() => setIsMenu(!isMenu)}
            className="border-b flex items-center justify-center align-middle hover:bg-indigo-900 bg-opacity-100 opacity-100 bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full"
          >
            Fermer
            <img src="img/cross.png" className="w-5" alt="" />
          </li>
        </ul>
      )}

      <ul className="hidden md:flex ">
        <li className="text-white items-center align-middle justify-center  flex mx-4 text-2xl">
          <Image src="/img/home.png" width={23} height={20} />
          <Link href="/">
            <button className="hover:border-blue outline-none mx-3 focus:outline-none text-lg  border-transparent border-b">
              Accueil
            </button>
          </Link>
        </li>
        <li className="text-white items-center align-middle justify-center flex mx-4 text-2xl">
          <Image width={23} height={20} src="/img/avatar.png" />
          <Link href="/about">
            <button className="hover:border-blue outline-none mx-3 focus:outline-none text-lg border-transparent border-b">
              A Propos
            </button>
          </Link>
        </li>
        <li className="text-white items-center align-middle justify-center flex mx-4 text-2xl">
          <Image width={23} height={20} src="/img/tv.png" />
          <Link href="/project/">
            <button className="hover:border-blue outline-none mx-3 focus:outline-none text-lg border-transparent border-b">
              Project
            </button>
          </Link>
          <Image src="/img/admin.png" width={20} height={20} />
          <Link href="/login">
            <button className="hover:border-blue outline-none mx-3 focus:outline-none text-lg border-transparent border-b">
              Admin
            </button>
          </Link>
          {session && session.user.name}
          <button
            className="outline-none focus:outline-none"
            onClick={() => setIsModal(true)}
            type="button"
          >
            <img
              className="mx-10 w-14 top-7  right-10"
              src="/img/cv.png"
              alt=""
            />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
