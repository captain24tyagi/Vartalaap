import React, { useState } from "react";
// import { motion } from "framer-motion";
import Guest from "./Guest";
import { GuestContent } from "../constant";

export default function About() {
  const [toggleState, setToggleState] = useState("s1");

  const handleChange = (event) => {
    setToggleState(event.target.value);
  };
  return (
    <div className="max-w-7xl mx-auto z-20 p-5 items-center flex flex-col">
      <img
        className="h-40 w-30 relative"
        src="/images/track degin.png"
        alt="/"
      />
      <h1 className="text-2xl text-center text-white absolute my-20 py-5">
        GUESTS
      </h1>

      <div className="w-fit backdrop-blur-md text-white rounded-lg my-4">
        <div className="flex px-3 py-2 justify-center items-center my-4 border-[1px] border-black/20 bg-[#1e2320]/60 rounded-lg">
          <label
            className={`inline-flex items-center mx-4 cursor-pointer ${
              toggleState === "s1"
                ? "text-yellow-400 rounded-lg font-semibold bg-[#1e2320]/90 shadow-md"
                : ""
            } rounded-2xl mr-3 py-1 px-2 hover:border-yellow-600 hover:bg-gray-100/10`}
          >
            <input
              type="radio"
              className="form-radio sr-only text-yellow-600 h-5 w-5"
              name="subject"
              value="s1"
              onChange={handleChange}
              checked={toggleState === "s1"}
            />
            <span className="ml-2 tracking-wider text-xs md:text-lg hover:text-yellow-700 transition duration-500 ease-in-out ">
              Seasion-1
            </span>
          </label>
          <label
            className={`inline-flex items-center mx-4 cursor-pointer ${
              toggleState === "s2"
                ? "text-yellow-400 rounded-lg font-semibold bg-[#1e2320]/90 shadow-md"
                : ""
            } rounded-2xl mr-3 py-1 px-2 hover:border-red-700 hover:bg-gray-100/10`}
          >
            <input
              type="radio"
              className="form-radio sr-only text-yellow-400 h-5 w-5"
              name="subject"
              value="s2"
              onChange={handleChange}
              checked={toggleState === "s2"}
            />
            <span className="ml-2 tracking-wider text-xs md:text-lg hover:text-yellow-700 transition duration-500 ease-in-out ">
              Season-2
            </span>
          </label>
        </div>
      </div>

      <div
        className={`w-full ${
          toggleState === "s1" &&
          "flex space-x-5 overflow-x-hidden px-10 snap-x snap-mandatory"
        }  mt-5`}
      >
        {toggleState === "s1" ? (
          <div className="w-full flex space-x-5 overflow-x-hidden px-10 snap-x snap-mandatory mt-5">
            {GuestContent.map((guest, index) => (
              <Guest
                key={index}
                name={guest.name}
                image={guest.image}
                content={guest.content}
              />
            ))}
          </div>
        ) : (
          <div className="my-6">
            <h1 className="text-center text-xl md:text-4xl font-bold text-white">
              {" "}
              Coming Soon ...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
