import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home({ name }: IProps) {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <div
      onWheel={handleScroll}
      className="md:px-32 mt-20 xl:px-40 px-4 bg-perso flex flex-col items-center justify-center min-h-screen py-2"
    >
      <div className="w-full h-full my-32 md:flex-row  flex flex-col items-center justify-around align-middle">
        <div className="text-white   md:mx-4">
          <span className="flex items-start align-middle ">
            <p className="md:text-2xl text-2xl mx-4 sm:mx-0 my-4">Bonjour !</p>
            <img
              className="w-11 mx-4 zindex0 z-0 wave"
              src="img/main.png"
              alt=""
            />
          </span>
          <h1 className=" xl:text-4xl mx-4 sm:mx-0 md:text-2xl sm:text-2xl text-2xl my-2">
            JE SUIS <span className="text-blue  font-bold">JULIEN ABBADIE</span>
          </h1>
          <div className="typewriter mx-4 sm:mx-0 text-left">
            <h2 className="md:text-xl  xl:text-2xl text-lg my-4">
              Développeur
              <span className="text-blue mx-2 text-left font-bold italic">
                Web React/NodeJs
              </span>
            </h2>
          </div>
        </div>
        <div>
          <img className="my-14 w-80 md:my-0" src="img/webdev.png" alt="" />
        </div>
      </div>

      <div className="w-full my-32 h-full md:flex-row flex-col-reverse  flex  items-center justify-around align-middle">
        <div>
          <img className="w-80" src="img/avatarbig.png" alt="" />
        </div>
        <div className="text-white xl:w-6/12 mx-10 md:w-10/12 w-10/12 my-4">
          <h1 className="md:text-3xl text-4xl w-full my-4">
            JE ME <span className="text-blue">PRESENTE</span>
          </h1>
          <p className="md:text-sm xl:text-xl w-full text-base my-4">
            Je suis tombé amoureux du développement et j’apprends tous les jours
            en pratiquant...
            <br></br>
            <br></br>
            Compétent en <span className="text-blue italic">front/back</span> et
            plus particulièrement sur les technos{" "}
            <span className="text-blue italic">React/NodeJs</span> je me forme
            aussi en parallèle sur d’autres outils à la mode tels que{" "}
            <span className="text-blue italic">NextJs</span> ou
            <span className="mx-1 text-blue italic">Python...</span>
            <br></br>
            <br></br>
            Curieux de nature j’aime entreprendre de nouveaux projets et
            développer de nouvelles compétences comme l’UI/UX, le design et je
            n’ai pas peur d’apprendre pour évoluer.
          </p>
        </div>
      </div>

      <div className="w-full text-white text-4xl flex  items-center align-middle justify-center">
        MES <span className="text-blue mx-3">RESEAUX</span>
      </div>
      <div className="w-full text-white my-24 flex items-center justify-around align-middle">
        <button>
          <img className="w-16" src="img/insta.png" alt="" />
        </button>
        <button>
          <img className="w-16" src="img/twitter.png" alt="" />
        </button>
        <button>
          <img className="w-16" src="img/linkedin.png" alt="" />
        </button>
        <button>
          <img className="w-16" src="img/fb.png" alt="" />
        </button>
      </div>
    </div>
  );
}
