import React, { useState } from "react";
import { getToDB } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import JobsReview from "../jobsReviw/JobsReview";
import "./ApplyJob.css";

const ApplyJob = () => {
  const saveJobs = useLoaderData();
  const [jobs, setJobs] = useState(saveJobs);
  const getJob = getToDB();

  const filter = (type) => {
    const update = saveJobs.filter((job) => {
      return job.RemoteOnsite === type ;
    } );
    setJobs(update);
    console.log(update)
  };

  return (
    <div>
      <h1 className="applyJobs-title">Applied Jobs</h1>
      <div className="btn-container">
        <button className="filter-btn" onClick={() => filter("Remote")} >Remote</button>
        <button className="filter-btn" onClick={() => filter("Onsite")}>Onsite</button>
      </div>
      <div>
        {jobs.map((job) => (
          <JobsReview key={job.id} job={job}></JobsReview>
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;