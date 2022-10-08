import React from "react";
import IndexButton from "./IndexButton";

const AnswerPagination = ({quiz}) => {

  return (
    <ul className="flex">
      {quiz.map((question, index) => {
        return <IndexButton index={index} key={`indexbutton-${index}`} />;
      })}
    </ul>
  );
};

export default AnswerPagination;
