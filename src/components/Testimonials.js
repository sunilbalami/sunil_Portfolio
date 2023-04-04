import React from "react";
import { useInView } from "react-intersection-observer";

import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the image is 50% in view
  });
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            ref={ref}
            className={`section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block duration-1000 ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            What other people say
          </h2>
          <p className="subtitle">Industry experts says :- </p>
        </div>
        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default Testimonials;
