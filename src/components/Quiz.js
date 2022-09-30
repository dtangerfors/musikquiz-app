import React from "react";
import NavButton from "./NavButton";
import Pagination from "./Pagination";
import Question from "./Question";

const Quiz = ({questions}) => {
   if (!questions) return null;

   return (
      <div className="flex flex-col min-h-screen justify-between">

         <div className="mt-12"><Pagination totalQuestions={questions} /></div>
         <Question />
         {/* <NavButton /> */}

      </div>
   )
}

export default Quiz