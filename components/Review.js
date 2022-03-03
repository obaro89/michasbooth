import React from "react";
import styled from "styled-components";
import photo from "../public/img/photo.jpg";
import Rating from "./Rating";
import Avatar from "@mui/material/Avatar";

const Review = ({ review }) => {
  const { name, rating, text, title, location } = review;
  return (
    <ReviewCard>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewText>{text}</ReviewText>
      <Avatar alt={name} src={photo.src} sx={{ width: 56, height: 56 }} />
      <Reviewer>
        <ReviewerDetails>
          <ReviewerName>{name}</ReviewerName>
          <ReviewerLocation>{location}</ReviewerLocation>
          <Rating rating={rating} />
        </ReviewerDetails>
      </Reviewer>
    </ReviewCard>
  );
};

export default Review;

const ReviewCard = styled.div`
  width: 25%;
  margin: 5px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  padding: 0 10px 0 10px;
  border: 1px solid #efefef;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const ReviewTitle = styled.h3`
  font-weight: 600;
  color: black;
  margin: 0;
  padding: 5px;
  text-align: center;
`;

const ReviewText = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
  align-self: center;
  line-height: 1.5;
`;

const Reviewer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
`;

const ReviewerLocation = styled.p`
  font-size: 10px;
  margin: 0;
  text-align: center;
  align-self: center;
`;
const ReviewerName = styled.p`
  font-size: 12px;
  padding: 5px;
  margin: 0;
  text-align: center;
  align-self: center;
`;

const ReviewerDetails = styled.p`
  margin-left: 5px;
  margin: 0;
  text-align: center;
  align-self: center;
`;
