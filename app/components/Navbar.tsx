import { Search } from "lucide-react";
import Link from "next/link";
function Navbar() {
  return (
    <div>
      <section className="flex gap-14 ">
      <Link href={"/"}>
        <div className="flex -ml-4 -mt-6">
          <img src="./images/favicon.png" alt="" className="w-16 h-14 m-10"></img>
     
          <span className="notranslate mt-14 font-bold text-2xl -ml-12">
            HOME TEACHERS
          </span>
         
        </div>
        </Link>
        <a href="/" className="text-xl mt-8">Acceuil</a>
        <a href="/Elementaire" className="text-xl mt-8">Elementaire</a>
        <a href="/College" className="text-xl mt-8">College</a>
        <a href="/Lycee" className="text-xl mt-8">Lycee</a>
        <a href="/Service" className="text-xl mt-8 notranslate">Nos services</a>
        <a href="/seconnecter" className="text-xl mt-8">se connecter</a>
         <a href="/Search"><Search className="mt-9 -mr-6" size={28}/></a>
      </section>
    </div>
  );
}

export default Navbar;
