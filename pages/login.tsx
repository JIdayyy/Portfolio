import Link from "next/link";
import { session, signIn, signOut, useSession } from "next-auth/client";

export default function login() {
  return (
    <div className="w-full text-white font-bold h-screen bg-mainColor flex-col  flex items-center align-middle justify-center">
      <p className="text-red-900">
        During deployment only github auth is working.
        <button className="text-red-700 text-2xl mx-4" onClick={signIn}>
          SIGN IN HERE !
        </button>
      </p>
      <h1 className="my-10 text-4xl">
        Logg<span className="text-blue">in</span>
      </h1>
      <form className="flex flex-col ">
        <label htmlFor="">Pseudo :</label>
        <input
          className="my-2 focus:outline-none text-black outline-none px-4 py-2 rounded-md"
          type="text"
          placeholder="Enter your pseudo"
        />
        <label htmlFor="">Password :</label>
        <input
          className="my-2 focus:outline-none text-black outline-none px-4 py-2 rounded-md"
          type="text"
          placeholder="Enter your password..."
        />
        <label htmlFor="">Email :</label>
        <input
          className="my-2 focus:outline-none text-black outline-none px-4 py-2 rounded-md"
          type="text"
          placeholder="Enter your email adress ..."
        />
      </form>
      <p className="m-6">
        No account ? Register{" "}
        <span className="text-blue ">
          <Link href="/register">button</Link>
        </span>
        .
      </p>
    </div>
  );
}
