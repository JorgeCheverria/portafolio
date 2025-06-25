"use client";

import { motion } from "framer-motion";
import type { ReactNode, ComponentProps } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id: string;
} & ComponentProps<typeof motion.section>;

const AnimatedSection = ({ children, className, id, ...props }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
