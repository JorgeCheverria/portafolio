"use client";

import { motion } from 'framer-motion';

type TechIconProps = {
  name: string;
  icon: JSX.Element;
};

const TechIcon = ({ name, icon }: TechIconProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-card text-center"
      whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 flex items-center justify-center text-primary">{icon}</div>
      <p className="font-medium text-sm">{name}</p>
    </motion.div>
  );
};

export default TechIcon;
