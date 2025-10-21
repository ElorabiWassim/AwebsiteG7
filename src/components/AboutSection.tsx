import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="animate-section py-32 px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-headline-xl font-headline text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>

        <motion.p
          className="text-body-lg text-gray-200 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are <span className="text-tertiary font-semibold">G7-Team2</span>, a group of 3rd-year Artificial Intelligence students from 
          <span className="font-semibold"> ENSIA</span> who came together this year during our Software Engineering course. 
          What started as a class project quickly grew into a shared passion for collaboration and creativity. 
          Our team brings together diverse talents — some of us are developers who bring logic and structure to life, 
          others are designers who craft visuals and user experiences, and all of us share a deep curiosity for 
          Artificial Intelligence and its applications. Through this portfolio project, we aim to represent our teamwork, 
          technical growth, and our drive to transform ideas into meaningful digital creations.
        </motion.p>
      </div>
    </section>
  );
}
