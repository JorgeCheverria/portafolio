import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 md:px-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-primary" />
          <p>&copy; {currentYear} Jorge Cheverria. All rights reserved.</p>
        </div>
        <p>
          Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
