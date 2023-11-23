import React from "react";
import { Track } from "./Track";

function TrackList({ trackList }) {
   
        return (
            <ul>
                {trackList.map((track, index) => <Track key={index} artist={track.artist} track={track.song} />)}
            </ul>
        )
}

export default TrackList;