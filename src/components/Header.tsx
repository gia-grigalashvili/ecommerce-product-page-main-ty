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
    <HeaderDiv>
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
  z-index: 10; /* Ensure nav stays above the header and other content */

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  background: #fff;
  transform: translateX(-100%);
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &.open {
    transform: translateX(0);
  }

  ul {
    list-style-type: none;
    gap: 20px;
    display: flex;
    flex-direction: column;
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
    font-weight: 700;
    line-height: 26px;

    @media (min-width: 770px) {
      font-size: 11px;
      color: #acacac;
    }
  }
`;

export default Header;
