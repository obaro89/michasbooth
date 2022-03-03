import styled from "styled-components";
import React from "react";

const ProgressBar = ({ color, percentage, level }) => {
  const width = percentage + "%";
  return (
    <ProgressBarContainer>
      <span className="level">{level}</span>
      <Progress>
        <ProgressInner
          style={{ backgroundColor: color, width }}
        ></ProgressInner>
      </Progress>
      <span className="percentage">{percentage}%</span>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .level {
    font-weight: 800;
    color: #8a8a8a;
    min-width: 20px;
    max-width: 20px;
  }

  & .percentage {
    font-weight: bolder;
    color: #8a8a8a;
    min-width: 20px;
    max-width: 20px;
  }
`;

const Progress = styled.div`
  width: 100%;
  background-color: #f3f2f9;
  height: 15px;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  flex-basis: 1;
  margin-right: 5px;
  margin-left: 10px;
`;

const ProgressInner = styled.div`
  height: 15px;
  width: 50%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
`;
