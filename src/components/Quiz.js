import React from "react";
import Pagination from "./Pagination";

const Quiz = ({questions}) => {
   if (!questions) return null;

   return (
      <div className="flex flex-col min-h-screen justify-between">

         <div className="mb-12"><Pagination totalQuestions={questions} /></div>

      </div>
   )
}

export default Quiz