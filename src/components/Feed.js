import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import SearchBar from './SearchBar';
import Listings from './Listings';
import Profile from './Profile';

const Feed = () => {
    return (
        <div className="feed__main">
            <SearchBar/>
            <Switch>
                <Route path='/' exact component={Listings}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        </div>
    )
}

export default Feed;