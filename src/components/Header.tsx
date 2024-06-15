import React from "react";
import styled from "styled-components";
import Burger from "/public/images/icon-menu.svg";
import Logo from "/public/images/logo.svg";
function Header() {
  return (
    <Headerdiv>
      <div>
        <img src={Burger} alt="" />
        <img src={Logo} alt="" />
      </div>
    </Headerdiv>
  );
}
const Headerdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Header;
