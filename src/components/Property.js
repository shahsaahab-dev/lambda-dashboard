import React from 'react'
import Rating from './Rating';
import { LocationOn, SingleBed,Bathtub,FavoriteBorderOutlined as Heart,CallOutlined } from '@material-ui/icons';

const Property = ({id,name,rating,imgUrl,location,bedrooms,baths}) => {
    return (
        <div className="property__single">
            <div className="property__information">
            <img src={imgUrl}/>
            <div className="rating__name">
                <h4>{name}</h4>
                <div className="stars">
                    <Rating count={rating}/>
                </div>
            <p id="location"><LocationOn/>{location}</p>
            <ul id="features">
                <li key={id}><SingleBed/>{bedrooms}</li>
                <li><Bathtub/>{baths}</li>
            </ul>
            </div>
            </div>
            <div className="property__actions">
                <button><Heart/>Add to Wishlist</button>
                <button className="call__button"><CallOutlined/>Call</button>
            </div>
        </div>
    )
}
export default Property;