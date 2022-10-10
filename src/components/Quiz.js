import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion"
import Pagination from "./Pagination";
import Question from "./Question";
import SongPlaying from "./SongPlaying";
import Logo from "./Logo";

const Quiz = ({questions}) => {
   const quiz_component = useSelector((state) => state.quiz_component);
   const theme_color = useSelector((state) => state.theme_color);
   if (!questions) return null;

   let component;

   if (quiz_component === "song") component = <SongPlaying />;
   if (quiz_component === "question") component = <Question />;

   return (
      <div className="flex flex-col min-h-screen">
         <header className="w-32 mt-12">
            <Logo fillColor={theme_color} />
          </header>
         
         {component}

         <div className="mb-12 my-auto">
            <Pagination totalQuestions={questions} />
         </div>

      </div>
   )
}

export default Quiz