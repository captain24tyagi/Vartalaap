import React from "react";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto z-20 p-5 items-center flex flex-col">
      <img
        className="h-40 w-30 relative"
        src="/images/track degin.png"
        alt="/"
      />
      <h1 className="text-2xl text-center text-white absolute my-20 py-5">
        TEAMS
      </h1>

      <div className="w-full flex space-x-5 overflow-x-hidden px-10 snap-x snap-mandatory mt-5"></div>
      <div className="flex gap-6 justify-center flex-wrap">
        {" "}
        <TeamCard
          name="Sarthak Tyagi"
          role="Co-Founder"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Sarthak.jpg"
          degree="B.Tech, Computer Science and Engineering"
        />
        <TeamCard
          name="Rachit Dhaka"
          role="Co-Founder"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/1.png"
          degree="B.Tech, Computer Science and Engineering"
        />
        <TeamCard
          name="Shaurya Dawra"
          role="Editor"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Shaurya.exe.jpeg"
          degree="B.Tech, Computer Science and Engineering"
        />
        <TeamCard
          name="Anudeshya Saxena"
          role="Editor"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Anudeshya.jpg"
          degree="B.Tech, Computer Science and Engineering"
        />
        <TeamCard
          name="Jas Krrish Singh"
          role="Technical Member"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/JasKrrishSingh.jpeg"
          degree="B.Tech, Computer Science and Engineering"
        />
        <TeamCard
          name="Alok Mishra"
          role="Marketing Head"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/alok.jpg"
          degree="B.Tech, Computer Science and Engineering"
        />
      </div>
    </div>
  );
}
