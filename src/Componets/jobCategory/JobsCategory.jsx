import React from "react";

const JobsCategory = ({ job }) => {
  const { name, JobsAvailable, logo } = job;
  return (
    <div className="bg-red-50 p-10 rounded-xl">
      <img className="mb-4" src={logo} alt="" />
      <h3 className="mb-4 font-bold">{name}</h3>

      <p className="text-gray-400">{JobsAvailable}</p>
    </div>
  );
};

export default JobsCategory;