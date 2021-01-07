import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
  setIsPlaying,
  currentSong,
}) => {
  const handleSongClick = async () => {
    setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    await setSongs(newSongs);

    if (isPlaying && song.active) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else if (isPlaying && !song.active) {
      audioRef.current.play();
    } else if (!isPlaying && song.active) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else if (!isPlaying && song.active) {
    }
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={handleSongClick}
    >
      <div className="library-image">
        <img alt={song.name} src={song.cover} />
        <FontAwesomeIcon
          className="play-library"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
      </div>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
