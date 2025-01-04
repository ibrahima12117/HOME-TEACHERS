import Navbar from "../components/Navbar";
import Link from "next/link";
import CONTACT from "@/app/components/contact";
import ExpandableSection from "../components/Section";
function Service() {
  return (
    <div className="">
      <Navbar />
      <div className="w-full h-auto bg-sky-700 ">
        <div className="mt-8">
          <div className="font-bold text-2xl flex justify-center   ">
            <h1 className="notranslate">
              Tarifs des services que propose HOME TEACHERS
            </h1>
          </div>
          <div className="flex justify-around mt-9 gap-4 nana">
            <div className="bg-sky-400 px-14 py-2 rounded-2xl">
              <button>parler direct a un conseiller</button>
            </div>
            <div className="bg-black px-14 py-2  rounded-2xl">
              <button>Presence Local</button>
            </div>
            <div className="bg-lime-500 px-14 py-2  rounded-2xl">
              <button>Offres Groupees</button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="p-8 mt-8 items-center justify-center min-h-screen bg-gradient-to-b from-black via-sky-700 to-sky-500 nana1 ">
        <div className="text-2xl font-bold flex  flex-col justify-center text-center">
          <h1 className="notranslate ">
            HOME TEACHERS - Offre Promotionnelle
          </h1>
          <p className="mt-5">Ne manquez pas l'occasion de profiter de notre offre special</p>
        </div>
        
        <br />
        <div>
          <main className="  items-center justify-center flex-1 w-full px-28 mt-11 text-center">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-gray-800">
                Offre de Lancement
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Profitez de notre offre spéciale de lancement :
              </p>
              <p className="mt-2 text-2xl text-green-600">
                <strong>-20 %</strong> pour un groupe d'au moin 3 eleves !
              </p>
              <p className="mt-2 text-2xl text-green-600">
                <strong>-25 %</strong> sur votre première année avec nous !
              </p>
              <a
                href="/seconnecter"
                className="mt-12 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 notranslate"
              >
                Inscrivez-vous maintenant
              </a>
            </div>
          </main>
        </div>
      </div>
      <div className="  rounded-lg shadow-lg notranslate">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-gray-500 mb-5">
            Nos Plans d'Abonnement
          </h2>
        </div>
        <div className="flex justify-center">
          <h2 className="text-lg font-bold mb-4">Fréquence de paiement</h2>
        </div>
        <div className="flex justify-center relative ">
          <button className="px-8 py-2 bg-teal-300 rounded-s-lg font-bold ">
            Mensuel
          </button>
          <button className="px-12 py-3 bg-teal-700 rounded-xl -m-3 relative font-bold ">
            Annuel (-10%)
          </button>
          <button className="px-6 py-2 bg-teal-300 rounded-e-lg font-bold">
            Bisanuel (-15%)
          </button>
        </div>
        <br />
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Niveau</th>
              <th className="px-4 py-2">Mensuel</th>
              <th className="px-4 py-2">Annuel (-10%)</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Teachers Elmentaire(CI-CM2)</td>
              <td className="border px-4 py-2">35500FCFA</td>
              <td className="border px-4 py-2">383400FCFA</td>
              
            </tr>
            <tr className="">
              <td className="border px-4 py-2">Teachers Francais</td>
              <td className="border px-4 py-2">39000FCFA</td>
              <td className="border px-4 py-2">421200FCFA</td>
              
            </tr>
            <tr>
              <td className="border px-4 py-2">Teachers Anglais</td>
              <td className="border px-4 py-2">39000FCFA</td>
              <td className="border px-4 py-2">421200FCFA</td>
             
            </tr>
            <tr>
              <td className="border px-4 py-2">Teachers Espagnol</td>
              <td className="border px-4 py-2">39000FCFA</td>
              <td className="border px-4 py-2">421200FCFA</td>
              
            </tr>
            <tr>
              <td className="border px-4 py-2">Teachers Histoire/Geo</td>
              <td className="border px-4 py-2">39000FCFA</td>
              <td className="border px-4 py-2">421200FCFA</td>
              
            </tr>
            <tr>
              <td className="border px-4 py-2">Teachers phylosophie</td>
              <td className="border px-4 py-2">39000FCFA</td>
              <td className="border px-4 py-2">421200FCFA</td>
              
            </tr>
            <tr>
              <td className="border px-4 py-2">Teachers Math/PC</td>
              <td className="border px-4 py-2">44000FCFA</td>
              <td className="border px-4 py-2">475200FCFA</td>
             
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className="py-8 bg-sky-700 nana1">
        <h2 className="text-2xl font-bold text-center mb-4">
          Questions Fréquentes a propos des tarifs de HOME TEACHERS
        </h2>
        <div className="">
          <div>
            <ExpandableSection
              title=" Quel est le coût d'un abonnement mensuel ?"
              content="Le coût d'un abonnement mensuel est de 426,000 CFA avec une
              réduction de 10% pour un abonnement annuel."
            />
            <ExpandableSection
              title="Puis-je annuler mon abonnement à tout moment ?"
              content=" Oui, vous pouvez annuler votre abonnement à tout moment à partir
              de votre compte."
            />
            <ExpandableSection
              title="Comment puis-je obtenir de l'aide en cas de problème ?"
              content=" Notre équipe de support est disponible 24/7 pour vous aider. Vous pouvez nous contacter par email, téléphone ou via le chat en direct sur notre site web."
            />
          </div>
        </div>
      </div>
      <br/>
      <footer className="w-full h-auto bg-sky-500  block ">
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

export default Service;
