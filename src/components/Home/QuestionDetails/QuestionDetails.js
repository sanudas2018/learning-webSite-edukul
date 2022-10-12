import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";

import "./QuestionDetails.css";
import SingleQues from "../SingleQues/SingleQues";

const QuestionDetails = () => {
  // const [questionData, setQuestionsData] = useState();
  const questionAnswer = useLoaderData();
  const { id, name, logo, questions } = questionAnswer.data;
  // setQuestionsData(questions);
  return (
    <div>
      <div className="containerSingle">
        <h1 className="text-center text-4xl ">Quiz of {name}</h1>
        <div className="mainContent mt-9 mx-auto">
          {/* maltiple question maping  */}

          {questions.map((singleData, index) => (
            <SingleQues
              key={index}
              singleData={singleData}
              singleData2={index}
            ></SingleQues>
            // <div key={index}>
            //   <div className="questionCard mb-5 mx-auto w-[95%] md:w-[70%]">
            //     <div className="quesTitle text-center relative overflow-hidden">
            //       <h1 className="mt-6 font-bold text-xl">
            //         Quiz {index + 1}: {singleData.question}
            //       </h1>
            //       <EyeIcon className="h-6 w-6 text-blue-500 absolute top-0 right-0 cursor-pointer" />
            //     </div>
            //     <div className="quesBody grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 mx-3">
            //       {/* Option maping another  */}

            //       {singleData.options.map((option) => (
            //         <div className="inner cursor-pointer rounded-md hover:bg-sky-700 hover:border-sky-400">
            //           <h2 className="ml-3 py-2">{option}</h2>
            //         </div>
            //       ))}
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
