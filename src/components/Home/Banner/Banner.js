import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section id="banner" className=" py-4">
        <div className="container mx-auto py-2 px-2 flex md:flex-row-reverse bg-indigo-200 rounded-xl">
          {/* ========  */}
          <div className="md:w-1/2 flex flex-col align-middle justify-center textContent">
            <div className="ml-4 ">
              <h1 className=" text-cyan-800 md:font-semibold text-xl">
                This website is tested by your programming learning basement
                MCQ.These questions will make your learning more complete. SO
                LETS GO.
              </h1>
            </div>
          </div>
          <div className="flex md:flex-col md:justify-center md:w-1/2 imageBox">
            <div className="">
              <img
                className="w-[100%] h-[20vh] rounded-[10px] imgBoxInner"
                alt="img"
                src="https://res.cloudinary.com/dwac7hlfp/image/upload/v1665485264/edulerning_om0vbe.png"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
