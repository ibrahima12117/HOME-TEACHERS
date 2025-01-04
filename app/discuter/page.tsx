"use client";
// pages/index.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import apiClient from "../api/axios";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  numeroDeTelephone: string;
  codePostal: string;
  niveau: string;
  moyenneDernierControle: string;
  nombreEleveBesoinProfesseur: string;
  typeProfesseur: string;
  notelorsdeladerniercontrole: string;
}
export default function DiscuterPage() {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    numeroDeTelephone: "",
    codePostal: "",
    niveau: "",
    moyenneDernierControle: "",
    nombreEleveBesoinProfesseur: "",
    typeProfesseur: "",
    notelorsdeladerniercontrole: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, numeroDeTelephone: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await apiClient.post("/api/discu", formData);

      if (response.status === 201) {
        console.log("Data submitted successfully");
      } else {
        console.log("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    window.location.href = "/";
  };
  const [submitted, setSubmitted] = useState(false);
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(event);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-44 mb-44">
      <div className="flex justify-center items-center w-screen h-screen mt-10">
        <div className="w-2/3 h-auto bg-sky-500 rounded-2xl relative res">
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
          
          <div className="flex gap-2 space-y-4 dis">
            <div className="ml-4 mt-3 pre">
              <label htmlFor="prenom" className="block text-black font-bold ">
                Prénom:
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="mt-1 block px-16 rounded-md text-black  focus:ring-opacity-50  "
              />
            </div>
            <br/>
            <div className="">
              <label htmlFor="nom" className="block text-black font-bold">
                Nom:
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="  rounded-md px-16 text-black focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="flex  space-y-4 dis1">
            <div className="ml-4 mt-5 ">
              <label htmlFor="email" className="block text-black font-bold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block px-16 rounded-md text-black focus:ring-opacity-50"
              />
            </div>
            <div className="ml-16 mt-3 tel">
              <label
                htmlFor="numeDeTelephone"
                className="block text-black font-bold ml-12 "
              >
                Numero de Téléphone:
              </label>
              <PhoneInput
                country={"sn"}
                value={formData.numeroDeTelephone}
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
            {" "}
            <label htmlFor="codePostal" className="text-black ml-5 font-bold">
              Code postal:
            </label>{" "}
            <br />{" "}
            <input
              type="text"
              name="codePostal"
              value={formData.codePostal}
              onChange={handleChange}
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />{" "}
          </div>{" "}
          <div className=" mt-4">
            {" "}
            <label htmlFor="niveau" className="text-black ml-5 font-bold">
              Quel est votre niveau?
            </label>{" "}
            <input
              type="text"
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              placeholder="classe"
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />{" "}
          </div>{" "}
          <div className=" mt-4">
            {" "}
            <label
              htmlFor="moyenneDernierControle"
              className="text-black ml-5 font-bold"
            >
              Quel est la moyenne vous aviez eut lors de votre dernier controle?
            </label>{" "}
            <input
              type="text"
              name="moyenneDernierControle"
              value={formData.moyenneDernierControle}
              onChange={handleChange}
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />{" "}
          </div>{" "}
          <div className=" mt-4">
            {" "}
            <label
              htmlFor="nombreEleveBesoinProfesseur"
              className="text-black ml-5 font-bold"
            >
              Quels est le nombre eleve qui on besoin de professeur?
            </label>{" "}
            <input
              type="number"
              name="nombreEleveBesoinProfesseur"
              value={formData.nombreEleveBesoinProfesseur}
              onChange={handleChange}
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />{" "}
          </div>{" "}
          <div className=" mt-4">
            {" "}
            <label
              htmlFor="typeProfesseur"
              className="text-black ml-5 font-bold"
            >
              De quel professeur avait vous besoin?
            </label>{" "}
            <input
              type="text"
              name="typeProfesseur"
              value={formData.typeProfesseur}
              onChange={handleChange}
              placeholder="math pc francais..."
              className="rounded-md ml-5 w-5/6 px-20 text-black"
            />{" "}
            <div className="mt-4">
              {" "}
              <label
                htmlFor="notelorsdeladerniercontrole"
                className="text-black ml-5 font-bold"
              >
                Votre note lors de votre dernier controle sur cette (ces)
                matiere(s)
              </label>{" "}
              <input
                type="number"
                name="notelorsdeladerniercontrole"
                value={formData.notelorsdeladerniercontrole}
                onChange={handleChange}
                className="rounded-md ml-5 w-5/6 px-20 text-black"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              className="mt-7 px-16 py-3 bg-black rounded-xl flex items-end m-9 text-2xl font-bold text-white"
            >
              {" "}
              Soumettre{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </form>
  );
}
