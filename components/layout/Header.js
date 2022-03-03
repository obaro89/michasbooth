import React from "react";
import styled from "styled-components";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../../public/img/michaslogo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <HeaderBar>
        <p className="phone">
          <PhoneAndroid fontSize="small" />
          <span>+4470203884884</span>
        </p>
        <p className="email">
          <EmailIcon fontSize="small" />
          <span>order@michasbooth.com</span>
        </p>
      </HeaderBar>

      <Menu>
        <Hamburger fontSize="large" />
        <Logo src={logo} />
        <Link href="/cart" passHref>
          <Cart>
            <CartIcon fontSize="large" />
            <span className="cartno">30</span>
          </Cart>
        </Link>
      </Menu>
    </div>
  );
};

export default Header;

const Menu = styled.div`
  height: 60px;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  padding: 0 5px 0 5px;
`;

const Hamburger = styled(MenuOutlinedIcon)`
  font-size: 52px;
  color: #404040;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 60px;
  width: 220px;
`;

const CartIcon = styled(ShoppingCartOutlinedIcon)`
  position: relative;
  font-size: 48px;
  color: #404040;
  margin-top: 4px;
  cursor: pointer;
`;

const Cart = styled.div`
  & .cartno {
    position: absolute;
    right: 9px;
    top: 28px;
    height: 25px;
    width: 25px;
    background-color: #f11515;
    border-radius: 50%;
    border: 3px solid #ffffff;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 10px;
    padding: 2px;
    cursor: pointer;
  }
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: #7851a9;
  height: 20px;
  padding: 2px 5px 2px 5px;

  & .phone,
  .email {
    color: white;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
`;

const PhoneAndroid = styled(PhoneAndroidIcon)`
  padding: 2px;
`;
const EmailIcon = styled(MailOutlinedIcon)`
  padding: 2px;
`;
