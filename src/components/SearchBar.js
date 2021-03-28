import React,{useState,useEffect} from 'react'
import { Search } from '@material-ui/icons';

const SearchBar = () => {
    const [query,setQuery] = useState({});
    useEffect(()=>{
        console.log(query)
    },[])
    return (
        <div className="search__bar">
            <input type="text" onChange={(e)=>{setQuery(e.target.value)}} name="s" placeholder="Enter Keywords Here" />
            <button className="search__button"><Search/></button>
        </div>
    )
}

export default SearchBar;