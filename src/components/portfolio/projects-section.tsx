import AnimatedSection from "@/components/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-featured e-commerce platform with a custom CMS, payment integration, and a responsive, mobile-first design.",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract network",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "A data visualization dashboard for analyzing user engagement metrics, built with D3.js and React.",
    image: "https://placehold.co/600x400.png",
    imageHint: "glowing chart",
    tags: ["React", "D3.js", "Python", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "A collaborative real-time document editor using WebSockets and a conflict-free replicated data type (CRDT) approach.",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract code",
    tags: ["Vue.js", "WebSockets", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="py-12 md:py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-4">
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
