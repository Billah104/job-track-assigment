import React from "react";
import { Link } from "react-router-dom";
import './JobsReview.css'

const JobsReview = ({ job }) => {
  const {
    id,
    jobTitle,
    companyLogo,
    companyName,
    RemoteOnsite,
    location,
    time,
    salary,
  } = job;
  return (
    <div className=" jobs-review-container">
      <div className=" bg-gray-400">
        <img className="company-logo-img" src={companyLogo} alt="" />
      </div>
      <div className="mr-8">
        <p className="job-details-title">{jobTitle}</p>
        <p className="job-details-company-name">{companyName}</p>
        <div className="job-details-job-type">
          
          <p className="job-dt-remote">
            {RemoteOnsite}
          </p>
          <p className="job-time">{time}</p>
        </div>
        <div className="job-dt-info">
          <p className="job-location">  {location}</p>
          <p className="job-salary">{salary}</p>
        </div>
      </div>
      <div >
        <Link className="link-btn" to={`/jobDetails/${id}`}><button className=" view-details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsReview;