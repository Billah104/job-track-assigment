import React from "react";
import { Link } from "react-router-dom";

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
    <div className="flex  mb-b justify-between items-center border border-slate-200 w-5/6 mx-auto p-8">
      <div className=" bg-gray-400">
        <img className="bg-gray-100 w-60 h-48 " src={companyLogo} alt="" />{" "}
      </div>
      <div className="mr-8">
        <p className="mb-2 font-extrabold">{jobTitle}</p>
        <p className="mb-2 text-gray-400">{companyName}</p>
        <div className="flex mb-4 items-center">
          {" "}
          <p className="border border-violet-400 p-1 rounded-lg mr-4">
            {RemoteOnsite}
          </p>
          <p className="border border-violet-400 p-1 rounded-lg">{time}</p>
        </div>
        <div className="flex justify-between items-center gap-8">
          <p className=" text-gray-400">{location}</p>
          <p className="text-gray-400">{salary}</p>
        </div>
      </div>
      <div>
       <Link to={`/jobDetails/${id}`}>  <button className="btn  text-white bg-violet-700">View Details</button></Link>
      </div>
    </div>
  );
};

export default JobsReview;