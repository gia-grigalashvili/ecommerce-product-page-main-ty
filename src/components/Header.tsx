import React, { useState } from "react";
import styled from "styled-components";
import Burger from "/public/images/icon-menu.svg";
import Logo from "/public/images/logo.svg";
import cart from "/public/images/icon-cart.svg";
import profile from "/public/images/image-avatar.png";
import Close from "/public/images/icon-close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderDiv isOpen={isOpen}>
      <Section1>
        <img className="burger" src={Burger} alt="Menu" onClick={toggleMenu} />
        <img src={Logo} alt="Logo" />
      </Section1>
      <Nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className={`ul ${isOpen ? "open" : ""}`}>
          <img src={Close} alt="Close" onClick={toggleMenu} />
          <div className="info">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </ul>
      </Nav>
      <Section2>
        <img src={cart} alt="Cart" />
        <img className="profile" src={profile} alt="Profile" />
      </Section2>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  position: relative;
  position: ${(props) => (props.isOpen ? "fixed" : "static")};
  width: 100%;
`;

const Section1 = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .burger {
    width: 16px;
    height: 15px;
    cursor: pointer;
  }
`;

const Section2 = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .profile {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
`;

const Nav = styled.nav`
  z-index: 99;
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 60%;
  height: 100vh;
  background: #fff;

  transform: translateX(-100%);
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;

  @media (min-width: 740px) {
    border-bottom: 1px solid gray;
    border-bottom: unset;
    padding: 40px;
    z-index: 99;
  }

  &.open {
    transform: translateX(0);
    z-index: 10;
    position: fixed;
  }

  ul {
    list-style-type: none;
    gap: 20px;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    margin: 0;

    img {
      width: 17px;
      height: 17px;
      margin-top: 20px;
      cursor: pointer;
    }

    .info {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  li {
    color: #1d2026;
    cursor: pointer;
    font-family: "Kumbh Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
    @media (min-width: 770px) {
      font-size: 11px;
      color: #acacac;
    }
  }
`;

export default Header;
