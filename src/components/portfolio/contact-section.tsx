import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-12 md:py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="font-bold text-lg">
              <a href="mailto:jorge.cheverria@example.com">
                <Mail className="mr-2 h-5 w-5" />
                jorgecheverria96@gmail.com
              </a>
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/JorgeCheverria" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/jorge-cheverria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
