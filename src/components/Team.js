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
        TEAM
      </h1>

      <div className="w-full flex space-x-5 overflow-x-hidden px-10 snap-x snap-mandatory mt-5"></div>
      <div className="flex gap-6 justify-center flex-wrap">
        {" "}
        <TeamCard
          name="Sarthak Tyagi"
          role="Co-Founder"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Sarthak.jpg"
          degree="Graduate Engineer Trainee"
          insta="captain24tyagi"
          twitter="captain24tyagi"
          linkedin="sarthak-tyagi24"
        />
        <TeamCard
          name="Rachit Dhaka"
          role="Co-Founder"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/1.png"
          degree="B.Tech, Computer Science and Engineering"
          insta="rachitdhaka_"
          twitter="rachitdhaka_"
          linkedin="rachit-dhaka"
        />
        <TeamCard
          name="Shaurya Dawra"
          role="Video Editor"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Shaurya.exe.jpeg"
          degree="B.Tech, Computer Science and Engineering"
          insta="shaurya_dawra"
          twitter="DawraShaurya"
          linkedin="shaurya-dawra-978577217"
        />
        <TeamCard
          name="Anudeshya Saxena"
          role="Video Editor"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Anudeshya.jpg"
          degree="B.Tech, Computer Science and Engineering"
          insta="anudeshya03_98"
          twitter="AnudeshyaS02_03"
          linkedin="anudeshya-saxena-3aba49295"
        />
        <TeamCard
          name="Jas Krrish Singh"
          role="Technical Member"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/JasKrrishSingh.jpeg"
          degree="B.Tech, Computer Science and Engineering"
          insta="jas_krrish_singh_rajput_"
          twitter="jas_krrish"
          linkedin="jaskrrish"
        />
        <TeamCard
          name="Alok Mishra"
          role="Marketing Head"
          image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/alok.jpg"
          degree="B.Tech, Computer Science and Engineering"
          insta="alok-mishra-359375204"
          twitter="Alokmishra_1324"
          linkedin="alok-mishra-359375204"
        />
      </div>
    </div>
  );
}
