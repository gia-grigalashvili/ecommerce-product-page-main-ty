import styled from "styled-components";
import Minus from "/public/images/icon-minus.svg";
import Plus from "/public/images/icon-plus.svg";
import Card from "/public/images/icon-cart.svg";
import { useState } from "react";

function Information({ setcount, count }) {
  const handclick = () => {
    setcount(count + 1);
  };

  const handclick2 = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <Infro>
      <p>Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <h5>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </h5>

      <Money>
        <div className="inform">
          <h1>$125.00</h1>
          <h5>50%</h5>
        </div>
        <p>$250.00</p>
      </Money>
      <COUNTADDCARD>
        <Counterdiv>
          <img onClick={handclick2} className="minus" src={Minus} alt="" />
          <h3>{count}</h3>
          <img onClick={handclick} className="plus" src={Plus} alt="" />
        </Counterdiv>
        <ADDCARD>
          <img src={Card} alt="" />
          <h1>Add to cart</h1>
        </ADDCARD>
      </COUNTADDCARD>
    </Infro>
  );
}

const Infro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  padding: 20px;
  @media (min-width: 770px) {
    max-width: 470px;
  }
  p {
    color: #ff7e1b;
    font-family: "Kumbh Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.846px;
    text-transform: uppercase;
    @media (min-width: 770px) {
      font-size: 13px;
    }
  }
  h1 {
    color: #1d2026;
    font-family: "Kumbh Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 114.286% */
    @media (min-width: 770px) {
      font-size: 44px;

      line-height: 48px; /* 109.091% */
    }
  }
  h5 {
    color: #69707d;
    font-family: "Kumbh Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    @media (min-width: 770px) {
      font-size: 16px;

      line-height: 26px; /* 162.5% */
    }
  }
`;

const Money = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 770px) {
    flex-direction: column;
    align-items: unset;
    gap: 20px;
  }
  .inform {
    display: flex;
    align-items: center;
    gap: 20px;
    h1 {
      color: #1d2026;
      font-family: "Kumbh Sans";
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h5 {
      color: #ff7e1b;
      font-family: "Kumbh Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  p {
    color: #b6bcc8;
    font-family: "Kumbh Sans";
    text-decoration: line-through;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    text-decoration-line: strikethrough;
  }
`;
const Counterdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  background: #f6f8fd;

  width: 327px;
  height: 56px;

  .plus {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .minus {
    width: 12px;
    height: 3.332px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const ADDCARD = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 327px;
  gap: 15px;
  height: 56px;
  background: #ff7e1b;
  cursor: pointer;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  img {
    width: 17.457px;
    height: 16px;
    flex-shrink: 0;
  }
  h1 {
    color: #fff;
    font-family: "Kumbh Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const COUNTADDCARD = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 770px) {
    flex-direction: row;
    align-items: center;
  }
`;
export default Information;
