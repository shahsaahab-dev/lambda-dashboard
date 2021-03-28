import React from 'react'
import SearchBar from './SearchBar';
import Listings from './Listings';

const Feed = () => {
    return (
        <div className="feed__main">
            <SearchBar/>
            <Listings/>
        </div>
    )
}

export default Feed;