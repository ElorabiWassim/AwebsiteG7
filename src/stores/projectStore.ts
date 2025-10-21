import { create } from 'zustand';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  imageAlt: string;
  role: string;
  tools: string[];
  outcome: string;
  gallery?: { url: string; alt: string }[];
}

interface ProjectStore {
  projects: Project[];
}

export const useProjectStore = create<ProjectStore>(() => ({
  projects: [
    {
      id: 'tourism-platform',
      title: 'Tourism Platform for Algeria',
      description: 'Connects travelers, guides, and agencies across Algeria',
      fullDescription:
        'This project aims to build a web platform that connects travelers, local guides, and travel agencies across Algeria. It helps users explore attractions, discover verified tours, contact local guides or agencies, and share their travel experiences in a community-driven space.',
      category: 'Coming Soon',
      image: './assets/img/tourism-platform.jpeg',
      imageAlt: 'Tourism Platform screenshot',
      role: '',
      tools: [],
      outcome: 'Simplifies travel planning and promotes authentic tourism.',
      gallery: [
        { url: '/assets/img/tourism-1.png', alt: 'Platform homepage' },
        { url: '/assets/img/tourism-2.png', alt: 'Tour listings' },
      ],
    },
  ],
}));
