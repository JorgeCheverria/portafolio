import AnimatedSection from "@/components/animated-section";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Banco Bolivariano",
    period: "Mar 2024 – Present",
    description:
      "Front-end development using React.js, Next.js, and TypeScript. Implementation of microfrontend architectures, AWS Lambda integration, and advanced manipulation of JSON structures.",
  },
  {
    role: "Senior Software Developer",
    company: "GEA INTERNACIONAL",
    period: "Aug 2021 – Apr 2024",
    description:
      "Development and maintenance of microservices and full-stack solutions. Focus on RESTful back-end development, GitHub version control, XML handling, and agile methodologies. Actively involved in designing scalable software solutions.",
  },
  {
    role: "Software Developer",
    company: "FUNIBER",
    period: "Dec 2020 – Aug 2021",
    description:
      "Development of internal applications using PHP, Vue.js, and Vuetify. Applied agile methodologies (Scrum), worked with Docker containers and Git for version control. Maintained Linux development environments and collaborated remotely using Slack and Asana.",
  },
  {
    role: "Senior Software Developer",
    company: "GEA INTERNACIONAL",
    period: "Jul 2019 – May 2020",
    description:
      "Development of the ERP system SIGA using Laravel and Vue.js. Specialized in geographic information components (Google Maps, OpenStreetMaps), REST APIs, and mobile web services. Provided user support and created custom reports.",
  },
  {
    role: "GIS Developer",
    company: "Bitekso S.A.",
    period: "Feb 2019 – Jun 2019",
    description:
      "Implemented a GIS system using QGIS, Python, and spatial databases (PostgreSQL). Developed a software solution for managing urban properties for the Municipality of El Oro, including cost reporting per property.",
  },
  {
    role: "Applications Developer",
    company: "Saludsa",
    period: "Mar 2018 – Oct 2018",
    description:
      "Developed BI applications using QlikView and QlikSense to support decision-making in the customer service department. Managed ETLs, handled application deployment in production servers, and oversaw Qlik license administration.",
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
