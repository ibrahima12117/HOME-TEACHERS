"use client";
// pages/index.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  lieu: string;
  formation: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    lieu: "",
    formation: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      telephone: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Code pour gérer la soumission du formulaire
    console.log(formData);
  };

  const handleClose = () => {
    // Rediriger vers une page vide pour simuler la fermeture
    window.location.href = "/"; // Redirige vers la page d'accueil
  };
  const [submitted, setSubmitted] = useState(false); const handleFormSubmit = (event: FormEvent) => { event.preventDefault(); handleSubmit(event); setSubmitted(true); };

  return (
    <form onSubmit={handleSubmit} className="mt-44 mb-44">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-2/3 h-auto bg-sky-500 rounded-2xl relative">
          <button
            type="button"
            className="absolute top-4 right-4 text-white"
            onClick={handleClose}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="m-10 text-black">
            <h1 className="font-bold text-2xl">
              Remplis le formulaire ci-dessous pour être rappelé(e) par un
              conseiller et t'inscrire dans la formation de ton choix
            </h1>
            <p className="mt-4 text-2xl">
              Une fois que nous aurons reçu ta demande, un conseiller(e) te
              rappellera dans les plus brefs délais et ainsi pour confirmer ton
              inscription{" "}
            </p>
          </div>
          <div className="flex gap-28 space-y-4">
            <div className="ml-4 mt-3">
              <label htmlFor="prenom" className="block text-black font-bold">
                Prénom:
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="mt-1 block px-16 rounded-md text-black  focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="nom" className="block text-black font-bold">
                Nom:
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="-mt-20  rounded-md px-16 text-black focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="flex  space-y-4">
            <div className="ml-4 mt-5">
              <label htmlFor="email" className="block text-black font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block px-16 rounded-md text-black focus:ring-opacity-50"
              />
            </div>
            <div className="ml-16 mt-3">
              <label
                htmlFor="telephone"
                className="block text-black font-bold ml-12 "
              >
                Numero de Téléphone:
              </label>
              <PhoneInput
                country={"sn"}
                value={formData.telephone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "telephone",
                  required: true,
                  autoFocus: true,
                }}
                containerClass="mt-1 block  rounded-md shadow-sm px-16 text-black  "
              />
            </div>
          </div>
          <div className=" mt-4">
            <label htmlFor="Code postal" className="text-black ml-5 font-bold">
              Code postal:
            </label>
            <br />
            <input
              type="text"
              id="lieu"
              name="lieu"
              value={formData.lieu}
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="Niveau" className="text-black ml-5 font-bold">
              Quel est votre niveau?
            </label>
            <input
              type="text"
              placeholder="classe"
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="Note" className="text-black ml-5 font-bold">
              Quel est la moyenne vous aviez eut lors de votre dernier controle?
            </label>
            <input
              type="text"
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="Nombre" className="text-black ml-5 font-bold">
              Quels est le nombre eleve qui on besoin de professeur?
            </label>
            <input
              type="number"
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="" className="text-black ml-5 font-bold">
              De quel professeur avait vous besoin?
            </label>
            <input
              type="text"
              placeholder="math pc francais..."
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />
            <div className="mt-4">
              <label className="text-black ml-5 font-bold">Combien d'eleve on besoin d'enseignant?</label>
              <input
                type="number"
                placeholder="1ou2 ou..."
                className="rounded-md ml-5 w-5/6 px-20 text-black"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="mt-7 px-16 py-3 bg-black rounded-xl flex items-end m-9 text-2xl font-bold text-white" > Soumettre </button>
          </div>
        </div>
      </div>
    </form>
  );
}
