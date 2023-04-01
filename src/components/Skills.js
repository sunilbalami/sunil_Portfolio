import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <div className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img src={skill.image} alt=""></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;