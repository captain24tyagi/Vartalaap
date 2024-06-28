import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function Guest({
  name,
  image,
  content,
  insta,
  linkedin,
  twitter,
}) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px]
     md:w-[200px] mt-5 md:mt-10 xl:w-[450px] snap-center p-10 md:p-10 bg-[#121212] drop-shadow-[4px_8px_4px_rgba(226,135,67,0.5)]  hover:opacity-100 opacity-90 
     transition-opacity duration-200 overflow-hidden cursor-pointer text-white"
    >
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover object-top"
        src={image}
        alt="/"
      />

      <div className="px-0 md:px-10">
        <h4 className="md:text-3xl text-md text-center font-light text-yellow-400">
          {name}
        </h4>
        <p className="uppercase py-5 h-fit md:h-[220px] text-sm md:text-lg text-white">
          {content}
        </p>
      </div>
      <div className="flex justify-start mt-2">
        <a href={twitter} target="_blank" rel="noreferrer">
          <SocialIcon
            // url="https://x.com/Vartalaap__"
            fallback="x"
            fgColor="white"
            bgColor="transparent"
            className="hover:text-yellow-400"
          />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <SocialIcon
            // url="https://www.linkedin.com/company/vartalaap-podcast/?viewAsMember=true"
            fallback="linkedin"
            fgColor="white"
            bgColor="transparent"
          />
        </a>
        <a href={insta} target="_blank" rel="noreferrer">
          <SocialIcon
            // url="https://www.instagram.com/vartalaap_podcast/"
            fallback="instagram"
            fgColor="white"
            bgColor="transparent"
          />
        </a>
      </div>
    </article>
  );
}
