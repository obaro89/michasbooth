const generateRating = (rating) => {
  let arr = [];
  arr.length = 5;
  arr.fill("r");
  let ratingCount = 5 - rating;
  let count = 1;

  for (let i = 0; i < ratingCount; i++) {
    arr.splice(arr.length - count, 1, "x.");
    count++;
  }

  return arr;
};

export default generateRating;
