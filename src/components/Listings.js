import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Data} from './Data';
import Property from './Property';
import Spinner from './Spinner';


const Listings = () => {
    const [listings,setListings] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        const fetchListings = async() => {
            const result = await axios('http://localhost:1337/properties');
            setListings(result.data)
            setIsLoading(false);
        }
        fetchListings();
    },[])
    return (
        isLoading ? (<Spinner/>) : (<div className="listings__wrapper">
            {listings.map(property => (
                <Property 
                key={property.id}
                name={property.property_name}
                rating={property.rating}
                />
            ))}
        </div>)
    )
}

export default Listings;