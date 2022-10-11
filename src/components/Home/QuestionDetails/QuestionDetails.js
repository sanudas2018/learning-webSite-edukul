import React from "react";
import { useLoaderData } from "react-router-dom";
import "./QuestionDetails.css";

const QuestionDetails = () => {
  const questionAnswer = useLoaderData();
  const { id } = questionAnswer.data;
  //   console.log(questionAnswer.data);
  return (
    <div>
      <p>que di{id}</p>
    </div>
  );
};

export default QuestionDetails;
