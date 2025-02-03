import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "CSS", "HTML", "Node.js"];

  return (
    <div className="mt-4 border-t border-gray-300 pt-4">
      <h2 className="text-lg font-semibold">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;