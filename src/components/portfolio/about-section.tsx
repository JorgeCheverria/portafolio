import AnimatedSection from "@/components/animated-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="py-12 md:py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              I am a passionate full-stack developer with a knack for creating dynamic and intuitive web applications. With a background in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. I am constantly learning and adapting to new technologies to deliver high-quality, efficient, and user-friendly solutions.
            </p>
            <p className="text-muted-foreground md:text-lg">
              When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or contributing to open-source projects.
            </p>
          </div>
          <div className="flex justify-center">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary">
              <AvatarImage src="https://avatars.githubusercontent.com/u/30996155?v=4" alt="Jorge Cheverria" data-ai-hint="man portrait" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
