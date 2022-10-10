import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import AnswerPagination from "./AnswerPagination";
import { fadeUp, transition } from "../../animations";

const AnswerBoard = ({quiz}) => {
   const questionIndex = useSelector((state) => state.index);

   return (
      <div className="bg-white border-2 border-black border-b-0 flex flex-col mt-auto min-h-[70vh]">
            <div className="border-b-2 border-black">
              <AnswerPagination quiz={quiz.body} />
            </div>
            <div className="flex border-b-2 border-black">
              <div className="px-10 py-6 border-r-2 border-black flex-1">
                <p>
                  <span className="font-sans text-gray-500 uppercase text-sm">
                    Artist
                  </span>
                  <motion.span className="block font-sans-condensed font-extrabold text-2xl"
                  key={`artist-${questionIndex}`}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: 1, ...transition }}>
                    {quiz.body[questionIndex].primary.artist.text}
                  </motion.span>
                </p>
              </div>
              <div className="px-10 py-6 flex-1">
                <p>
                  <span className="font-sans text-gray-500 uppercase text-sm">
                    Låt
                  </span>
                  <motion.span className="block font-sans-condensed font-extrabold text-2xl"
                  key={`song-${questionIndex}`}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: 1.5, ...transition }}>
                    {quiz.body[questionIndex].primary.song.text}
                  </motion.span>
                </p>
              </div>
            </div>
            <div>
              <div className="p-10 pb-6 pl-0 ml-10 border-b-2 border-gray-300">
                <span className="font-sans text-gray-500 uppercase text-sm">
                  Fråga
                </span>
                <p className="font-sans text-gray-700 text-sm max-w-prose">
                  {quiz.body[questionIndex].primary.question.text}
                </p>
              </div>
              <div className="p-10">
                <motion.p className="block font-sans-condensed font-extrabold text-5xl  max-w-[35ch]"
                key={`question-answer-${questionIndex}`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: 2, ...transition }}>
                  {quiz.body[questionIndex].primary.answer.text}
                </motion.p>
              </div>
            </div>
          </div>
   )
}

export default AnswerBoard