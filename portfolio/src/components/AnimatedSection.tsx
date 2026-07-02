"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

type VariantKey = keyof typeof animationVariants;

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: VariantKey;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className,
  style,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={animationVariants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container for animating lists of child items ── */

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  style?: CSSProperties;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className,
  style,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Individual stagger item (must be a child of StaggerContainer) ── */

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function StaggerItem({ children, className, style }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
