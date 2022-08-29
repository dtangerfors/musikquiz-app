import React from "react";

const Pagination = ({totalQuestions}) => {

  return (
    <div className="flex">
      {totalQuestions.map((number, index) => {
        return (
          <div className="flex-1 relative z-10 group">
            <a className="w-10 h-10 mx-auto rounded-full bg-white grid place-items-center font-sans-condensed text-black text-lg leading-none border-2 border-black group-first:bg-[#b6e85f]">
              {index +1}
            </a>
            <div className="absolute -z-10 w-full h-[2px] bg-black top-1/2 -translate-y-1/2 group-first:w-1/2 group-first:right-0 group-last:w-1/2 group-last:left-0"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
