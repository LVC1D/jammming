import React from "react";
import { Track } from "./Track";

function TrackList({ trackList, addToPlaylist }) {
    return (
        <ul>
          {trackList.map((track, index) => (
            <div key={index}>
              <Track artist={track.artist} track={track.song} />
              <button onClick={() => addToPlaylist(track)}>+</button>
            </div>
          ))}
        </ul>
      );
}

export default TrackList;