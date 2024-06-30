import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function TeamCard({
  name,
  role,
  degree,
  image,
  insta,
  twitter,
  linkedin,
}) {
  return (
    <div>
      <article
        className="flex rounded-xl items-center space-y-3 flex-shrink-0 w-[320px] md:w-full mt-5 md:mt-10 xl:w-[450px] snap-center p-6 bg-[#121212] drop-shadow-[4px_8px_8px_rgba(226,135,67,0.5)] hover:opacity-100 opacity-90 
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
          className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover object-top mx-2"
          src={image}
          alt="/"
        />
        <div className="mx-2">
          <h4 className="md:text-2xl text-md font-light text-red-500">
            {name}
          </h4>
          <p className="font-bold text-xs md:text-xl mt-1">{role}</p>
          <p className="mt-1 md:text-lg text-xs h-6 md:h-12">{degree}</p>
          <div className="mt-2">
            <a
              href={`https://x.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon
                // url={`https://x.com/${twitter}`}
                fallback="x"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon
                // url={`https://www.linkedin.com/in/${linkedin}`}
                fallback="linkedin"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
            <a
              href={`https://www.instagram.com/${insta}`}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon
                // url={`https://www.instagram.com/${insta}`}
                fallback="instagram"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
