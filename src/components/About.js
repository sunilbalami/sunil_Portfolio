import React from "react";
import AboutPic from "../assets/img/about.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the image is 50% in view
  });

  return (
    <section className="secton bg-secondary ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            ref={ref}
            className={`object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl transition-all duration-1000  ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
            src={AboutPic}
            alt=""
            id="about"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <div className="flex flex-col">
              <h2
                className={`text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block transition-all duration-1000 ${
                  inView
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-10"
                }`}
              >
                Sunil Balami
              </h2>
              <p className="mb-4 text-accent">Web Developer </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hi there, I'm Sunil, a front-end developer who loves building
                websites that look great and work well. I've been doing this for
                more than a year now, and I specialize in using HTML, CSS,
                JavaScript and React to create responsive, mobile-friendly
                interfaces. When I'm not coding, I enjoy practicing meditation
                and exploring the local art scene".
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all ">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
