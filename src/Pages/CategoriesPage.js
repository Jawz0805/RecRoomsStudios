import React, { useState, useEffect, useRef } from "react";
import PageWrapper from "../Containers/PageWrapper/PageWrapper";
import getData from "../Utilities/GetData";
import CategoriesList from "../Containers/CategoriesList/CategoriesList";
import Card from "../Components/Card/Card";

import axios from "axios";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

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

    transition: {
      delay: i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    y: 100,

    transition: {
      duration: 0.5,
    },
  },
};

const CategoriesPage = () => {
  const [categories, setCategories] = useState();
  const [data, setData] = useState();
  const [constData, setConstData] = useState();
  const [tag, setTag] = useState("All");
  const ref = useRef();
  const list1 = "podcasts";
  const list2 = "recrooms";

  useEffect(() => {

    if (data === undefined) {
      axios.all([getData(list1), getData(list2), getData("tags")]).then(
        axios.spread((res1, res2, res3, err) => {


          let newData = res1.concat(res2);
          setConstData(newData);
          setCategories(res3)
          newData.sort((a, b) => {
            return new Date(b.releaseDate) - new Date(a.releaseDate);
          });
          setData(newData);
        })
      );
    }
  });


  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  };

  const sortNewest = (array) => {
    let newArray = array.sort((a, b) => {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });
    return newArray
  };
  const sortOldest = (array) => {
    let newArray = array.sort((a, b) => {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });
    return newArray
  };
  const filterPodcast = () => {
    let newArray = [];
    constData.map((item, index) => {
      if (item.collectionType === "podcast") {
        return newArray.push(item);
      }
      return newArray;
    });

    return newArray;
  };
  const filterRecRooms = () => {
    let newArray = []
    constData.map((item, index) => {
      if (item.collectionType === "recrooms") {
        return newArray.push(item);
      }
      return newArray;
    });
    return newArray

  };
  const filterAll = () => {
    let newArray = []
    constData.map((item, index) => {
      return newArray.push(item)
    })
    return newArray
  };

  return (
    <PageWrapper>
      <div>
        {categories ?
          <CategoriesList
            setTag={setTag}
            categories={categories}
            tag={tag}
            setData={setData}
            shuffle={shuffle}
            data={data}
            constData={constData}
            sortNewest={sortNewest}
            sortOldest={sortOldest}
            filterPodcast={filterPodcast}
            filterRecRooms={filterRecRooms}
            filterAll={filterAll}
          /> : (
            <div className="categories-container">
              <div className="categories-list">
                <label >Sort By: </label>
                <select id="sort placeholder" />
              </div>
              <div className="categories-list">
                <label >Filter By Series: </label>
                <select id="filter placeholder" />
              </div>
              <div className="categories-list">
                <label >Filter By Genre:</label>
                <select id="Genre Placeholder" />
              </div>
            </div>)}

        <div style={{ minHeight: "100vh" }} className="bg-black">
          <AnimatePresence>
            <motion.ul
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className="list-container bg-black"
            >
              <AnimateSharedLayout>
                {data &&
                  data.map((item, i) => {
                    let tags = [];
                    item.tags.map((tag, i) => {
                      return tags.push(tag.tag);
                    });
                    if (tags.includes(tag)) {
                      return (
                        <motion.li
                          custom={i}
                          animate="visible"
                          exit="exit"
                          variants={variants}
                          initial="hidden"
                          layout
                          key={item.id}
                          ref={ref}
                        >
                          <Card item={item} setTag={setTag} tag={tag} />
                        </motion.li>
                      );
                    } else if (tag === "All") {
                      return (
                        <motion.li
                          custom={i}
                          animate="visible"
                          variants={variants}
                          initial="hidden"
                          exit="exit"
                          layout
                          key={item.id}
                          ref={ref}
                        >
                          <Card item={item} setTag={setTag} tag={tag} />
                        </motion.li>
                      );
                    } else return null;
                  })}
              </AnimateSharedLayout>
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

    </PageWrapper>
  );
};

export default CategoriesPage;
