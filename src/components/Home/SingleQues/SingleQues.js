import React, { useState } from "react";
import "./SingleQues.css";

const SingleQues = ({ singleData, index }) => {
  const { options, id, question, correctAnswer } = singleData;
  console.log(index);
  return (
    <div>
      <div className="questionCard">
        <div className="quesTitle">
          <h1>
            Quiz {index + 1}: {question}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleQues;
