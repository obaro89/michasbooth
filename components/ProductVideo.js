import React from "react";

const ProductVideo = () => {
  return (
    <div className="productvideo">
      <iframe
        width={`100%`}
        height="315"
        src="https://www.youtube.com/embed/HqUZgLUqi1s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ProductVideo;
