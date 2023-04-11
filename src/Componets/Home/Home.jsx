import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import JobsCategory from "../jobCategory/JobsCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import './Home.css'

const Home = () => {
  const jobsCategory = useLoaderData();
  const [featureJobs, setFeatureJobs] = useState([]);
  useEffect(() => {
    fetch("featureJobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data));
  }, []);

  return (
    <div>
      <header className="banner-body">
        <div>
          <h1 className="banner-title">
            One Step <br /> Closer To Your <br />
            <span className="dream-job">Dream Job </span>
          </h1>
          <p className="banner-pr">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all <br /> your
            job application from start to finish.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div>
          <img
            className="banner-img"
            src="/src/assets/All Images/P3OLGJ1 copy 1.png"
            alt=""
          />
        </div>
      </header>
      {/* Job category section */}
      <section className="job-category">
        <div className="title-bar items-center  flex flex-col justify-center">
          <h1 className="job-category-list">
            Job Category List
          </h1>
          <p className="job-category-pr">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* 4 job items */}
        <div className="job-items-4">
          {jobsCategory.map((job) => (
            <JobsCategory job={job} key={job.id}></JobsCategory>
          ))}
        </div>
      </section>

      {/* job feature section */}
      <section className="job-feature mb-8">
        {/* job feature heading */}
        <div className="job-feature-heading  flex flex-col   items-center  justify-center">
          <h1 className="w-3/5 font-extrabold mb-8 text-center">
            Featured Jobs
          </h1>
          <p className="  mb-8 text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* feature job details */}

        <div className="grid grid-cols-2  gap-8 items-center justify-around py-10">
          {featureJobs.slice(0, 4).map((feature) => (
            <FeatureJobs key={feature.id} feature={feature}></FeatureJobs>
          ))}
        </div>
        <button className="see-all-button btn  text-white bg-violet-700 mx-auto mt-5">See All Jobs</button>
      </section>
    </div>
  );
};

export default Home;