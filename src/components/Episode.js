import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Episode({ title, image, content }) {
  return (
    <div className="p-5 min-w-full md:h-[23rem] h-[33rem] my-2 bg-[#1e2320] drop-shadow-[4px_4px_rgba(255,46,84,0.5)] flex flex-col md:flex-row rounded-lg">
      <img className="md:w-30 md:h-60 mt-7 h-[180px]" src={image} alt="/" />
      <div className="m-5 p-5">
        <h1 className="text-red-500 text-xl md:text-3xl font-bold mb-10">
          {title}
        </h1>
        <p className="text-white md:text-lg text-xs">{content}</p>
        <div className="flex flex-row space-x-5 mt-5">
          <SocialIcon
            className="text-lg"
            url="https://www.youtube.com/channel/UC5IVJQuG2iFmysir2RNRVSw"
            fgColor="#eb4034"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://open.spotify.com/show/0RlQigGr31JbgjdkIVbPZY"
            fgColor="#1ED760"
            bgColor="transparent"
          />
        </div>
      </div>
    </div>
  );
}
