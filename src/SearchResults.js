import TrackList from "./Tracklist";

function SearchResults({trackList}) {

    return (
        <ul>
            <h2>Results</h2>
            <TrackList trackList={trackList}/>
        </ul>
    )
}

export default SearchResults;