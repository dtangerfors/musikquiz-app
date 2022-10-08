import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PaginationItem = ({index}) => {
   const dispatch = useDispatch();
   const questionIndex = useSelector((state) => state.index);
   const themeColor = useSelector((state) => state.theme_color);
   let activeButtonBg = questionIndex === index ? themeColor: null;
 
   const setIndex = index => {
     dispatch({
       type: "SET_INDEX",
       index: index
     })
     dispatch({
      type: "SET_QUIZ_COMPONTENT",
      quiz_component: "song",
    });
   };
 
   return (
   <div className="flex-1 relative z-10 group">
     <button
       type="button"
       className="w-10 h-10 mx-auto rounded-full bg-white grid place-items-center font-sans-condensed text-black text-lg leading-none border-2 border-black"
       style={{backgroundColor: activeButtonBg}}
       onClick={() => setIndex(index)}
     >
       {index + 1}
     </button>
     <div className="absolute -z-10 w-full h-[2px] bg-black top-1/2 -translate-y-1/2 group-first:w-1/2 group-first:right-0 group-last:w-1/2 group-last:left-0"></div>
   </div>
 )};

export default PaginationItem