import React from 'react';
import SpinnerImg from '../loader.gif';

const Spinner = () => {
    return (
        <div className="spinnerDiv">
            <img className="spinner" src={SpinnerImg} alt="spinner"/>
        </div>
    )
}

export default Spinner;