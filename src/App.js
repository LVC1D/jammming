import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from 'react';
import { songs } from './songs';
import { PLaylist } from './Playlist';

function App() {
  
  const [trackList, setTrackList] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const showResults = (searchTerm) => {
    const searchResults = songs.filter((song) => song.artist.includes(searchTerm))
    setTrackList(searchResults)
  }

  const addToPlaylist = ({target}) => {
    
  }

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar showResults={showResults} />
      <ul style={{display: "inline-flex"}}>
        <SearchResults trackList={trackList}  />
        <PLaylist />
      </ul>
    </div>
  );
}

export default App;
