import React, { useState } from 'react';
import { getToDB } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import JobsReview from '../jobsReviw/JobsReview';

const ApplyJob = () => {
          const saveJobs = useLoaderData()
          const [jobs ,setJobs] = useState(saveJobs)
          const getJob = getToDB();
          // console.log(getJob);


          // const handdlejob =()=>{
          //           getToDB(id)
          // }
          return (
                    <div>
                             
                              {
                              jobs.map(job => <JobsReview key={job.id} job={job}></JobsReview>)
                              }
                    </div>
          );
};

export default ApplyJob;