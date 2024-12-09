"use client";
import React from 'react';

interface ElementaireSectionProps {
  title: string;
  description: string;
  videoSrc: string;
  documentLink: string;
}

const ElementaireSection: React.FC<ElementaireSectionProps> = ({ title, description, videoSrc, documentLink }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <video controls className="w-full mb-4">
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos HTML5.
      </video>
      <a href={documentLink} download className="text-blue-500 hover:text-blue-700">Télécharger le document</a>
    </section>
  );
};

export default ElementaireSection;
