import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Data from './Data';
import Property from './Property';


const Listings = () => {
    const [listings,setListings] = useState({});
    useEffect(()=>{
        setListings({Data});
        console.log(listings)
    },[]);
    return (
        <div className="listings__wrapper">
            <h4>Listings</h4>
            {Data.map(property => (
                <Property 
                key={property.id}
                name={property.name}
                rating={property.rating}
                imgUrl={property.imageUrl}
                rating={property.rating}
                location={property.location}
                bedrooms={property.bedrooms}
                baths={property.baths}
                />
            ))}
        </div>
    )
}

export default Listings;