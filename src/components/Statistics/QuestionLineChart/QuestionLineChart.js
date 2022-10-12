import React from "react";
import {
  Bar,
  BarChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./QuestionLineChart.css";

const QuestionLineChart = () => {
  const data = [
    {
      id: 1,
      name: "React",

      total: 8,
    },
    {
      id: 2,
      name: "JavaScript",

      total: 9,
    },
    {
      id: 4,
      name: "CSS",

      total: 8,
    },
    {
      id: 5,
      name: "Git",

      total: 11,
    },
  ];
  return (
    <div>
      <div className="md:w-[90%] h-[80vh] w-[98%] bg-slate-300 mx-auto text-center border-4 border-pink-600 overflow-hidden mt-8 chartShadow">
        <div className="mx-auto mt-4 overflow-hidden">
          <ResponsiveContainer
            className="mx-auto mt-10 barChart"
            width={600}
            height={450}
          >
            <BarChart
              className="mt-5 barChart"
              data={data}

              // width={600}
              // height={450}
            >
              <Bar dataKey="total" fill="#18B2A8" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default QuestionLineChart;
