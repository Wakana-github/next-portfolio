"use client";
import { motion } from "motion/react"
import { ReactNode, forwardRef } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

const FadeInSection= forwardRef<HTMLDivElement, FadeInSectionProps>(
  ({ children, delay = 0 }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
);

export default FadeInSection;
