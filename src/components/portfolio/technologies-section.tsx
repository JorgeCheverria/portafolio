import AnimatedSection from "@/components/animated-section";
import TechIcon from './tech-icon';
import Image from "next/image";

const technologies = [
  { name: 'React', icon: <Image src={"https://api.iconify.design/logos:react.svg"}  width={24} height={24} alt="React" />},
  { name: 'Next.js', icon: <Image src={"https://api.iconify.design/logos:nextjs.svg"}  width={44} height={44} alt="Next Js" />},
  { name: 'JavaScript', icon: <Image src={"https://api.iconify.design/logos:javascript.svg"}  width={24} height={24} alt="JavaScript" /> },
  { name: 'TypeScript', icon: <Image src={"https://api.iconify.design/logos:typescript.svg"}  width={100} height={100} alt="TypeScript" />},
  { name: 'Node.js', icon: <Image src={"https://api.iconify.design/logos:nodejs.svg"}  width={54} height={54} alt="Node Js" />},
  { name: 'Python', icon: <Image src={"https://api.iconify.design/logos:python.svg"}  width={24} height={24} alt="Python" />},
  { name: 'Php', icon: <Image src={"https://api.iconify.design/logos:php.svg"}  width={44} height={44} alt="php" />},
  { name: 'Docker', icon: <Image src={"https://api.iconify.design/logos:docker.svg"}  width={44} height={44} alt="Docker" />},
  { name: 'AWS', icon: <Image src={"https://api.iconify.design/logos:aws.svg"}  width={44} height={44} alt="AWS" />},
];

const TechnologiesSection = () => {
  return (
    <AnimatedSection id="technologies" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I work with a variety of modern technologies to build high-performance applications..
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 py-12">
          {technologies.map((tech) => (
            <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TechnologiesSection;
