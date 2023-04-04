import React from "react";
import { social } from "../data";
import Logo from "../assets/img/sbLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-tertiary py-12 ">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center ">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={Logo} alt="" className="h-14 w-14" />
          </div>
          <p>&copy; {currentYear} Sunil Balami. All rights reserve.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
