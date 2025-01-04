"use client";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import CONTACT from "@/app/components/contact";
import React from "react";
import axios from "axios";


library.add(faEye, faEyeSlash);

const Conecter = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [numeroDeTelephone, setNumeroDeTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [passwordType, setPasswordType] = useState("password");
  const [icon, setIcon] = useState(faEye);
  
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setIcon(faEyeSlash);
    } else {
      setPasswordType("password");
      setIcon(faEye);
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
      try {
       const response = await axios.post('/api/users/', {nom, email, numeroDeTelephone, motDePasse});
       console.log(response);
      }catch (err) {
        console.log(err);
      }
    
  }
   

  return (
    <div>
      <Navbar />
      <section className="flex flex-col-reverse md:flex-row m-9 justify-center">
        <div className="bg-sky-500 w-full md:w-1/2 h-auto rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-black mb-4 notranslate">
            HOME TEACHERS
          </h1>
          <p className="text-black mb-6">
            Creer votre compte et connectez-vous a HOME TEACHERS.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Nom:</label>
            <input
              type="text"
              value={nom}
             onChange={(e) => setNom(e.target.value)}
              placeholder="Nom"
              className="bg-black w-full h-14 rounded-2xl mb-4"
            />
            <label htmlFor="">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email "
              className="bg-black w-full h-14 rounded-2xl mb-4"
            />
            <label htmlFor="">Numero de telephone:</label>
            <input
              type="number"
              value={numeroDeTelephone}
              onChange={(e) => setNumeroDeTelephone(e.target.value)}
              placeholder="Numero de telephone"
              className="bg-black w-full h-14 rounded-2xl mb-4"
            />
            <label htmlFor="">Mot de passe:</label>
            <div className="relative mb-4">
              <input
                type={passwordType}
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
               
                placeholder="Mot de passe"
                className="bg-black w-full h-14 rounded-2xl"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-4 right-4"
              >
                <FontAwesomeIcon icon={icon} />
              </button>
            </div>
            <label htmlFor="">Confirmer le mot de passe:</label>
            <div className="relative mb-4">
              <input
                type={passwordType}
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                placeholder="Confirmer le mot de passe"
                className="bg-black w-full h-14 rounded-2xl"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-4 right-4"
              >
                <FontAwesomeIcon icon={icon} />
              </button>
            </div>
            <button className="font-bold text-xl text-white bg-cyan-400 rounded-2xl w-full py-4 mt-8">
              Se connecter
            </button>
          </form>
        </div>
        <div className="relative 3/3 ">
          <img
            src="https://images.pexels.com/photos/5477682/pexels-photo-5477682.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-2xl "
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 rounded-2xl ">
            <span
              className="text-white text-xl font-bold"
              style={{ transform: "rotate(-90deg)" }}
            >
              {" "}
              Bienvenue sur HOME TEACHERS ! Veuillez vous connecter pour accéder
              à votre compte et découvrir toutes nos ressources pédagogiques.{" "}
            </span>
          </div>
        </div>
      </section>
      <footer className="w-7/8 h-56 bg-sky-500 rounded-2xl block m-10">
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

export default Conecter;
