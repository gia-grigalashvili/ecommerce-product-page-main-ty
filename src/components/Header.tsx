import React, { useState } from "react";
import styled from "styled-components";
import Burger from "/public/images/icon-menu.svg";
import Logo from "/public/images/logo.svg";
import cart from "/public/images/icon-cart.svg";
import profile from "/public/images/image-avatar.png";
import Close from "/public/images/icon-close.svg";
import Chose from "/public/images/image-product-1-thumbnail.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <HeaderDiv>
      <Section1>
        <img className="burger" src={Burger} alt="Menu" onClick={toggleMenu} />
        <img src={Logo} alt="Logo" />
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
      </Section1>
      <Section2>
        <div className="cart-container">
          <img src={cart} alt="Cart" onClick={toggleCart} />
          {isCartOpen && (
            <CartDetails>
              <h1>Cart</h1>
              <div className="information">
                <div className="inform">
                  <p>Your cart is empty.</p>
                </div>
                <Main2>
                  <Maindiv>
                    <img src={Chose} alt="Product Thumbnail" />
                    <div className="cardinfo">
                      <h2>Fall Limited Edition Sneakers</h2>
                      <div className="countt">
                        <p>$125.00 x 3</p>
                        <h6>$375.00</h6>
                      </div>
                    </div>
                  </Maindiv>
                  <div className="buttton">
                    <h2>Checkout</h2>
                  </div>
                </Main2>
              </div>
            </CartDetails>
          )}
        </div>
        <img className="profile" src={profile} alt="Profile" />
      </Section2>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  @media (min-width: 770px) {
    justify-content: space-evenly;
  }
`;

const Section1 = styled.div`
  display: flex;
  gap: 20px;

  align-items: center;

  @media (min-width: 770px) {
    gap: 50px;
  }

  .burger {
    width: 16px;
    height: 15px;
    cursor: pointer;

    @media (min-width: 770px) {
      display: none;
    }
  }
`;

const Section2 = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  align-items: center;
  @media (min-width: 770px) {
    gap: 40px;
  }
  .profile {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    @media (min-width: 770px) {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
    }
  }

  position: relative; /* Ensure cart details are positioned relative to Section2 */
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

  @media (min-width: 770px) {
    position: static;
    transform: translateX(0);
    width: auto;
    height: auto;
    background: transparent;
    flex-direction: row;
    align-items: center;
    display: flex;
  }

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

    @media (min-width: 770px) {
      flex-direction: row;
      padding: 0;
    }

    img {
      width: 17px;
      height: 17px;
      margin-top: 20px;
      cursor: pointer;

      @media (min-width: 770px) {
        display: none;
      }
    }

    .info {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (min-width: 770px) {
        margin-top: 0;
        flex-direction: row;
      }
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
      font-size: 15px;
      color: #69707d;
    }
  }
`;

const CartDetails = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 340px;
  height: 270px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 20;

  h1 {
    color: #1d2026;
    font-family: "Kumbh Sans";
    font-size: 16px;
    font-weight: 700;
  }

  .information {
    .inform {
      p {
        color: #69707d;
        text-align: center;
        font-family: "Kumbh Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        display: none;
      }
    }
  }
`;

const Maindiv = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  .cardinfo {
    display: flex;
    flex-direction: column;
    h2 {
      color: #69707d;
      font-family: "Kumbh Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
    .countt {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        color: #69707d;
        font-family: "Kumbh Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
      }
    }
  }
`;

const Main2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .buttton {
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    border-radius: 10px;
    background: #ff7e1b;
    cursor: pointer;
    h2 {
      color: #fff;
      font-family: "Kumbh Sans";
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export default Header;
