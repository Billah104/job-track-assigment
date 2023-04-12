import React, { useState } from "react";
import { getToDB } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import JobsReview from "../jobsReviw/JobsReview";
// import "./ApplyJobs.css";

const ApplyJob = () => {
  const saveJobs = useLoaderData();
  const [jobs, setJobs] = useState(saveJobs);
  const getJob = getToDB();

  return (
    <div>
      {/* <input className="filter-button" type="button" value=" filter" /> */}

      <div className="dropdown dropdown-start">
  <label tabIndex={0} className="btn m-1">Filter</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Onsite</a></li>
    <li><a>Remote</a></li>
    <li><a>Fulltime</a></li>
    <li><a>PartTime</a></li>
  </ul>
</div>
      {/* <div className="box">
        <div className="dropdown">Filter
          <span className="left-icon"></span>
          <span className="right-icon"></span>
        </div>
      </div> */}

      <div>
        {jobs.map((job) => (
          <JobsReview key={job.id} job={job}></JobsReview>
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;