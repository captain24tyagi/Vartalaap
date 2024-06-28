import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function TeamCard({ name, role, degree, image }) {
  return (
    <div>
      <article
        className="flex rounded-xl items-center space-y-3 flex-shrink-0 w-full mt-5 md:mt-10 xl:w-[450px] snap-center p-6 bg-[#121212] drop-shadow-[4px_8px_8px_rgba(226,135,67,0.5)] hover:opacity-100 opacity-90 
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
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover object-top mx-2"
          src={image}
          alt="/"
        />
        <div className="mx-2">
          <h4 className="md:text-2xl text-md font-light text-yellow-400">
            {name}
          </h4>
          <p className="font-bold text-xs md:text-xl mt-1">{role}</p>
          <p className="mt-1">{degree}</p>
          <div className="mt-2">
            <SocialIcon
              url="https://x.com/Vartalaap__"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/vartalaap-podcast/?viewAsMember=true"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.instagram.com/vartalaap_podcast/"
              fgColor="white"
              bgColor="transparent"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
