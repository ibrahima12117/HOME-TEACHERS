interface Courses {
    id: number;
    title: string;
    description: string;
    videoSrc: string;
    documentLink: string;
  }
  
  const courses: Courses[] = [
    {
      id: 1,
      title: 'Introduction à la Programmation',
      description: 'Les bases de la programmation',
      videoSrc: '/videos/lecon1.mp4',
      documentLink: '/documents/lecon1.pdf'
    },
    {
      id: 2,
      title: 'JavaScript pour Débutants',
      description: 'Apprenez les bases de JavaScript',
      videoSrc: '/videos/lecon2.mp4',
      documentLink: '/documents/lecon2.pdf'
    }
  ];
  
  export default courses;
  