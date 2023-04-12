import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import JobsCategory from "../jobCategory/JobsCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import './Home.css'

const Home = () => {
  const jobsCategory = useLoaderData();
  const [featureJobs, setFeatureJobs] = useState([]);
  const [showAll , setShowAll] = useState(false);
  const handleShowAll = () =>{
    setShowAll(true)
  }
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
            src="https://i.ibb.co/2ZLBP2J/P3-OLGJ1-copy-1.png"
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
          <h1 className="featured-job">
            Featured Jobs
          </h1>
          <p className="featured-pr">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* feature job details */}

        <div className="feature-jobs-items">
          {featureJobs.slice(0, showAll ? 6 : 4 ).map((feature) => (
            <FeatureJobs key={feature.id} feature={feature}></FeatureJobs>
          ))}
        </div>
        <p onClick={handleShowAll}>
        <button className="see-all-button">See All Jobs</button>
        </p>
      </section>
    </div>
  );
};

export default Home;