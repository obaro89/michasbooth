import React from "react";
import HeadingTagSmall from "./HeadingTagSmall";
import VerifiedIcon from "@mui/icons-material/Verified";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const CustomersReviews = () => {
  return (
    <div className="customers-reviews">
      <Title>
        <VerifiedIcon sx={{ color: "#7851A9" }} />
        <HeadingTagSmall
          title={"Verified Customers Reviews "}
          style={{
            fontSize: 12,
            fontFamily: "Montserrat",
            color: "#8a8a8a",
            fontWeight: 600,
          }}
        />
      </Title>

      <div className="margin-top">
        <ProgressBar color={`#31B653`} percentage={75} level={5} />
        <ProgressBar color={`#71d045`} percentage={15} level={4} />
        <ProgressBar color={`#F6D757`} percentage={5} level={3} />
        <ProgressBar color={`#FAB753`} percentage={3} level={2} />
        <ProgressBar color={`#F17A55`} percentage={2} level={1} />
      </div>

      <ViewReview>
        <button className="reviewbtn">View reviews</button>
      </ViewReview>
    </div>
  );
};

export default CustomersReviews;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const ViewReview = styled.div`
  display: flex;
  /* align-items: flex-start; */
  justify-content: end;
  margin-top: 20px;

  & button {
    border: none;
    background-color: #7851a9;
    color: white;
    cursor: pointer;
    font-weight: 600;
    padding: 15px;
  }
`;
