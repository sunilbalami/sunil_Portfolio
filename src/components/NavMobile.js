import React, { useState } from "react";

import { Navigation } from "../data";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transtion: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulValiants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transtion: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>
    </nav>
  );
};

export default NavMobile;
