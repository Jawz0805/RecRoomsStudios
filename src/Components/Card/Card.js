import React, { useState, useEffect } from "react";
import "./_Card.scss";
import { Link } from "react-router-dom";
import KB from "../../Assets/KbPodcastLogo.svg";
import RR from "../../Assets/RecRoomsLogoSquare.svg";
import { motion } from "framer-motion";
import CardPlaceholder from './CardPlaceholder'




const Card = ({ item, setTag, tag, index }) => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: (i) => ({
      opacity: 0,
      y: 100,
      scale: 0.9,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      transition: {
        duration: 5,
      },
    },
  };
  const [logo, setLogo] = useState(KB);




  useEffect(() => {
    if (item.collectionType === "podcast") {
      setLogo(KB);
    } else if (item.collectionType === "recrooms") {
      setLogo(RR);
    }
  }, [item]);

  const handleClick = (data) => {
    if (tag) {
      setTag(data.tag);
    }
  };




  return (
    item ?
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="card-container bg-black"
        index={index}
      >
        <div className="card-text-container">
          <div className="card-text-inner-container">
            <span className="card-title">{item.title}: </span>
            <span className="card-subtitle">{item.subtitle} </span>
            <img src={logo} alt="kb" className="collection-logo" />
          </div>
          {item.tags &&
            item.tags.map((tag, i) => {
              return (
                <Link
                  to="/episodes/"
                  className="red"
                  style={{ paddingRight: "5px" }}
                  key={tag.id}
                  onClick={() => handleClick(tag)}
                >
                  {tag.tag}
                </Link>
              );
            })}
        </div>
        {item.featured ? (
          <div className="featured-box">
            <h2 className="featured-text">Featured</h2>
          </div>
        ) : (
            <></>
          )}
        {item.new ? (
          <div className="featured-box">
            <h2 className="featured-text">New Episode</h2>
          </div>
        ) : (
            <></>
          )}

        <Link to={`/${item.title}`}>
          <img
            src={item.coverImage.formats.small.url}
            alt={item.coverImage.alternativeText}
            className="card-image"
            width={item.coverImage.formats.small.width * 0.7}
            height={item.coverImage.formats.small.height * 0.7} />
          <p style={{ display: "none" }}>{item.title}</p>
        </Link>
      </motion.div> : <CardPlaceholder />
  );
};



export default Card;
