import React from "react";
import Slider from "react-slick";
import Episode from "./Episode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Podcast() {
  return (
    <>
      <div className="max-w-7xl mx-auto z-20 p-5 items-center flex flex-col">
        <img
          className="h-40 w-30 relative"
          src="/images/track degin.png"
          alt="/"
        />
        <h1 className="text-2xl text-center text-white absolute my-20 py-5">
          OUR PODCASTS
        </h1>

        <div className=""></div>
      </div>
      <Carasouel />
    </>
  );
}

function Carasouel() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: <ChevronRight color="#ffffff" strokeWidth={6} size={220} />,
    prevArrow: <ChevronLeft color="#ffffff" strokeWidth={6} size={220} />,
    cssEase: "linear",
  };
  return (
    <>
      <div className="">
        <div className="max-w-fit px-7">
          <Slider {...settings}>
            <div className="mx-2">
              <Episode
                title="Episode 1 ft. Prayasu"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Prayasu Thumbnail.png"
              />
            </div>
            <div className="mx-2">
              <Episode
                title="Episode 2 ft. Zeeshan"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/Zeeshan Thumbnail.png"
              />
            </div>
            <div className="mx-2">
              <Episode
                title="Episode 3 ft. Janvi"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/thumbnail.png"
              />
            </div>
            <div className="mx-2">
              <Episode
                title="Episode 4 ft. Waseem"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/thumbnail - Copy.png"
              />
            </div>
            <div className="mx-2">
              <Episode
                title="Episode 5 ft. Hrushi"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/EPISODE 1(1).png"
              />
            </div>
            <div className="mx-2">
              <Episode
                title="Episode 6 ft. Paras"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/thumbnail.png"
              />
            </div>
            <div className="mx-2">
              <Episode
                title="Episode 6 ft. Achintya"
                image="/images/sarthak bhaiya deklo-20240621T141842Z-001/sarthak bhaiya deklo/EPISODE 1.png"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
