import React from 'react'
import { StarRate } from '@material-ui/icons';
const Rating = ({count}) => {
    var ratings = [];
    for(var i=0;i<count;i++){
      ratings.push(<StarRate key={i}/>)
    }
    return ratings;
}

export default Rating;