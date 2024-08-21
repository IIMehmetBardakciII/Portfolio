"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import React, { createContext } from "react";

import { useInView } from "react-intersection-observer";

interface Props {
  children: ReactNode;
}
const SectionWrapper: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
