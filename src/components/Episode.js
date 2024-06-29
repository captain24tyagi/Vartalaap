import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Episode({ title, image, content, youtube, spotify }) {
  return (
    <div className="p-5 min-w-full md:h-[23rem] h-[35rem] my-2 bg-[#121212] drop-shadow-[4px_4px_rgba(255,46,84,0.5)] flex flex-col md:flex-row rounded-lg">
      <img className="md:w-30 md:h-60 mt-7 h-[180px]" src={image} alt="/" />
      <div className="m-5 p-5">
        <h1 className="text-red-500 text-xl md:text-3xl font-bold mb-10">
          {title}
        </h1>
        <p className="text-white md:text-lg text-xs">{content}</p>
        <div className="flex flex-row space-x-5 mt-5">
          <a
            href={`https://www.youtube.com/${youtube}`}
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              className="text-lg"
              // url={`https://www.youtube.com/${youtube}`}
              fallback="youtube"
              fgColor="#eb4034"
              bgColor="transparent"
            />
          </a>
          <a
            href={`https://open.spotify.com/${spotify}`}
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              // url={`https://open.spotify.com/${spotify}`}
              fallback="spotify"
              fgColor="#1ED760"
              bgColor="transparent"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
