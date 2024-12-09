"use client";
import React from 'react';
import Link from 'next/link';
import courses from '../../Elementaire/page';  // Import correct des données des cours

const Courses: React.FC = () => {
  console.log(courses);  // Pour déboguer, vérifiez que courses est un tableau

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Nos Cours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link href={`/cours/${course.id}`}>
              <a className="text-blue-500 hover:text-blue-700">Voir le cours</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
