import React, { useState } from "react";
import { navigation } from "../data";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
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

  const ulVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: "0%",
      transtion: {
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      {/* menu*/}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        exit="exit"
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden `}
      >
        {/*close icon */}
        <div
          onClick={handleCloseMenu}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>

        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleCloseMenu}
                className="text-xl cursor-pointer capitalize "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
