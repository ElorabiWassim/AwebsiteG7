import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="animate-section py-32 px-8 bg-neutral">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl font-headline text-neutral-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-body-lg text-gray-200 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-headline-lg font-headline text-neutral-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-tertiary/10 rounded-lg flex-shrink-0">
                  <MapPinIcon
                    className="w-6 h-6 text-tertiary"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="text-headline-sm font-headline text-neutral-foreground mb-2">
                    Location
                  </h4>
                  <p className="text-body-base text-gray-200">
                    Sidi Abdellah, Algeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-tertiary/10 rounded-lg flex-shrink-0">
                  <MailIcon
                    className="w-6 h-6 text-tertiary"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="text-headline-sm font-headline text-neutral-foreground mb-2">
                    Email
                  </h4>
                  <p className="text-body-base text-gray-200">
                    g7team2@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://formspree.io/f/xldpkgaj"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-body-base font-normal text-neutral-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-card border-border text-card-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-body-base font-normal text-neutral-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-card border-border text-card-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-body-base font-normal text-neutral-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-card border-border text-card-foreground min-h-[150px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-button-gradient text-primary-foreground hover:opacity-90 transition-opacity duration-200 py-6 text-base font-normal"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
