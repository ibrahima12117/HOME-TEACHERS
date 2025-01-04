"use client";
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section className="flex justify-between items-center p-4 bg-black text-white">
        <Link href="/">
          <div className="flex items-center">
            <img src="./images/favicon.png" alt="" className="w-16 h-14 mr-4" />
            <span className="notranslate font-bold text-2xl -ml-7">HOME TEACHERS</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-14">
          <Link href="/" className="text-xl">Accueil</Link>
          <Link href="/Elementaire" className="text-xl">Elementaire</Link>
          <Link href="/College" className="text-xl">College</Link>
          <Link href="/Lycee" className="text-xl">Lycee</Link>
          <Link href="/Service" className="text-xl notranslate">Tarifs</Link>
          <Link href="/seconnecter" className="text-xl">Se connecter</Link>
        </div>
        <div className="flex items-center">
          <Link href="/Search"><Search className="mt-1 mr-4" size={28} /></Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </section>
      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-black text-white  text-start ml-56">
          <Link href="/" className="text-xl py-2" onClick={toggleMenu}>Accueil</Link>
          <Link href="/Elementaire" className="text-xl py-2" onClick={toggleMenu}>Elementaire</Link>
          <Link href="/College" className="text-xl py-2" onClick={toggleMenu}>College</Link>
          <Link href="/Lycee" className="text-xl py-2" onClick={toggleMenu}>Lycee</Link>
          <Link href="/Service" className="text-xl py-2" onClick={toggleMenu}>Tarifs</Link>
          <Link href="/seconnecter" className="text-xl py-2" onClick={toggleMenu}>Se connecter</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;













