import React from "react";
import { useInView } from "react-intersection-observer";

const Project = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the image is 50% in view
  });
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img
          ref={ref}
          className={`rounded-2xl duration-1000 ${
            inView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
          src={item.image}
          alt=""
        />
      </div>
      <p className="capitalize">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3 "> {item.name}</h3>
    </div>
  );
};

export default Project;
