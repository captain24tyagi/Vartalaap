import React from "react";
import Slider from "react-slick";
import Episode from "./Episode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PodcastContent } from "../constant";

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
            {PodcastContent.map((podcast, index) => (
              <div key={index} className="mx-2">
                <Episode
                  title={podcast.title}
                  image={podcast.image}
                  content={podcast.content}
                  youtube={podcast.youtube}
                  spotify={podcast.spotify}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
