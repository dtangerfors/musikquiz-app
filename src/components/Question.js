import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
function Question() {
  // retrieve score, questions and index from the store
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);
  // create variables for the question
  const question = questions[questionIndex];

  return (
    <>
      <div className="py-24">
        <h1 className="font-sans-condensed font-extrabold text-5xl leading-tight text-center text-white">
          {question.primary.question.text}
        </h1>
      </div>
      {/* <Counter seconds={question.primary.time_limit} question={questionIndex +1}/> */}
    </>
  );
}
export default Question;
