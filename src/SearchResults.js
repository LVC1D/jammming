import TrackList from "./Tracklist";
import PLaylist from "./Playlist";
import { useState } from "react";

function SearchResults({trackList}) {

    const [playlistName, setPlaylistName] = useState('')

    const handleChange = (e) => {
        const newName = e.target.value
        setPlaylistName(newName)
    }
    
    const [playlist, setPlaylist] = useState([])

    const addToPlaylist = (item) => {
        setPlaylist((prev) => {
            if (prev.some(t => t.id === item.id)) {
                return prev.filter(t => t.id !== item.id)
            } else {
                const newPlaylist = [...prev, item]
                return newPlaylist;
            }
        })
    }

    return (
        <>
            <ul>
                <h2>Results</h2>
                <TrackList trackList={trackList} addToPlaylist={addToPlaylist} />
            </ul>
            <ul>
                <PLaylist playlistName={playlistName} namePlaylist={handleChange} playlist={playlist} />
            </ul>
        </>
    )
}

export default SearchResults;