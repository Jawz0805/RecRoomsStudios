import './_Gallery.scss';




function Gallery({ image, alt }) {
    return (
        <div className="image-container">
            <img src={image} width="100%" height="100%" alt={alt} />
        </div>
    );
}

export default Gallery;