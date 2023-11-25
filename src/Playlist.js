import React from "react";
import { Track } from "./Track";

function PLaylist({playlistName, namePlaylist, playlist}) {
    return (
        <>
            <div onChange={namePlaylist} >
                <h2>{playlistName}</h2>
                <input type="text" value={playlistName} />
            </div>
            <ul>
                {playlist.map((track, index) => (
                    <Track key={index} artist={track.artist} track={track.song} />
                ))}
            </ul>
        </>
    )
}

export default PLaylist;