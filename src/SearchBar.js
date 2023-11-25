import React, {useState, useEffect} from "react";

function SearchBar({showResults}) {
    
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {    
        const fetchData = async() => {
        
            if(searchTerm.trim() === "" ) {
                return;
            }

            const accessToken = 'BQArBK2i6BeK6VHnGs3CusmeWHuO0Rhv3-g_dpLEeO7D7VIghLUXVl5CmOiVBJeer0a349tjcGx3iz7vnpHhPYN9I5LKa7xjTNVREKGIGH9VZTmsovY';

            try {
                const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if(!response.ok) {
                    throw new Error('Invalid network response.');
                }

                const data = await response.json();
                const searchResults = parseSpotifyData(data);
                showResults(searchResults)
            } catch(error) {
                console.error('Error fetching data from Spotify API: ', error.message)
            }
        }
        fetchData();
    }, [searchTerm, showResults])

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const parseSpotifyData = (data) => {
        if(!data.tracks || !data.tracks.items) {
            return [];
        }

        return data.tracks.items.slice(0, 10).map(item => ({
            artist: item.artists.length > 0 ? item.artists[0].name : 'Unknown artist',
            song: item.name,
            album: item.album ? item.album.name : 'Unknown album',
            id: item.id
        }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    required 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchBar;