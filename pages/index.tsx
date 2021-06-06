import Head from "next/head";

interface IProps {
  name: string;
}

export default function Home({ name }: IProps) {
  return (
    <div className="md:px-32 px-4  flex flex-col bg-gradient-to-tr from-grad via-grad2 to-grad items-center justify-center min-h-screen py-2">
      <div className="w-full h-full my-32 md:flex-row  flex flex-col items-center justify-around align-middle">
        <div className="text-white mx-4">
          <p className="md:text-4xl text-3xl my-4">Bonjour !</p>
          <h1 className="md:text-5xl text-4xl my-4">
            JE SUIS <span className="text-blue font-bold">JULIEN ABBADIE</span>
          </h1>
          <p className="md:text-2xl w-full text-xl my-4">
            Développeur{" "}
            <span className="text-blue font-bold italic">Web React/NodeJs</span>
          </p>
        </div>
        <div>
          <img className="my-10 w-64 md:my-0" src="img/webdev.png" alt="" />
        </div>
      </div>

      <div className="w-full my-32 h-full md:flex-row  flex flex-col items-center justify-around align-middle">
        <div>
          <img className="w-64" src="img/avatarbig.png" alt="" />
        </div>
        <div className="text-white xl:w-4/12 mx-10 md:w-8/12 w-10/12 my-4">
          <h1 className="md:text-5xl text-4xl w-full my-4">
            JE ME <span className="text-blue">PRESENTE</span>
          </h1>
          <p className="md:text-lg w-full text-base my-4">
            Je suis tombé amoureux du développement et j’apprend tous les jours
            en pratiquant...
            <br></br>
            <br></br>
            Compétent en <span className="text-blue italic">front/back</span> et
            plus particulièrement sur les technos{" "}
            <span className="text-blue italic">React/NodeJs</span> je me forme
            aussi en parrallèle sur d’autres outils à la mode tels que{" "}
            <span className="text-blue italic">NextJs</span> ou
            <span className="mx-1 text-blue italic">Python...</span>
            <br></br>
            <br></br>
            Curieux de nature j’aime entreprendre de nouveaux projets ou
            compétences comme l’UI/UX ou le design et je n’ai pas peur
            d’apprendre pour évoluer.
          </p>
        </div>
      </div>
    </div>
  );
}
