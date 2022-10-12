import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";

import "./QuestionDetails.css";
import SingleQues from "../SingleQues/SingleQues";

const QuestionDetails = () => {
  // const [questionData, setQuestionsData] = useState();
  // const [wrongAns, setWrongAns] = useState();
  const questionAnswer = useLoaderData();
  const { id, name, logo, questions } = questionAnswer.data;
  // console.log(questionAnswer.data.questions);
  // let allquestionData = questionAnswer.data.questions;
  // console.log(allquestionData);
  // const [quizs, setQuizs] = useState();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [qudata, setQudata] = useState([]);
  // console.log(questionAnswer);
  // setQuestionsData(questions);

  // let optionsNew = questions[0].options;
  // let correctAnswerNew = questions[0].correctAnswer;
  // let incorrectAnswer = [];
  // for (let x of optionsNew) {
  //   console.log(x);
  //   if (x !== correctAnswerNew) {
  //     incorrectAnswer.push(x);
  //   }
  // }
  // let newObj = [
  //   {
  //     incorrectAnswer: incorrectAnswer,
  //     correctAnswerNew: correctAnswerNew,
  //   },
  // ];
  // console.log(correctAnswerNew);
  // console.log(optionsNew);
  // console.log(newObj);

  // useEffect(() => {
  //   fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuestionsData(data.data.questions);
  //     });
  //   let wrongDataAll = questionAnswer.data.questions;
  //   let wrongNew = [];
  //   for (let wrong of wrongDataAll) {
  //     let corrAns = wrong.correctAnswer;
  //     let wrongAns = wrong.options;
  //     // console.log(corrAns);
  //     // console.log(wrongAns);
  //     for (let x of wrongAns) {
  //       if (x !== corrAns) {
  //         wrongNew.push(x);
  //       }
  //       // console.log(x);
  //     }
  //   }
  //   setWrongAns(wrongNew);
  //   // setQuestionsData(questionAnswer.data.questions);
  // }, []);
  // console.log(questionData);
  return (
    <div>
      <div className="containerSingle mt-4 overflow-hidden">
        <h1 className="text-center text-4xl overflow-hidden mt-4">
          Quiz of {name}
        </h1>
        <div className="mainContent mt-9 mx-auto">
          {/* maltiple question maping  */}
          {questionAnswer.data.questions.map((singleData, index) => (
            <SingleQues
              key={index}
              singleData={singleData}
              dtaIndex={index}
            ></SingleQues>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
