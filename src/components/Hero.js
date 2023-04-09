import React from "react";
import suniB from "../assets/img/sunilB.svg";
import { useInView } from "react-intersection-observer";
import Resume from "../ResumeSunilBalami.docx";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8 ">
          {/* left side*/}
          <div
            className={`flex-1  flex flex-col items-center lg:items-start transition-all `}
          >
            <p className=" text-lg text-accent mb=[22px]">Hey, I'm Sunil 🙋‍♂️</p>
            <h1
              className={`text-2xl leading-[44px] md:text-3xl md:leading-tight  lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] duration-1000 ${
                inView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-100 transform translate-y-100"
              }`}
            >
              I'm Front-End Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left   ">
              I'm Front end developer who writes and design clean, elegant and
              efficient code.
            </p>

            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              <a href={Resume} download="ResumeSunilBalami.docx">
                Download CV
              </a>
            </button>
          </div>
          {/* right side*/}
          <div className="hidden lg:flex flex:1 justify-end items-end h-full">
            <img
              ref={ref}
              className={`${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              } transition-all duration-1000 ease-in-out transform`}
              src={suniB}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
