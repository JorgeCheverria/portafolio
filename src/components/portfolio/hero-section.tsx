"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Portfolio cover"
          data-ai-hint="abstract technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary">Jorge Cheverria.</span>
            <br />
            Full-Stack Developer.
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            I build robust and scalable web applications with a focus on user experience and clean code. Turning complex problems into elegant digital solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 bg-transparent text-gray-300 hover:bg-gray-300 hover:text-black"
            >
              <a href="#projects">
                View My Work <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
