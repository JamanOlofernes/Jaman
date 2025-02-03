import React from "react";

const Experience = () => {
  const jobs = [
    {
      title: "Frontend Developer at Tech Corp",
      period: "Jan 2020 - Present",
      description: "Developing and maintaining the front end of the company website."
    },
    {
      title: "Web Developer at Web Solutions",
      period: "Jan 2018 - Dec 2019",
      description: "Worked on multiple client projects to build responsive websites."
    }
  ];

  return (
    <div className="mt-4 border-t border-gray-300 pt-4">
      <h2 className="text-lg font-semibold">Work Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} className="mt-2">
          <h3 className="font-medium">{job.title}</h3>
          <p className="text-gray-500">{job.period}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;