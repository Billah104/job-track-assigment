import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './FeatureJobs.css'
// import { addToDb } from "../../utilities/fakedb";

const FeatureJobs = ({ feature }) => {
  // const showJobDetails = (id) =>{
  //   console.log(id);
  //   // addToDb(id)
  // }
  // const navigate = useNavigate()
  const {
    id, jobTitle,
    companyLogo,
    companyName,
    RemoteOnsite,
    location,
    time,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    Experiences,
    phone,
    email,
    website,
  } = feature;
  return (
    <div>
      <div className=" featureJobs-item-dtls">
        <img className="company-logo " src={companyLogo} alt="" />
        <p className="jobTitle">{jobTitle}</p>
        <p className="company-name">{companyName}</p>
        <div className="job-type">
          <p className="remoteOnsite">
            {RemoteOnsite}
          </p>
          <p className=" time">
            {time}
          </p>
        </div>
        <div className="location-dev">
          <p className="  location text-gray-400 mr-10">{location}</p>
          <p className=" salary text-gray-400">{salary}</p>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="view-details-btn">
            View Details
          </button>
        </Link>
        {/* <button onClick={()=>navigate(`job/${id}`)}>View</button> */}
      </div>
    </div>
  );
};

export default FeatureJobs;