import React from "react";
//import { services } from "../data";
import { useInView } from "react-intersection-observer";
import { services } from "../data";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the image is 50% in view
  });
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            ref={ref}
            className={`section-title lg:before:content-services md:before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before-hidden before:lg:block
            duration-1000 ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            What I can offer to you?
          </h2>
          <p className="subtitle">
            How I can help: a list of front-end development services I offer,
            including responsive design, performance optimization, and custom
            web applications.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div
                  className="text-accent rounded-sm w-12 h-12 flex justify-center  items-center mb-24 text-[28px]"
                  key={index}
                >
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
