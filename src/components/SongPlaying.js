import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { fadeUp, transition } from "../animations";

const SongPlaying = ({}) => {
  // retrieve score, questions and index from the store
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);
  // create variables for the question
  const question = questions[questionIndex];

  return (
    <motion.div
      className="py-24"
      key={`song-playing-${questionIndex}`}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ delay: 0.3, ...transition }}
    >
      <h1 className="font-sans-condensed font-extrabold text-8xl leading-tight text-center text-white">
        Låt {questionIndex + 1}
      </h1>
    </motion.div>
  );
};

export default SongPlaying;
