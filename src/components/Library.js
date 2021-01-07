import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setIsPlaying,
  currentSong,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div className="library-nav">
        <h2 className="library-name">Library</h2>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
