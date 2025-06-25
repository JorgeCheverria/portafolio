import AnimatedSection from "@/components/animated-section";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Led development of key features for a SaaS platform. Mentored junior developers and improved code quality and deployment pipelines, resulting in a 30% reduction in bug reports.",
  },
  {
    role: "Mid-Level Software Engineer",
    company: "Innovate Co.",
    period: "Jun 2018 - Dec 2020",
    description: "Developed and maintained client-facing web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software on schedule.",
  },
  {
    role: "Junior Web Developer",
    company: "Digital Creations",
    period: "May 2017 - May 2018",
    description: "Assisted in building responsive websites for various clients. Gained hands-on experience with HTML, CSS, JavaScript, and version control systems like Git.",
  },
];

const ExperienceSection = () => {
  return (
    <AnimatedSection id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">
          Work Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-0 mb-16">
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 top-1"></div>
              <div className={`flex flex-col items-start md:w-1/2 ${index % 2 === 0 ? 'md:items-end md:pr-12 md:text-right' : 'md:items-start md:pl-12 md:ml-auto'}`}>
                <p className="font-semibold text-primary">{exp.period}</p>
                <h3 className="font-headline text-xl font-bold mt-1">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
