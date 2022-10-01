import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SongPlaying = ({}) => {

   // retrieve score, questions and index from the store
   const questions = useSelector((state) => state.questions);
   const questionIndex = useSelector((state) => state.index);
   // create variables for the question
   const question = questions[questionIndex];

   return (
      <div className="py-24">
        <h1 className="font-sans-condensed font-extrabold text-5xl leading-tight text-center text-white">
          Låt {questionIndex + 1}
        </h1>
      </div>
   )
}

export default SongPlaying;