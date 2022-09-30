import React from "react";
import { useSelector, useDispatch } from "react-redux";

const IndexButton = ({index}) => {
  const dispatch = useDispatch();
  const questionIndex = useSelector((state) => state.index);
  let active = questionIndex === index;

  const setIndex = (index) => {
    dispatch({
      type: "SET_INDEX",
      index: index,
    });
  };

  return (
    <li className={`flex-1 border-r-2 border-black last:border-r-0 ${active ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <button onClick={() => setIndex(index)} className="w-full h-12">
        {index + 1}
      </button>
    </li>
  );
};

export default IndexButton;
