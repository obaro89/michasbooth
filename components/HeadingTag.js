import React from "react";

const HeadingTag = ({ title, style = {} }) => {
  return (
    <h2 className="headtag" style={style}>
      {title}
    </h2>
  );
};

export default HeadingTag;
