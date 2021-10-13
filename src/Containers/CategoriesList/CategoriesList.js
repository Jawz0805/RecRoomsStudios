import React, { useState, useEffect } from "react";
import "./_CategoriesList.scss";

const CategoriesList = ({
  categories,
  setTag,
  // tag,
  setData,
  shuffle,
  data,
  sortNewest,
  sortOldest,
  filterPodcast,
  filterRecRooms,
  filterAll,
  constData
}) => {
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("Newest First");
  const [filter, setFilter] = useState("All");



  useEffect(() => {
    const handleFilter = async () => {
      let newData
      if (filter === "All") {
        newData = await filterAll();

      } else if (filter === "Podcasts") {
        newData = await filterPodcast();

      } else if (filter === "Rec Rooms") {
        newData = await filterRecRooms();
      }
      if (newData !== undefined) {

        return newData
      }

    };
    const handleSort = async (array) => {
      let tempArray
      if (sort === "Oldest First") {
        tempArray = await sortOldest(array);
      } else if (sort === "Newest First") {
        tempArray = await sortNewest(array);
      } else if (sort === "Shuffle") {
        tempArray = await shuffle(array);
      }

      if (tempArray !== undefined) {

        return tempArray
      }
      return tempArray
    };

    return (

      handleFilter().then((res, err) => {
        if (res) {
          handleSort(res).then((res, err) => {
            if (res) {
              setData(res)
            }
          })
        }
      })

    )

  }, [sort, filter, genre]);

  //, shuffle, sortAll, sortNewest, sortOldest, sortPodcast, sortRecRooms

  const uniq = (a) => {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item !== ary[pos - 1];
    });
  };

  let tagsArray = [];
  if (data) {
    data.map((item, index) => {
      return item.tags.map((tag, i) => {
        return tagsArray.push(tag.tag);
      });
    });
    tagsArray = uniq(tagsArray);
  }

  return (
    <div className="categories-container">
      <div className="categories-list">
        <label htmlFor="sort">Sort By: </label>
        <select
          id="sort"
          name="sort"
          onChange={(value) => {
            setSort(value.target.value);
          }}

        >
          <option >Newest First</option>
          <option >Oldest First</option>
          <option>Shuffle</option>
        </select>
      </div>
      <div className="categories-list">
        <label htmlFor="filter">Filter By Series: </label>
        <select
          id="filter"
          name="filter"
          onChange={(value) => {
            setFilter(value.target.value)
          }}
        >
          <option>All</option>
          <option>Podcasts</option>
          <option>Rec Rooms</option>
        </select>
      </div>

      <div className="categories-list">
        <label htmlFor="genre" >Filter By Genre: </label>
        <select
          id="genre"
          type="select"
          required
          name="genre"
          placeholder="Genre 1"
          onChange={(value) => {
            setTag(value.target.value);
            setGenre(value.target.value);
          }}
        >
          <option value="All">All</option>
          {categories ?
            categories.map((tag, index) => {
              if (tagsArray.includes(tag.tag)) {
                return (
                  <option id={tag.id} key={tag.id}>
                    {tag.tag}
                  </option>
                );
              } else return null;
            }) : <option></option>}

        </select>
      </div>

    </div>
  );
};

export default CategoriesList;
