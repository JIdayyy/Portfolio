import { getDisplayName } from "next/dist/next-server/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({ isScroll }: IProps) {
  const [isMenu, setIsMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <div
      className={`${
        isScroll && "bg-opacity-60"
      } h-20 bg-mainColor w-full flex items-center fixed top-0 align-middle justify-around `}
    >
      {isModal && (
        <div className="fixed flex flex-col items-center justify-center align-middle top-0 text-white z-50 w-full bg-black bg-opacity-90 min-h-screen">
          <div className="bg-indigo-900 relative w-60 pt-10 h-80 flex flex-col items-center justify-around align-middle font-bold rounded">
            <button onClick={() => setIsModal(false)}>
              <img
                className="w-5 absolute outline-none focus:outline-none  transform translate-x-20 -translate-y-7"
                src="img/cross.png"
                alt=""
              />
            </button>

            <h3 className="mt-10">Téléchargez mon CV :</h3>
            <p className="text-xs my-2">( Format .pdf )</p>
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
        className="md:hidden outline-none transform  translate-x-20 w-11"
      >
        <img src="img/burger.png" alt="" />
      </button>

      {isMenu && (
        <ul className="fixed top-20 transition-opacity duration-500 hover:opacity-100 opacity-80  z-40 bg-mainColor w-full text-white flex flex-col items-center justify-center align-middle">
          <Link href="/">
            <li className="border-b  hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full">
              Accueil
            </li>
          </Link>
          <Link href="/about">
            <li className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full">
              A Propos
            </li>
          </Link>
          <Link href="/project">
            <li className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full">
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
          <img className="w-6 h-5 mx-2" src="img/home.png" alt="" />
          <Link href="/">
            <button className="hover:border-blue outline-none focus:outline-none text-lg  border-transparent border-b">
              Accueil
            </button>
          </Link>
        </li>
        <li className="text-white items-center align-middle justify-center flex mx-4 text-2xl">
          <img className="w-5 h-5 mx-2" src="img/avatar.png" alt="" />
          <Link href="/about">
            <button className="hover:border-blue outline-none focus:outline-none text-lg border-transparent border-b">
              A Propos
            </button>
          </Link>
        </li>
        <li className="text-white items-center align-middle justify-center flex mx-4 text-2xl">
          <img className="w-6 h-5 mx-2" src="img/tv.png" alt="" />
          <Link href="/project">
            <button className="hover:border-blue outline-none focus:outline-none text-lg border-transparent border-b">
              Project
            </button>
          </Link>
          <li>
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
        </li>
      </ul>
    </div>
  );
}
