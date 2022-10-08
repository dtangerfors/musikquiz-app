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

  useHotkeys(
    "right",
    () => {
      if (!(questionIndex >= questions.length - 1)) {
        dispatch({
          type: "INCREMENT",
          currentIndex: questionIndex,
        });
        dispatch({
          type: "SET_QUIZ_COMPONTENT",
          quiz_component: "song",
        });
      } else {
        navigate("answers");
        dispatch({
          type: "SET_INDEX",
          index: 0,
        });
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
        dispatch({
          type: "SET_QUIZ_COMPONTENT",
          quiz_component: "song",
        });
      }
    },
    [questionIndex]
  );

  useHotkeys(
    "down",
    () => {
      dispatch({
        type: "SET_QUIZ_COMPONTENT",
        quiz_component: "question",
      });
    },
    [questionIndex]
  );

  useHotkeys(
    "up",
    () => {
      dispatch({
        type: "SET_QUIZ_COMPONTENT",
        quiz_component: "song",
      });
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
