import React from "react";
import { Container } from "src/components";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CartRow from "./CartRow";
import { updateCartItem, removeCartItem } from "src/redux/cart";
import { priceFormatter } from "src/utils/numeralFormats";
import styled from "styled-components";

const Cart = ({ cartItems, updateCartItem, removeCartItem }) => {
  return (
    <div>
      <Helmet title="Cart" />
      <Container>
        <StyledContainer>
          <ProductList />
          <table>
            <tbody>
              {cartItems.map(cartItem => {
                return (
                  <CartRow
                    key={cartItem.id}
                    cartItem={cartItem}
                    cartItems={cartItems}
                    updateCartItem={updateCartItem}
                    removeCartItem={removeCartItem}
                  />
                );
              })}
            </tbody>
          </table>
        </StyledContainer>
      </Container>
    </div>
  );
};

const StyledContainer = styled.div`
  .icon {
    cursor: pointer;
    color: #669e3a;
    margin-left: 5px;
  }
  .icon:hover {
     color: #578831;
  }
  
  table {
    border: 1px solid #000;
  }
`;

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, { updateCartItem, removeCartItem })(
  Cart
);
