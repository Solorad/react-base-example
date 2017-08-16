import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-icon">
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </div>
      <div className="right-icons">
        <span className="header-icon">
          <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
        </span>
        <span className="header-icon">
          <i className="fa fa-sliders fa-2x" aria-hidden="true"></i>
        </span>
        <span className="header-icon header-icon__cart">
          <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
          <span className="count">0</span>
        </span>
      </div>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  margin: -10px -10px 0 -10px;
  background: #669e3a;
  display: flex;
  justify-content:space-between;
  padding: 15px 15px 15px 15px;
  color: #fffefc;
  
  & .header-icon {
    margin-right: 25px;
    cursor: pointer
  }
  
  & .header-icon:hover {
    color: #e6e6e6;
  }
  
  .right-icons {
    display: flex;
  }
  
  .count {
    display: block;
    background: #d91700;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    margin: 0px auto;
  }
  
  .header-icon__cart {
    display: flex;
  }
  
  .count {
    margin: -3px 0 0 -5px;
  }
`;


export default Header;