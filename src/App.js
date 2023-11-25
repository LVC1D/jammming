import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from 'react';

function App() {
  
  const [trackList, setTrackList] = useState([]);
  

  const showResults = (searchResults) => {
    setTrackList(searchResults)
  }

  return (
    <div>
      <h1>Jammming</h1>
        <SearchBar showResults={showResults} />
      <ul style={{display: "inline-flex"}}>
        <SearchResults trackList={trackList} />
      </ul>
    </div>
  );
}

export default App;
