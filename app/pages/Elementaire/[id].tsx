"use client";
import React from 'react';
import { useRouter } from 'next/router';
import courses from '../../Elementaire/page';
import CourseSection from '../../components/ElementaireSection';

const CoursePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((course) => course.id === parseInt(id as string));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{course.title}</h1>
      <CourseSection
        title={course.title}
        description={course.description}
        videoSrc={course.videoSrc}
        documentLink={course.documentLink}
      />
    </div>
  );
};

export default CoursePage;
