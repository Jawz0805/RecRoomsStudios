import React from "react";
import "./_VideoPlayer.scss";
const VideoPlayer = ({ video }) => {
  return (
    <div className="player-wrapper">
      <h1>{video.title}</h1>
      <iframe
        title={video.title}
        src={`${video.videoURL}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="player-iframe"
        autoPlay="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
