import React from "react";
import styled from "styled-components";
import tklogo from "../../public/svgs/tiktok.svg";
import ytlogo from "../../public/svgs/youtube.svg";
import fblogo from "../../public/svgs/facebook.svg";
import pplogo from "../../public/svgs/paypal.svg";
import visalogo from "../../public/svgs/visa.svg";
import mslogo from "../../public/svgs/master.svg";
import instalogo from "../../public/svgs/instagram.svg";
import Image from "next/image";

const Footer = () => {
  let width = 50;
  let height = 50;
  return (
    <FooterContainer>
      <FooterContent className="container contain">
        <div className="info flexitem">
          <h3>Michasbooth</h3>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="qklinks flexitem">
          <h3>Quick Links</h3>
          <ul>
            <li>Orders</li>
            <li>Payments and Shipping</li>
            <li>Delivery and Return</li>
          </ul>
        </div>
        <div className="social flexitem">
          <h3>Connect With Us</h3>
          <span>
            <Image src={instalogo.src} alt={""} width={width} height={height} />
            <Image src={fblogo.src} alt={""} width={width} height={height} />
            <Image src={tklogo.src} alt={""} width={width} height={height} />
            <Image src={ytlogo.src} alt={""} width={width} height={height} />
          </span>

          <span className="subscriber flexitem">
            <SubscribeInput placeholder="subscribe to our newsletter" />
            <Button>Subscribe</Button>
          </span>
        </div>
      </FooterContent>
      <FooterPayment>
        <Image src={visalogo.src} alt={""} width={width} height={height} />
        <Image src={pplogo.src} alt={""} width={width} height={height} />
        <Image src={mslogo.src} alt={""} width={width} height={height} />
      </FooterPayment>
      <FooterCopyright>
        &copy; 2022 All Rights Reserved. michasbooth.com
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & span {
    display: flex;
  }

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 4px;
  }

  & ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  & li {
    margin-bottom: 8px;
  }

  & .subscriber {
    margin-top: 30px;
  }
`;

const FooterPayment = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: 5px;

  & img {
    width: 80px;
    height: 80px;
  }
`;

const FooterCopyright = styled.div`
  height: 20px;
  background-color: #7851a9;
  text-align: center;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  color: white;
  padding: auto;
`;

const SubscribeInput = styled.input`
  width: 80%;
  min-width: 300px;
  height: 50px;
  background-color: #efefef;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  font-family: "Montserrat", sans-serif;
`;
const Button = styled.button`
  background-color: #c837ab;
  color: white;
  height: 50px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;
