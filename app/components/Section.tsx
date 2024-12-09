"use client";

import { useState } from 'react';
import { BadgePlus, BadgeMinus } from 'lucide-react';

const ExpandableSection: React.FC<{ title: string, content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-auto bg-slate-900 rounded-2xl m-7'>
     
      <div onClick={toggleSection} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        {isOpen ? <BadgeMinus /> :  <BadgePlus />}
        <h1 className='font-extrabold text-xl'>{title}</h1>
      </div>
      {isOpen && <p >{content}</p>}
    </div>
  );
};

export default ExpandableSection;
