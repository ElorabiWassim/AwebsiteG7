import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProjectStore } from '@/stores/projectStore';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjectStore();

  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-headline-lg font-headline text-foreground mb-4">
            Project Not Found
          </h1>
          <Button
            onClick={() => navigate('/')}
            className="bg-button-gradient text-primary-foreground hover:opacity-90"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 text-foreground hover:bg-muted hover:text-foreground"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Work
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-tertiary text-tertiary-foreground rounded-lg text-sm font-normal mb-4">
              {project.category}
            </span>
            <h1 className="text-headline-xl font-headline text-foreground mb-6">{project.title}</h1>
            <p className="text-body-lg text-gray-200 leading-relaxed max-w-3xl">{project.fullDescription}</p>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Project Outcome */}
          <div className="mb-16">
            <h2 className="text-headline-md font-headline text-foreground mb-4">Project Outcome</h2>
            <p className="text-body-base text-gray-200">{project.outcome}</p>
          </div>

          {/* Project Overview */}
          <div className="mb-16 space-y-8">
            <h2 className="text-headline-lg font-headline text-foreground">🧩 Project Overview</h2>
            <p className="text-body-base text-gray-200">
              This project aims to build a web platform that connects travelers, local guides, and travel agencies across Algeria.
              It helps users explore attractions, discover verified tours, contact local guides or agencies, and share their travel experiences in a community-driven space.
            </p>
            <p className="text-body-base text-gray-200">
              The platform simplifies travel planning, promotes authentic tourism, and enhances visibility for local guides and agencies.
            </p>

            <h3 className="text-headline-md font-headline text-foreground">🎯 Mission Statement</h3>
            <p className="text-body-base text-gray-200">
              To provide a centralized, trustworthy, and user-friendly platform that bridges the gap between travelers and Algeria’s local tourism ecosystem.
            </p>

            <h3 className="text-headline-md font-headline text-foreground">⚙️ Problem Statement</h3>
            <p className="text-body-base text-gray-200">
              Travelers often struggle to find reliable information, local guides, and trusted travel agencies when exploring Algeria.
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>The Algerian tourism sector lacks accessible and verified travel information.</li>
              <li>Both travelers and local guides/agencies face visibility challenges.</li>
              <li>A centralized platform can boost tourism, create economic opportunities, and simplify travel planning.</li>
            </ul>

            <h3 className="text-headline-md font-headline text-foreground">💡 Our Solution</h3>
            <p className="text-body-base text-gray-200">
              Our platform connects travelers, guides, and agencies in one place — offering verified listings, user reviews, direct communication, category/region search, and a community space for sharing experiences.
            </p>

            <h3 className="text-headline-md font-headline text-foreground">🧱 Core Functionalities</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>👤 <strong>Traveler Account:</strong> Explore attractions, filter, contact guides/agencies, rate/review services, book trips.</li>
              <li>🏢 <strong>Agency Account:</strong> Create profiles & tours, manage bookings & inquiries, view traveler feedback.</li>
              <li>🧭 <strong>Guide Account:</strong> Offer personalized tours, list activities, connect with travelers.</li>
              <li>💬 <strong>Community Section:</strong> Rate destinations, view top-rated places, share stories and tips.</li>
              <li>🔎 <strong>Categorical Search:</strong> Filter by region, activity type, provider type, or budget.</li>
              <li>🧞‍♂️ <strong>Wishlist Features:</strong> Interactive map, secure payments, multi-language support, AI-based recommendations.</li>
            </ul>
          </div>


   
        </div>
      </main>
      <Footer />
    </div>
  );
}
