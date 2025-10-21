import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function TeamSection() {
  // Your real team data
  const team = [
    {
      id: "abdelillah_chadli",
      name: "Abdelillah Chadli",
      image: "./assets/img/abdelillah.jpg",
      imageAlt: "Abdelillah Chadli",
      htmlPage: "/members/abdelillah_chadli.html",
    },
    {
      id: "mohammed_khaled",
      name: "Mohammed Khaled",
      image: "./assets/img/khaled.jpg",
      imageAlt: "Mohammed Khaled",
      htmlPage: "/members/mohammed_khaled.html",
    },
    {
      id: "sirine_atoum",
      name: "Sirine Atoum",
      image: "./assets/img/serine.jpeg",
      imageAlt: "Sirine Atoum",
      htmlPage: "/members/sirine_atoum.html",
    },
    {
      id: "wassim_elorabi",
      name: "Wassim Elorabi",
      image: "./assets/img/wassim.jpg",
      imageAlt: "Wassim Elorabi",
      htmlPage: "/members/wassim_elorabi.html",
    },
    {
      id: "yacine_kaizra",
      name: "Yacine Kaizra",
      image: "./assets/img/yacine.jpg",
      imageAlt: "Yacine Kaizra",
      htmlPage: "/members/yacine_kaizra.html",
    },
  ];
  return (
    <section id="team" className="animate-section py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl font-headline text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-body-lg text-gray-200 max-w-2xl mx-auto">
            A collective of passionate creators dedicated to pushing boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={member.htmlPage} className="block">
                <Card className="bg-card border-border overflow-hidden hover:border-tertiary transition-all duration-200 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-body-base text-gray-200 line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-headline-md font-headline text-card-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-body-base text-tertiary font-normal">
                      {member.role}
                    </p>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
