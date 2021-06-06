import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-20 bg-mainColor w-full flex items-center align-middle justify-around ">
      <div className="text-4xl  font-bold text-blue">Ja.</div>
      <div>
        <ul className="flex">
          <li className="text-white items-center align-middle justify-center  flex mx-4 text-xl">
            <img className="w-4 h-4 mx-2" src="img/home.png" alt="" />
            <Link href="/">
              <button className="hover:border-blue  border-transparent border-b">
                Accueil
              </button>
            </Link>
          </li>
          <li className="text-white items-center align-middle justify-center flex mx-4 text-xl">
            <img className="w-4 h-4 mx-2" src="img/avatar.png" alt="" />
            <Link href="/about">
              <button className="hover:border-blue border-transparent border-b">
                A Propos
              </button>
            </Link>
          </li>
          <li className="text-white items-center align-middle justify-center flex mx-4 text-xl">
            <img className="w-4 h-4 mx-2" src="img/tv.png" alt="" />
            <Link href="/project">
              <button className="hover:border-blue border-transparent border-b">
                Project
              </button>
            </Link>
            <button>
              <img className="mx-4" src="/img/cv.png" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
