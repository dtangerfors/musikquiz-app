import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "gatsby";

const NavButton = ({}) => {
  const dispatch = useDispatch();
  const questionIndex = useSelector((state) => state.index);
  const questions = useSelector((state) => state.questions);
  const finished = (questions.length - 1) === questionIndex;

  const increment = index => {
    dispatch({
      type: "INCREMENT",
      currentIndex: index,
    });
  };
  const decrement = index => {
    dispatch({
      type: "DECREMENT",
      currentIndex: index,
    });
  };

  return (
    <div className="absolute z-10 w-screen px-12 top-1/2 left-0 -translate-y-1/2 flex justify-between">
      {questionIndex > 0 ? <button onClick={() => decrement(questionIndex)} className="w-12 h-12 grid place-items-center font-sans-condensed text-2xl leading-none font-bold text-black bg-white border-2 border-black">
        &larr;
      </button> : null}
     {!finished ? <button onClick={() => increment(questionIndex)}  className="w-12 h-12 grid place-items-center font-sans-condensed text-2xl leading-none font-bold text-black bg-white border-2 border-black ml-auto">
        &rarr;
      </button> : <Link to="answers" className="w-12 h-12 grid place-items-center font-sans-condensed text-2xl leading-none font-bold text-black bg-white border-2 border-black ml-auto">Visa svar</Link>} 
    </div>
  );
};

export default NavButton;
