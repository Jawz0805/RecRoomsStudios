import React from "react";
import ReactMarkdown from "react-markdown";
import "./_TextBox.scss";

const TextBox = ({ title, description }) => {
  function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
  }
  return (
    <div className="text-container">
      {title && <h1 className="title-text">{title}</h1>}
      {description && (
        <ReactMarkdown source={description} className="markdown-black" renderers={{ link: LinkRenderer }} />
      )}
    </div>
  );
};

export default TextBox;
