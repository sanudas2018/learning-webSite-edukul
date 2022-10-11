import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";

import "./Home.css";
import Question from "./Question/Question";

const Home = () => {
  const questions = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="containerBody grid lg:grid-cols-4 lg:gap-3  md:grid-cols-2 md:gap-3 grid-cols-1 gap-3 mt-4">
        {questions.data.map((question) => (
          <Question key={question.id} question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Home;
