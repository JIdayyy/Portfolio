import { getDisplayName } from "next/dist/next-server/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="h-20 bg-mainColor w-full flex items-center fixed top-0 align-middle justify-around ">
      <div className="text-4xl  font-bold text-blue">Ja.</div>

      <button
        onClick={() => setIsMenu(!isMenu)}
        className="md:hidden outline-none transform  translate-x-20 w-11"
      >
        <img src="img/burger.png" alt="" />
      </button>

      {isMenu && (
        <ul className="fixed bottom-0 transition-opacity duration-500 hover:opacity-100 opacity-80  z-40 bg-mainColor w-full text-white flex flex-col items-center justify-center align-middle">
          <li className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full">
            <Link href="/">Accueil</Link>
          </li>
          <li className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full">
            <Link href="/about">A Propos</Link>
          </li>
          <li className="border-b hover:bg-indigo-900 active:bg-indigo-900 cursor-pointer border-indigo-900 py-5 text-center text-lg h-full w-full">
            <Link href="/project">Projects</Link>
          </li>
          <li>
            {" "}
            <a
              href="/Abbadie Julien CV.pdf"
              download="CV_ABBADIE_JULIEN"
              target="_blank"
            >
              <button className="py-4 " type="button">
                Télécharger Mon CV
              </button>
            </a>
          </li>
        </ul>
      )}

      <ul className="hidden md:flex ">
        <li className="text-white items-center align-middle justify-center  flex mx-4 text-2xl">
          <img className="w-6 h-5 mx-2" src="img/home.png" alt="" />
          <Link href="/">
            <button className="hover:border-blue text-lg  border-transparent border-b">
              Accueil
            </button>
          </Link>
        </li>
        <li className="text-white items-center align-middle justify-center flex mx-4 text-2xl">
          <img className="w-5 h-5 mx-2" src="img/avatar.png" alt="" />
          <Link href="/about">
            <button className="hover:border-blue text-lg border-transparent border-b">
              A Propos
            </button>
          </Link>
        </li>
        <li className="text-white items-center align-middle justify-center flex mx-4 text-2xl">
          <img className="w-6 h-5 mx-2" src="img/tv.png" alt="" />
          <Link href="/project">
            <button className="hover:border-blue text-lg border-transparent border-b">
              Project
            </button>
          </Link>
          <li>
            {" "}
            <a
              href="/Abbadie Julien CV.pdf"
              download="CV_ABBADIE_JULIEN"
              target="_blank"
            >
              <button type="button">
                <img
                  className="mx-10 top-7  right-10"
                  src="/img/cv.png"
                  alt=""
                />
              </button>
            </a>
          </li>
        </li>
      </ul>
    </div>
  );
}
