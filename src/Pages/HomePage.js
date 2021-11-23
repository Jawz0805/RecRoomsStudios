import React from "react";
import PodcastTable from "../Assets/PodcastTable-01.jpg"
import HeroImage from "../Components/HeroImage/HeroImage";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import PageWrapper from "../Containers/PageWrapper/PageWrapper";
// import GalleryContainer from '../Containers/GalleryContainer/GalleryContainer'
import Services from '../Containers/Services/Services'
// import ContactForm from "../Containers/ContactForm/ContactForm";


const HomePage = () => {
  return (
    <PageWrapper>
      <HeroImage image={PodcastTable} text1="Podcast Studio Hire In Manchester" text2="Looking to record a professional podcast in a homely state of the art studio? Then look no further!" id="home" />

      <div id="studio" className="video-container">
        <h2>Our Studio</h2>
        <p>Our podcast studio is fitted with top of the range audio and video equipment.</p>
        <p>Fully soundproofed to reduce background noise with a comfortable and homely feel and aesthetic.</p>
        <p>Located within Un.titled studio business park in Salford </p>
        <p>Check out a tour of our studio below</p>
        <p className="cool-space">Hire the Rec Rooms Studio for your podcasts, voice overs and more!</p>
        <VideoPlayer video={{ title: "Studio Tour", videoURL: "https://www.youtube.com/embed/64tDCUKYXks" }} />
      </div>
      <Services />

    </PageWrapper>
  );
};

export default HomePage;
