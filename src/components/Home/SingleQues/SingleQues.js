import React, { useEffect, useId, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SingleQues.css";

const SingleQues = ({ singleData, dtaIndex }) => {
  // console.log(singleData);
  const { question, correctAnswer, options } = singleData;
  const clickIcon = (correctAnswer) => {
    toast.success(correctAnswer, {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });
  };
  const select = useId();
  const rightAnswer = (options) => {
    if (correctAnswer === options) {
      toast.success("Right Answer", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    } else {
      toast.warning("Wrong Answer", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  };
  // console.log(wrongAns);
  // const [checked, setChecked] = useState([]);
  // const { options, id, question, correctAnswer } = singleData;
  // const [optionss, setOptionss] = useState();
  // const [Currques, setCurrques] = useState(0);
  // useEffect(() => {
  //   setOptionss(question && handleShuffle([question[Currques].correctAnswer
  //   ]));
  // }, [question]);
  // console.log(quizData);
  // const { options, id, question, correctAnswer } = quizData;
  // console.log(singleData);

  // console.log(options);
  // const corrAns = options.filter(options !== correctAnswer);
  // console.log(corrAns);
  // let incorrectAnswer = [];
  // for (let x of options) {
  //   console.log(x);
  //   if (x !== correctAnswer) {
  //     incorrectAnswer.push(x);
  //   }
  // }
  // const quizs = data.data.questions.map((newObj) => ({
  //   ...newObj,
  //   answers: [newObj.correctAnswer, ...newObj.incorrectAnswer].sort(
  //     () => Math.random() - 0.5
  //   ),
  // }));

  // const {} = indexData;
  return (
    <div>
      <div className="questionCard mb-5 mx-auto w-[95%] md:w-[70%]">
        <div className="quesTitle text-center relative overflow-hidden">
          <h1 className="mt-6 font-bold text-xl overflow-hidden">
            Quiz {dtaIndex + 1}: {question}
          </h1>
          <EyeIcon
            onClick={() => clickIcon(correctAnswer)}
            className="h-6 w-6 text-blue-500 absolute top-0 right-0 cursor-pointer"
          />
        </div>
        <div className="quesBody grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 mx-3">
          <label
            className="cursor-pointer overflow-hidden"
            htmlFor={select + "first"}
          >
            <div
              onChange={() => {
                rightAnswer(options[0]);
              }}
              className="border border-pink-500 p-[5px] flex justify-start align-middle overflow-hidden cursor-pointer rounded-sm hover:bg-sky-700 hover:border-sky-400
             "
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="java"
                id={select + "first"}
              />

              <div className="ml-3 py-2">
                {singleData.options[0] ? singleData.options[0] : "Undifined"}
              </div>

              {/* <br></br> */}
            </div>
          </label>

          {/* =====2====  */}
          <label
            className="cursor-pointer overflow-hidden"
            htmlFor={select + "second"}
          >
            <div
              onChange={() => {
                rightAnswer(options[1]);
              }}
              className="border border-pink-500 p-[5px] flex justify-start align-middle overflow-hidden cursor-pointer rounded-sm hover:bg-sky-700 hover:border-sky-400"
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="java"
                id={select + "second"}
              />
              <div className="ml-3 py-2">
                {singleData.options[1] ? singleData.options[1] : "Undifined"}
              </div>

              {/* <br></br> */}
            </div>
          </label>
          {/* ====3====  */}
          <label
            className="cursor-pointer overflow-hidden"
            htmlFor={select + "third"}
          >
            <div
              onChange={() => {
                rightAnswer(options[2]);
              }}
              className="border border-pink-500 p-[5px] flex justify-start align-middle overflow-hidden cursor-pointer rounded-sm hover:bg-sky-700 hover:border-sky-400"
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="java"
                id={select + "third"}
              />
              <div className="ml-3 py-2">
                {singleData.options[2] ? singleData.options[2] : "Undifined"}
              </div>

              {/* <br></br> */}
            </div>
          </label>
          {/* =====4====  */}
          <label
            className="cursor-pointer overflow-hidden "
            htmlFor={select + "fourth"}
          >
            <div
              onChange={() => {
                rightAnswer(options[3]);
              }}
              className="border border-pink-500 p-[5px] flex justify-start align-middle overflow-hidden cursor-pointer rounded-sm hover:bg-sky-700 hover:border-sky-400"
            >
              <input
                className="cursor-pointer"
                type="radio"
                name="java"
                id={select + "fourth"}
              />
              <div className="ml-3 py-2">
                {singleData.options[3] ? singleData.options[3] : "Undifined"}
              </div>

              {/* <br></br> */}
            </div>
          </label>
          {/* Option maping another  */}

          {/* {singleData.options.map((option) => (
            <div className="inner cursor-pointer rounded-md hover:bg-sky-700 hover:border-sky-400">
              <h2 className="ml-3 py-2">{option}</h2>
            </div>
          ))} */}
          {/* {answers.map((answers, idx) => {
            return (
              <button key={idx} className="ml-3 py-2 border">
                {answers}
              </button>
            );
          })} */}
          {/* <button className="ml-3 py-2 border">{correctAnswer}</button>
          <button className="ml-3 py-2 border">${incorrectAnswer[0]}</button>
          <button className="ml-3 py-2 border">${incorrectAnswer[1]}</button>
          <button className="ml-3 py-2 border">${incorrectAnswer[2]}</button> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQues;
