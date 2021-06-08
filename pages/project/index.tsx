import Link from "next/link";

export default function project() {
  return (
    <div className="w-full h-full pt-40 flex flex-col  text-white items-center align-middle justify-center min-h-screen bg-perso">
      <h1 className="text-3xl m-14 md:4xl">
        Mes <span className="text-blue my-7">Projets</span> Récents
      </h1>
      <div className="flex flex-col md:flex-row items-center align-middle justify-center">
        <div className="flex flex-col m-4  items-center my-7 justify-center align-middle">
          <div className="bg-black bg-opacity-20 w-80 rounded-xl flex flex-col items-center align-middle justify-center p-10">
            <img className="w-96 h-32" src="img/wizic.png" alt="" />
            <h2 className="text-base my-2">Wizic</h2>
            <p className="text-xs h-24 my-1">
              Une web app spotify Like qui propose l’upload et l’écoute de
              musique ainsi que la création et l’administration de playlists.
              <br></br>
              Développé from scratch avec ReactJs.
            </p>
            <Link href="/project/2">
              <button className="py-2 flex items-center justify-center align-middle  px-4 bg-blue border border-white rounded-md my-4">
                <img className="w-5 mx-2" src="/img/visit.png" alt="" />
                VISITER
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col m-4  items-center my-7 justify-center align-middle">
          <div className="bg-black bg-opacity-20 w-80 rounded-xl flex flex-col items-center align-middle justify-center p-10">
            <img className="w-96 h-32" src="img/surfcamp.png" alt="" />
            <h2 className="text-base my-2">SurfCamp</h2>
            <p className="text-xs h-24 my-1">
              Un Site web AirBnB Like qui propose la mise à disposition de surf
              camp aux voyageurs et surfeurs autour du monde.
            </p>
            <Link href="/project/2">
              <button className="py-2 px-4 flex items-center justify-center align-middle  bg-blue border border-white rounded-md my-4">
                <img className="w-5 mx-2" src="/img/visit.png" alt="" />
                VISITER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
