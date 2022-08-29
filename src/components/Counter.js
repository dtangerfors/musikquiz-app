import React, { useEffect, useState } from "react";

const Counter = ({seconds = 30, question}) => {
  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="relative bg-white flex justify-between border-2 border-black mt-12">
      <span style={{animationDuration: `${seconds}s`}} className="absolute w-full h-full bg-[#b6e85f] top-0 left-0 animate-timerWidth"></span>
      <div className="relative w-12 h-12 grid place-items-center font-sans-condensed text-2xl font-bold border-r-2 border-black text-black">
        #{question}
      </div>
      <div className="relative w-12 h-12 grid place-items-center font-sans-condensed text-2xl font-bold border-l-2 border-black text-black">
        {counter}
      </div>
    </div>
  );
};

export default Counter