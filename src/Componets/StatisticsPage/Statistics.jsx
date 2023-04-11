import React from "react";
import './StatisticsPage.css'
// import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell,Tooltip, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const data01 = [
    { name: "Assignment 1", value: 57 },
    { name: "Assignment 2", value: 54 },
    { name: "Assignment 3", value: 48 },
    { name: "Assignment 4", value: 44 },
    { name: "Assignment 5", value: 60 },
    { name: "Assignment 6", value: 53 },
    { name: "Assignment 7", value: 60 },
    { name: "Assignment 8", value: 58 },
  ];

  return (
    <div className="lg:flex sm:my-auto justify-center items-center"> 
          <div className="sm:-96">
      <h1 className="assignment-mark">Assignment Information</h1>
      <table className=" border ">
        <thead className="border-spacing-6">
          <tr className="assignment-chart">
            <th className="p-2 ">ID</th>
            <th className="p-4">Assignment Name</th>
            <th className="p-2">Mark</th>
          </tr>
        </thead>
        <tbody className="border border-purple-600">
          <tr>
            <td className=" p-2">01</td>
            <td className="">Assignment 1 </td>
            <td className="">57</td>
          </tr>
          <tr>
            <td className="p-2">02</td>
            <td>Assignment 2</td>
            <td>54</td>
          </tr>
          <tr>
            <td className="p-2">03</td>
            <td>Assignment 3</td>
            <td>48</td>
          </tr>
          <tr>
            <td className="p-2">04</td>
            <td>Assignment 4</td>
            <td>44</td>
          </tr>
          <tr>
            <td className="p-2">05</td>
            <td>Assignment 5</td>
            <td>60</td>
          </tr>
          <tr>
            <td className="p-2">06</td>
            <td>Assignment 6</td>
            <td>53</td>
          </tr>
          <tr>
            <td className="p-2">07</td>
            <td>Assignment 7</td>
            <td>60</td>
          </tr>
          <tr>
            <td className="p-2">08</td>
            <td>Assignment 8</td>
            <td>58</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div>
        {" "}
       
          <PieChart  width={450} height={250} data={data01}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            />
             <Tooltip />
         
          </PieChart>
       
      </div>
      <ResponsiveContainer className="pie-chart" width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;