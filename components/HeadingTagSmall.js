import React from "react";

const HeadingTagSmall = ({ title, style = {} }) => {
  return (
    <h2 className="headtagSmall" style={style}>
      {title}
    </h2>
  );
};

export default HeadingTagSmall;
