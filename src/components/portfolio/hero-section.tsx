import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <AnimatedSection
      id="hero"
      className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4 md:px-6"
    >
      <div className="max-w-3xl space-y-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-primary">Jorge Cheverria.</span>
          <br />
          Full-Stack Developer.
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          I build robust and scalable web applications with a focus on user experience and clean code. Turning complex problems into elegant digital solutions.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">
              View My Work <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
