import React from "react";
import './_HeroImage.scss'

const HeroImage = ({ image, text1, text2 }) => {
    return (

        <div className="hero-image" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-text-container">
                <h1 className="hero-title">{text1}</h1>
                <h2 className="hero-title">{text2}</h2>
            </div>
            <div className="hero-opacity"></div>

        </div>


    );
};

export default HeroImage;