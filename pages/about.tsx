export default function about() {
  return (
    <div className="px-9 w-full  h-full flex flex-col items-center align-middle justify-center  min-h-screen bg-perso">
      <div className="flex flex-col  md:flex-row  mt-40 w-full h-full items-center justify-center align-middle">
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl">
            Qui <span className="text-blue">suis</span> je ?
          </h1>
          <p className="my-2 text-lg md:text-xl">
            Bonjour, Je suis <span className="text-blue">Julien</span> et je
            viens de Biarritz.
            <br></br>Je suis <span className="text-blue">développeur web</span>{" "}
            et étudiant à la <span className="text-blue">Wild Code School</span>
            .
          </p>
          <h2>A part coder j’aime aussi !</h2>
          <ul className="flex flex-col">
            <li className="flex items-center justify-start align-middle">
              <img className="w-5 mx-3 my-1" src="img/doigt.png" alt="" /> Jeux
              Vidéos
            </li>
            <li className="flex items-center justify-start align-middle">
              {" "}
              <img className="w-5 mx-3 my-1" src="img/doigt.png" alt="" />{" "}
              Tech&Science
            </li>
            <li className="flex items-center justify-start align-middle">
              {" "}
              <img className="w-5 mx-3 my-1" src="img/doigt.png" alt="" />{" "}
              Sports ( MMA, Cyclo ... )
            </li>
            <li className="flex items-center justify-start align-middle">
              {" "}
              <img className="w-5 mx-3 my-1" src="img/doigt.png" alt="" />{" "}
              Voyager
            </li>
            <li className="text-xs w-full mx-4 my-2">
              “I never lose either I win or I learn”
            </li>
          </ul>
        </div>
        <img className="w-64 my-6 mx-10" src="img/me.png" alt="" />
      </div>
      <div className="w-full text-white flex flex-col items-center align-middle justify-center ">
        <h1 className="text-3xl my-8">
          Compétences <span className="text-blue">Techs</span>
        </h1>

        <div className="w-full lg:px-20 xl:px-32 2xl:px-52 grid grid-rows-2 mb-24 grid-cols-4">
          <div className="flex border p-2 m-2 md:text-3xl md:py-8  rounded-md text-blue  items-center align-middle justify-center">
            HTML
          </div>
          <div className="flex border p-2 m-2 md:text-3xl md:py-8  rounded-md  items-center align-middle justify-center">
            CSS
          </div>
          <div className="flex border text-blue md:text-3xl md:py-8  p-2 m-2 rounded-md  items-center align-middle justify-center">
            JS.
          </div>
          <div className="flex border p-2 m-2 md:text-3xl md:py-8  rounded-md  items-center align-middle justify-center">
            ReactJs
          </div>
          <div className="flex border p-2 m-2 md:text-3xl md:py-8  rounded-md  items-center align-middle justify-center">
            NextJs
          </div>
          <div className="flex border text-blue md:text-3xl md:py-8  p-2 m-2 rounded-md  items-center align-middle justify-center">
            NodeJs
          </div>
          <div className="flex border p-2 m-2 md:text-3xl md:py-8  rounded-md  items-center align-middle justify-center">
            Express
          </div>
          <div className="flex border text-blue md:text-3xl md:py-8  p-2 m-2 rounded-md  items-center align-middle justify-center">
            Prisma
          </div>
        </div>
      </div>
    </div>
  );
}
