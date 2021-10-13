import React, { useState, useEffect } from "react";
import getData from "../../Utilities/GetData";
import Card from "../../Components/Card/Card";
import "./_CardList.scss";
import axios from "axios";
import { motion } from "framer-motion";

import CardPlaceholder from "../../Components/Card/CardPlaceholder";

const variants = {
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, y: 100, scale: 0.9 },
};

const CardList = ({ list1, list2, filter }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.all([getData(list1), getData(list2)]).then(
      axios.spread((res1, res2, err) => {
        let newData = res1.concat(res2);
        newData.sort((a, b) => {
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        });
        let featuredArray = [];

        newData.find((item) => {
          if (item.collectionType === "recrooms" && item.featured === true) {
            featuredArray.push(item);
          } else return null;
        });

        newData.find((item) => {
          if (item.collectionType === "podcast") {
            item.new = true;
            return featuredArray.push(item);
          } else return null;
        });

        newData.find((item) => {
          if (item.collectionType === "recrooms") {
            item.new = true;
            return featuredArray.push(item);
          } else return null;
        });

        newData.find((item) => {
          if (item.collectionType === "podcast" && item.featured === true) {
            return featuredArray.push(item);
          } else return null;
        });

        setData(featuredArray);
        setLoading(false);
      })

    );

  }, [list1, list2, setLoading]);

  return (
    <motion.ul className="list-container bg-black " style={{ padding: "0" }}>
      {loading ? (
        <li><CardPlaceholder /></li>
      ) : (

          data.map((item, i) => {
            return (
              <motion.li
                custom={i}
                animate="visible"
                variants={variants}
                initial="hidden"
                key={item.id}
              >
                <Card item={item} key={item.id} />
              </motion.li>
            );
          })
        )}
    </motion.ul>
  );
};

export default CardList;
