import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import bgImg from "../public/img/bgimg.jpg";

const Hero = () => {
  return (
    <HeroComponent>
      <HeroOverlay>
        <HeroContent className="container contain">
          <HeroMessage>Quality Products Quality You</HeroMessage>
          <HeroSearchBox>
            <HeroSearch
              placeholder="Search for your preferred item"
              className="search-input"
            />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </HeroSearchBox>
        </HeroContent>
      </HeroOverlay>
    </HeroComponent>
  );
};

export default Hero;

const HeroComponent = styled.div`
  width: 100%;
  height: 300px;
  background-color: azure;
  background-image: URL(${bgImg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
`;

const HeroOverlay = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const HeroMessage = styled.span`
  font-size: 34px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  font-weight: bolder;
  /* @media screen and (min-width: 480px) {
    padding: 25px;
  } */
`;

const HeroSearchBox = styled.div`
  height: 50px;
  width: 80%;
  max-width: 600px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;
const HeroSearch = styled.input`
  height: 50px;
  width: 70%;
  max-width: 600px;
  border: none;
  outline: none;
  padding: 0 10px 0 10px;
  font-size: 22px;
  flex: 1;
`;

const SearchButton = styled.button`
  color: white;
  font-weight: bolder;
  background-color: #7851a9;
  height: 100%;
  width: 50px;
  padding: 5px;
  border: none;
  margin: 0;
  cursor: pointer;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
