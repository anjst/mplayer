import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  const spinRun = {
    animation: "rotation 35s infinite linear",
    animationPlayState: "running",
  };
  const spinStop = {
    animation: "rotation 35s infinite linear",
    animationPlayState: "paused",
  };

  return (
    <div className="song-container">
      <img
        style={isPlaying ? spinRun : spinStop}
        alt={currentSong.name}
        src={currentSong.cover}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
