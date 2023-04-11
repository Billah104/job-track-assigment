import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import JobDetailsPage from "../JobDetailsPage/JobDetailsPage";

const JobDetails = () => {
  const detailsData = useLoaderData();
  const detailsId = useParams();
  // console.log(detailsId);
  const dynamicId = detailsId.id;
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (detailsData) {
      const findData = detailsData.find((data) => data.id === dynamicId);
      setDetails(findData);
    }
  }, []);
  console.log(details);

  return (
    <div>
      <h1 className="w-3/5 ml-60   font-extrabold mb-8 text-center">
        Job Details
      </h1>
      {/* <p> {detail.length}</p> */}

      {/* <div>
        {jobDetail.map((detail) => (
          <p>{detail.length}</p>
        ))}
      </div> */}
    </div>
  );
};

export default JobDetails;