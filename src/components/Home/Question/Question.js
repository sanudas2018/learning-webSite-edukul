import React from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";

const Question = ({ question }) => {
  const { id, name, logo, total } = question;
  const navigate = useNavigate();
  const handleQuesAnswer = () => {
    navigate(`/question/${id}`);
  };
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl glass">
        <figure>
          <img className="h-40 w-[100%] border-b-2" src={logo} alt="Shoes" />
        </figure>
        <div className="text-center  contentDiv">
          <div className="card-body flex flex-row justify-between align-middle">
            <h2 className="font-semibold text-xl text-white">{name}</h2>

            <p className="ml-[10px] font-bold mt-1 text-xs">
              <span>Total Que: {total} </span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end mt-4 mb-2">
          <button
            onClick={handleQuesAnswer}
            className="btn btn-secondary btn-sm w-[99%]"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
