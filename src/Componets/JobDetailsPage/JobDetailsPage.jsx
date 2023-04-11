import React from 'react';
import { getJobItems } from '../../utilities/fakedb';

const JobDetailsPage = ({detail}) => {
          const {id,jobDescription,jobResponsibility,educationalRequirements,Experiences,salary,jobTitle,phone,email} = detail;
          const jobDetails = ()=>{
            getJobItems(id)
          }
           return (
                    <div>
                          <p>Experience : {Experiences}</p>  
                            
                    </div>
          );
};

export default JobDetailsPage;