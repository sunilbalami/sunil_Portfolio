import React from "react";
import Projects from "../components/Projects";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the image is 50% in view
  });
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            ref={ref}
            className={`section-title lg:before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block transition-all duration-1000 ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            My latest work
          </h2>
          <p className="subtitle">
            Explore my work: a collection of front-end development projects
            showcasing my skills in front end development skills and many more.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
