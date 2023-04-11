import React from "react";
import './JobsCategory.css'

const JobsCategory = ({ job }) => {
  const { name, JobsAvailable, logo } = job;
  return (
    <div className="jobs-category-item">
      <img className="jobs-category-img" src={logo} alt="" />
      <h3 className="jobs-category-name">{name}</h3>

      <p className="jobs-category-available">{JobsAvailable}</p>
    </div>
  );
};

export default JobsCategory;