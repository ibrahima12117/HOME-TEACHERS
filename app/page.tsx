"use client";
import Navbar from "./components/Navbar";
import ExpandableSection from "./components/Section";
import CONTACT from "@/app/components/contact";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className=" ibou flex gap-10">
        <div className="mt-20 ml-8">
          <h1 className="notranslate text-4xl font-light">
            Renforcer vos competences avec HOME TEACHERS
          </h1>
          <p>
            grace a nos prefesseur tres experimente vous pourrez augmenter le
            niveau de vos enfants a l'ecole{" "}
          </p>
          <div className="flex gap-6 mt-5">
            <Link href="/discuter">
              {" "}
              <button className="bg-sky-500 px-5 rounded-2xl">
                {" "}
                Parler avec un conseiller{" "}
              </button>{" "}
            </Link>

            <a href="/seconnecter">
              <button className="bg-sky-500 px-8 rounded-2xl">
                {" "}
                Se connecter
              </button>
            </a>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="rounded-3xl"
          alt=""
        />
      </div>
      <div className="text-center m-10">
        <h2 className="text-3xl font-bold">
          Fait evouler vos competence et ceux de vos enfants
        </h2>
        <p className="text-xl">
          HOME TEACHERS est un service de formation et de renforcement de
          compétences pour vos enfants. Nous accompagnons les parents et les
          professeurs à apprendre à faire des choix et à travailler ensemble
          pour améliorer leur enfant.
        </p>
      </div>
      <div className="w-full h-auto rounded-2xl mt-8 bg-sky-500 flex  gap-16  ">
        <div>
          <h1 className="text-2xl font-bold ml-5 ">
            Decouvrer la meilleure version de vous meme grace HOME TEACHERS
          </h1>
          <p className="ml-5 text-xl mt-5  ">
            Avec HOME TEACHERS, l'apprentissage se fait dans le confort de votre
            domicile. Plus besoin de se déplacer ou de s'adapter à des horaires
            fixes. Nos enseignants viennent à vous, selon votre emploi du temps.
          </p>
          <Link href="/discuter">
            <button className="bg-black px-5 rounded-2xl mt-5 ml-5">
              discuter avec nos conseillers
            </button>
          </Link>
        </div>
        <div className="imad">
        <img
          src="images/success.png"
          className="rounded-2xl mr-8 h-52 w-64 im1"
          alt=""
        />
        </div>
      </div>
      <div className="mt-10 ml-7 h-auto max-w-full bg-slate-900 rounded-2xl">
        <div className="flex gap-11">
          <h1 className="text-2xl font-bold">
            Prenez votre avenir et l'avenir de vos enfants en main
          </h1>
          <p>
            {" "}
            Façonnez l'avenir aujourd'hui pour un lendemain meilleur. Offrez à
            vos enfants les outils pour réussir et réalisez vos propres
            ambitions avec HOME TEACHERS.
          </p>
        </div>
        <br />
        <ExpandableSection
          title=" Repenser l'Éducation à Domicile"
          content="Nous vivons à une époque où l'éducation évolue constamment et où l'apprentissage à domicile devient une solution de plus en plus prisée. Avec le projet HOME TEACHERS, nous nous engageons à redéfinir l'éducation personnalisée, en rendant l'apprentissage accessible, efficace et adapté à chaque élève. "
        />{" "}
        <ExpandableSection
          title="Pourquoi choisir HOME TEACHERS ?"
          content=" Enseignement Personnalisé: Chaque élève est unique, avec ses propres forces, faiblesses et style d'apprentissage. Nos enseignants qualifiés développent des plans d'apprentissage personnalisés pour répondre aux besoins individuels de chaque étudiant, assurant ainsi une progression optimale."
        />{" "}
        <ExpandableSection
          title=" Suivi Continu et Support"
          content="Nous croyons en un suivi continu pour évaluer la progression de nos élèves. Des rapports réguliers et des communications constantes avec les parents permettent de suivre les progrès et d'ajuster les méthodes d'apprentissage si nécessaire."
        />
        <ExpandableSection
          title=" Ressources Complètes et Variées"
          content="Nos enseignants utilisent une gamme variée de ressources, des manuels aux outils numériques, pour enrichir l'expérience d'apprentissage et rendre les leçons interactives et captivantes."
        />
        <ExpandableSection
          title="Notre Mission"
          content="Chez HOME TEACHERS, notre mission est de fournir une éducation de qualité supérieure qui inspire, motive et prépare les élèves à relever les défis académiques et personnels. Nous visons à créer un environnement d'apprentissage stimulant où chaque élève peut s'épanouir et atteindre son plein potentiel."
        />
      </div>
      <section className=" ibou m-2 flex gap-10">
        <img
          src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className="h-6/7 rounded-2xl"
          alt=""
        />
        <h1 className="text-3xl font-bold mt-44 ibou2">
          Uni nous surmonterons tous les obsclates et assurer une place on nos
          enfants{" "}
        </h1>
      </section>

      <footer className="w-full h-auto bg-sky-500  block m-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 ml-9 text-xl">
            <h1 className="text-2xl font-bold ">HOME TEACHERS</h1>
            <a href="/about" className="hover:underline mt-5">
              À propos
            </a>
            <br />
            <div className="-ml-56 mt-6 text-center">
              {" "}
              <CONTACT />{" "}
            </div>
            <br />
            <a href="/privacy" className="hover:underline mt-6">
              Politique de confidentialité
            </a>
            <p className="text-sm mt-7">
              © 2024 Home Teachers. Tous droits réservés.
            </p>
          </div>
          <div>
            <button>+221 77 639 89 52</button>
            <br />
            <button>+221 77 736 90 53</button>
            <br />
            <a href="mailto:iboug123@outlook.com">iboug123@outlook.com</a>
          </div>

          <div className="flex space-x-2 mt-24 mr-7">
            <p>suivez-nous</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35C.594 0 0 .594 0 1.325v21.351C0 23.407.594 24 1.325 24H12v-9.294H9.294V11.53H12V8.827c0-2.662 1.575-4.122 4-4.122 1.156 0 2.168.086 2.459.125v2.849H16.33c-1.335 0-1.597.634-1.597 1.566v2.056h3.188l-.416 3.176H14.733V24h7.942c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.56a9.94 9.94 0 01-2.828.775A4.932 4.932 0 0023.337 3c-.951.566-2.005.978-3.127 1.2a4.916 4.916 0 00-8.373 4.482A13.953 13.953 0 011.671 3.15 4.916 4.916 0 003.18 9.725c-.772-.025-1.497-.237-2.13-.59v.06c0 2.377 1.693 4.362 3.946 4.817-.412.112-.849.172-1.296.172-.316 0-.623-.03-.924-.086.63 1.956 2.445 3.378 4.6 3.418A9.868 9.868 0 010 21.532a13.94 13.94 0 007.548 2.213c9.142 0 14.307-7.719 14.307-14.413 0-.219-.004-.437-.014-.653A10.207 10.207 0 0024 4.56z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
