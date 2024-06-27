import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  const [header, setHeader] = useState("Vartalaap");
  // वार्तालाप

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeader((prevHeader) =>
        prevHeader === "Vartalaap" ? "वार्तालाप" : "Vartalaap"
      );
    }, 800);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="sticky bg-[#000000]/60 backdrop-blur-md top-0 flex items-start justify-between w-full min-w-7xl mx-auto z-20 p-5 md:px-12">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <img
          className="h-12 w-12 rounded-full"
          src="/images/VARTAA.jpg"
          alt="/"
        />
        <h1 className="md:block hidden text-2xl tracking-wide text-white font-bold mx-4">
          {header}
        </h1>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/channel/UC5IVJQuG2iFmysir2RNRVSw"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/vartalaap_podcast/"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/company/vartalaap-podcast/?viewAsMember=true"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://open.spotify.com/show/0RlQigGr31JbgjdkIVbPZY"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://x.com/Vartalaap__"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          bgColor="transparent"
          fgColor="white"
          network="email"
          className="cursor-pointer"
        />
      </motion.div>
    </div>
  );
}
