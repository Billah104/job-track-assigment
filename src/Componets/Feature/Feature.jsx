import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ data }) => {
  const {
    id,
    jobTitle,
    companyLogo,
    companyName,
    RemoteOnsite,
    location,
    time,
    salary
  
  } = data;
  return (
    <div>
      <div className=" border-solid border shadow-lg rounded-md p-14 ">
        <img className="mb-5 " src={companyLogo} alt="" />
        <p className="font-semibold mb-2 text-2xl">{jobTitle}</p>
        <p className="mb-2 text-xl text-gray-400">{companyName}</p>
        <div className="flex gap-5 font-semibold mb-2">
          <p className=" text-violet-700 border-violet-200 border  p-2 rounded">
            {RemoteOnsite}
          </p>
          <p className="  text-violet-700 border border-violet-200 p-2 rounded">
            {time}
          </p>
        </div>
        <div className="mb-5 flex">
          <p className="   text-gray-400 mr-10">{location}</p>
          <p className="  text-gray-400">{salary}</p>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="btn  text-white bg-violet-700">
            View Details
          </button>
        </Link>
        {/* <button onClick={()=>navigate(`job/${id}`)}>View</button> */}
      </div>
    </div>
  );
};

export default Feature;