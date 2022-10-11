import React from "react";
import { useLoaderData } from "react-router-dom";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";

import "./QuestionDetails.css";

const QuestionDetails = () => {
  const questionAnswer = useLoaderData();
  const { id, name, logo, questions } = questionAnswer.data;
  //   console.log(questionAnswer.data);
  return (
    <div>
      <div className="containerSingle">
        <h1 className="text-center text-4xl ">Quiz of {name}</h1>
        <div className="mainContent mt-9 mx-auto">
          {questions.map((singleData, index) => (
            // <SingleQues key={index} singleData={singleData}></SingleQues>
            <div key={index}>
              <div className="questionCard mb-5 mx-auto w-[95%] md:w-[60%]">
                <div className="quesTitle text-center relative overflow-hidden">
                  <h1 className="mt-6 font-bold text-xl">
                    Quiz {index + 1}: {singleData.question}
                  </h1>
                  <EyeIcon className="h-6 w-6 text-blue-500 absolute top-0 right-0 cursor-pointer" />
                </div>
                <div className="quesBody grid grid-cols-2 gap-3 mt-5 mx-3">
                  {singleData.options.map((option) => (
                    <div className="inner cursor-pointer rounded-md">
                      <h2 className="ml-3">{option}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
