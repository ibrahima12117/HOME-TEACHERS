import Navbar from "../components/Navbar";
import Link from "next/link";
function Service() {
  return (
    <div className="">
      <Navbar />
      <div className="flex gap-8">
        <img
          src="https://images.pexels.com/photos/5453824/pexels-photo-5453824.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-6/12 rounded-xl h-5/6 "
          alt=""
        />
        <div className="w-1/2">
          <h1 className="font-bold text-2xl text-sky-500">Nos Services</h1>
          <p className="text-justify text-xl">
            Pour nos services, nous vous proposons des professeurs très
            compétents et qualifiés et passionnés par l'enseignement. Chez Home
            Teachers, nous nous engageons à offrir une éducation personnalisée
            et de haute qualité, adaptée aux besoins spécifiques de chaque
            élève. Nos professeurs, experts dans leurs domaines respectifs,
            utilisent des méthodes d'enseignement innovantes et efficaces pour
            assurer la réussite académique de vos enfants. En choisissant Home
            Teachers, vous optez pour un soutien scolaire sur mesure, une
            approche pédagogique bienveillante et une réussite garantie pour
            chaque élève.{" "}
          </p>
          <Link href="/discuter">
            {" "}
            <button className="bg-sky-500 px-5 rounded-2xl mt-6 ml-5">
              {" "}
              Parler avec un conseiller{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="mt-14 ml-2 flex gap-6">
        <div className="mt-12 text-justify ">
        <h1 className="font-bold text-2xl text-sky-500">Pour les cours de CI a CM2</h1>
        <p className="text-2xl">Pour nos services d'enseignement à domicile de CI à CM2, nous proposons un tarif de <p className="font-semibold text-sky-500">45 200 F CFA</p> pour 1 eleve.Mais nous proposons un reduction du tarif pour 2 eleves qui sera donc<p className="font-semibold text-sky-500"> 69 400 F CFA</p></p>
        </div>
        <img src="https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-6/12 rounded-xl h-5/6 " alt=""/>
      </div>
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </div>
  );
}

export default Service;
