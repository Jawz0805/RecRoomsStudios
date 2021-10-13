import React from "react";
import "./_TitleText.scss";

const TitleText = ({ text }) => {
  return (
    <div className="background">
      <h1 className="title">{text}</h1>
    </div>
  );
};

export default TitleText;
