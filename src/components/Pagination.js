import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { navigate } from "gatsby";

import PaginationItem from "./PaginationItem";

const Pagination = ({ totalQuestions }) => {
  const dispatch = useDispatch();
  const questionIndex = useSelector((state) => state.index);
  const questions = useSelector((state) => state.questions);
  const finished = questions.length - 1 === questionIndex;

  useHotkeys("right", () => {
      if (!(questionIndex >= 4)) {
        dispatch({
          type: "INCREMENT",
          currentIndex: questionIndex,
        });
      } else {
        navigate('answers')
      }
    },
    [questionIndex]
  );

  useHotkeys(
    "left",
    () => {
      if (questionIndex >= 1) {
        dispatch({
        type: "DECREMENT",
        currentIndex: questionIndex,
      });
      }
    },
    [questionIndex]
  );

  return (
    <div className="flex">
      {totalQuestions.map((number, index) => {
        return (
          <PaginationItem key={`question-button-${index}`} index={index} />
        );
      })}
    </div>
  );
};

export default Pagination;
