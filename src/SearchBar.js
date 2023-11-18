import SearchResults from './SearchResults';

function SearchBar() {
    


    return (
        <>
            <form>
                <input type="text" required />
                <button>Search</button>
            </form>
            <SearchResults />
        </>
    )
}

export default SearchBar;