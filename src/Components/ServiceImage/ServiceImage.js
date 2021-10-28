import React from 'react';
import './_ServiceImage.scss'

const ServiceImage = ({ flex, title, text, image, alt }) => {



    return (
        <div className="service-grid-container" style={{ flexDirection: flex }}>
            <div className="flex-text" >
                <h2 className="title">{title}</h2>
                <p className="text">{text}</p>
            </div>
            <div className="service-image-container"  >
                <img className="service-image" src={image} alt={alt} />
            </div>
        </div >
    );
}

export default ServiceImage;