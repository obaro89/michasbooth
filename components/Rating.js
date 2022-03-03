import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import generateRating from "../utils/ratingGenerator";

function Rating({ rating, fontSize = 20 }) {
  let ratingArray = generateRating(rating);

  return (
    <span>
      {ratingArray.map((icon, idx) => {
        let ratingStar =
          icon === "r" ? (
            <StarIcon sx={{ fontSize, color: "#FFC107" }} key={idx} />
          ) : (
            <StarBorderIcon sx={{ fontSize, color: "#FFC107" }} key={idx} />
          );
        return ratingStar;
      })}
    </span>
  );
}

export default Rating;
