import React, { Fragment } from "react";
import styled from "styled-components";
import Review from "./Review";
import HeadingTag from "./HeadingTag";

const reviews = [
  {
    name: "Osaretin Frank",
    rating: 4,
    text: "I am so pleased with the product. The hair treatment is superb",
    title: "Delivery was topnotch",
    location: "Canada",
  },
  {
    name: "Rhema Igbinobaro",
    rating: 5,
    text: "I am so pleased with the product. The hair treatment is superb",
    title: "Product was original",
    location: "Leicester",
  },
  {
    name: "Michel Banks",
    rating: 2,
    text: "It was slow to deliver but service was nice",
    title: "Delay in dispatching",
    location: "Lagos",
  },
  {
    name: "Jennifer Oladokun",
    rating: 3,
    text: "They delivered exactly as promised",
    title: "What you order is what you get",
    location: "USA",
  },
];

const Reviews = () => {
  return (
    <div className="review">
      <HeadingTag title="What are our Customers saying?" />
      <CustomersReviews>
        {reviews.map((review, idx) => (
          <Review key={idx} review={review} />
        ))}
      </CustomersReviews>
    </div>
  );
};

export default Reviews;

const CustomersReviews = styled.div`
  height: 280px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
`;
