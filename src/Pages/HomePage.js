import React, { useEffect, useState } from "react";
import PodcastTable from "../Assets/PodcastTable.jpg"
import HeroImage from "../Components/HeroImage/HeroImage";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import PageWrapper from "../Containers/PageWrapper/PageWrapper";



const HomePage = () => {
  return (
    <PageWrapper>
      <HeroImage image={PodcastTable} text1="Podcast Studio Hire In Manchester" text2="Looking to record a professional podcast in a homely state of the art studio? Then look no further!" />
      <div className="video-container">
        <p>Podcast equipment can be really expensive. The average podcaster spends around £1000 on their setup for microphones, headphones, audio processing and soundproofing</p>
        <p>Then there are technical hurdles to get up and running, all of which can be overwhelming for beginners.</p>
        <p>Not with Rec Rooms Studios!</p>
        <p>Record professional audio with a state of the art setup.</p>
        <p>No audio processing or technical setup or software to learn. Just hit record and go!</p>
        <p>Hire the Rec Rooms Studio for your podcasts, voice overs and more!</p>
        <VideoPlayer video={{ title: "Studio Tour", videoURL: "https://www.youtube.com/embed/rUzwzXyL7rQ" }} />
      </div>
    </PageWrapper>
  );
};

export default HomePage;
