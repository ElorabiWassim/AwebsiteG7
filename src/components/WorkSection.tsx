import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useProjectStore } from '@/stores/projectStore';

export default function WorkSection() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { projects } = useProjectStore();

  // Horizontal scroll function
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // Enable horizontal scroll via mouse wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaX;
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section id="work" className="animate-section py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl font-headline text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-body-lg text-gray-200 max-w-2xl mx-auto">
            Recent projects that showcase our expertise
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 px-4 justify-center scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[400px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className="bg-card border-border overflow-hidden hover:border-tertiary transition-all duration-300 cursor-pointer group h-full"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-tertiary text-tertiary-foreground rounded-lg text-sm font-normal">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-headline-md font-headline text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-body-base text-gray-200 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
