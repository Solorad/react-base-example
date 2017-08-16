import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <span className="header__left">
        <i className="fa fa-align-justify" aria-hidden="true"></i>
      </span>
      <span className="header__right">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <i className="fa fa-tasks" aria-hidden="true"></i>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </span>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  margin: -10px -10px 0 -10px;
  background: #669e3a;
  display: flex;
  justify-content:space-between;

& .form_submit_button:hover:enabled {
  color: #FFF;
  text-decoration: none;
  background: #DA4300;
}
`;


export default Header;