import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Counter from "./Counter";
import { fadeUp, transition } from "../animations";

const Question = ({ isVisible }) => {
  // retrieve score, questions and index from the store
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);
  // create variables for the question
  const question = questions[questionIndex];

  return (
    <>
      <motion.div
        key={`question-title-${questionIndex}`}
        className="py-24"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ delay: 0.3, ...transition }}
      >
        <h1
          className="font-sans-condensed font-extrabold text-6xl leading-tight text-white"
          
        >
          {question.primary.question.text}
        </h1>
      </motion.div>
      {/* <Counter seconds={question.primary.time_limit} question={questionIndex +1}/> */}
    </>
  );
};
export default Question;
