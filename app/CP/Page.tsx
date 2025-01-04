import Navbar from "../components/Navbar";
import Link from "next/link";
function CP() {
  return ( 
    <div>
    <Navbar/>
    <section >
    <div className="  mt-8">
      <Link href={"/CP/DESSIN"}>
        <button className="bg-sky-500 w-full py-12 rounded-3xl text-4xl">
          DESSIN
        </button>
      </Link>
    </div>
    <div className="  mt-8">
      <Link href={"/CP/MATH"}>
        <button className="bg-sky-500 w-full py-12 rounded-3xl text-4xl">
          MATH
        </button>
      </Link>
    </div>
    <div className="  mt-8">
      <Link href={"/CP/ALPHABET"}>
        <button className="bg-sky-500 w-full py-12 rounded-3xl text-4xl">
          ALPHABET
        </button>
      </Link>
    </div>
  </section>
  <footer className="w-7/8 h-56 bg-sky-500 rounded-2xl block m-10 mt-20">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 ">
        <h1 className="text-2xl font-bold">HOME TEACHERS</h1>
        <a href="/about" className="hover:underline ">
          À propos
        </a>
        <br />
        <a href="https://wa.me/221777369053" className="hover:underline" target="_blank" rel="noopener noreferrer" > Contact </a>

        <br />
        <a href="/privacy" className="hover:underline">
          Politique de confidentialité
        </a>
        <p className="text-sm">
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

export default CP;