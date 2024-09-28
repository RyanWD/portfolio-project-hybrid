import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import 'animate.css';

const MagicButton = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    //     <button onClick={handleClick} className="p-[3px] relative">
    //     <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    //     <div className={`px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
    //       {title}
    //     </div>
    //   </button>
    <div className="relative inline-flex">
      <button
        onClick={handleClick}
        className="mt-5 relative inline-flex h-16 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#121212_50%,#FFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {title}
        </span>
      </button>
      <div className="absolute bottom-[-8px] left-[33%] translate-x-2/4 translate-y-2/4 overflow-visible">
        <IoIosArrowDown style={{animationDuration: '1.5s'}}  className="animate__animated animate__fadeInDown animate__delay-2s animate__infinite text-3xl mb-[-1rem] text-red-500" />
        {/* <IoIosArrowDown style={{animationDuration: '1.5s'}} className="animate__animated animate__fadeInDown animate__delay-3s animate__infinite text-3xl mb-[-1rem] text-red-500" /> */}
        <IoIosArrowDown style={{animationDuration: '1.5s'}} className="animate__animated animate__fadeInDown animate__delay-3s animate__infinite text-3xl text-red-500" />
      </div>
    </div>
  );
};

export default MagicButton;
