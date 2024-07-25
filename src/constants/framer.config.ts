import { color, Variants } from "framer-motion";

//custom

export const navParent = (isMobile = false) => ({
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      staggerChildren: isMobile ? 0 : 0.1, 
      ease: "easeInOut" ,
      delay: 0.25,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
});

export const navChild = {
  hidden: { 
    opacity: 0,  
  },
  visible: {
    opacity: 1, 
    transition: { duration: 1 },
  },
  exit: { opacity: 0, transition: { duration: 0.08 } },
};

export const dropdownParent = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

export const dropdownChild = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.08 },
  },
  exit: { opacity: 0, y: -5, transition: { duration: 0.08 } },
};
export const dropdownChildFirstReneer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const expandHeight = (
  animate: boolean,
  duration?: number,
  delay?: number
) => ({
  initial: { height: 0 },
  animate: { height: animate ? "auto" : 0 },
  exit:{ height: 0 },

  transition: {
    duration: duration && !animate ? duration * 0.5 : duration ?? 0.3,
    ease: "easeOut",
    delay: animate ? 0 : delay ?? 0,
  },
});

export const fadeAnimation = (animate: boolean, delay?: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: animate ? 1 : 0 },
  exit: { opacity: 0 },
  transition: { duration: 1.5, ease: "easeInOut", delay: delay ?? 0 },
});

//click animations
export const largeClickAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1 },
};
export const midClickAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1 },
  transition: { duration: 0.25, ease: "easeInOut" },
};
export const smallClickAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
};

export const linkClickAnimation = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 1 },
};

//tap animations
export const tapAnimation = {
  whileTap: { scale: 0.97 },
};

//opacity animations
export const exitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};
export const midExitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
};
export const fastExitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
};
export const vFastExitAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.05, ease: "easeInOut" },
};

export const enterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.4, ease: "easeInOut" },
};

export const midEnterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeInOut" },
};
export const fastEnterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const scaleExitAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
//variants
export const arrowVariants: Variants = {
  start: {
    rotate: 0,
    transition: {
      duration: 0.4,
    },
  },
  end: {
    rotate: 180,
    transition: {
      duration: 0.4,
    },
  },
};

//background
export const backgroundAnimations = {
  whileHover: { backgroundColor: "#f87171" },
  whileTap: { backgroundColor: "#f87171" },
  transition: { duration: 0.4, ease: "easeInOut" },
};

//dropdown
export const dropdownAnimations: Variants = {
  hidden: { y: -15, opacity: 0, zIndex: -10 },
  show: {
    y: 0,
    opacity: 1,
    zIndex: -10,
    transition: {
      duration: 0.3,
      // delay: 0.5,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
  exit: { y: -10, opacity: 0, transition: { duration: 0.1 } },
};
export const dropdownItemsAnimations = {
  closed: { opacity: 1 },
  open: { opacity: 1 },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 300,
    damping: 24,
  },
};

export const fadeVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  open: { opacity: 1, transition: { delay: 0.4, duration: 0.5 } },
};

export const menuAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
  whileHover: { scale: 1.06 },
  whileTap: { scale: 1 },
};

export const slideDown = (animate: boolean) => ({
  initial: { y: -300, opacity: 0 },
  animate: { y: animate ? 0 : -300, opacity: animate ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeInOut" },
});

export const slideUp = (animate: boolean) => ({
  initial: { y: 100, opacity: 0 },
  animate: { y: animate ? 0 : 100, opacity: animate ? 1 : 0 },
  exit: { y: 100, opacity: 0, transition: { duration: .15, ease: "easeInOut" } },
  transition: { duration: .35, ease: "easeInOut" },
});
export const slideLeft = (animate: boolean) => ({
  initial: { x: 300, opacity: 0 },
  animate: { x: animate ? 0 : 300, opacity: animate ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeInOut" },
});
export const slideRight = (animate: boolean) => ({
  initial: { x: -300, opacity: 0 },
  animate: { x: animate ? 0 : -300, opacity: animate ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeInOut" },
});

export const imageLoadAnimation = (animate: boolean) => ({
  initial: { opacity: 0 },
  animate: { opacity: animate ? 1 : 0 },
  exit: { opacity: 0 },
  transition: { duration: 1, ease: "easeInOut" },
});

export const imageSlideAnimation = (
  animate: boolean,
  delay?: number,
  direction?: string
) => ({
  initial: { x: direction === "right" ? -0 : 0, opacity: 0.75 },
  animate: { x: animate ? 0 : 0, opacity: 1 },
  exit: { x: -40 },
  transition: { duration: 0.15, ease: "easeInOut", delay: delay ?? 0 },
});

export const imageDropAnimation = (animate: boolean, delay?: number) => ({
  initial: { y: -40, opacity: 0.25 },
  animate: { y: animate ? -20 : 0, opacity: 1 },
  eyit: { x: -40 },
  transition: { duration: 0.45, ease: "easeInOut", delay: delay ?? 0 },
});
