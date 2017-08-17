import React from "react";
import { Container } from "src/components";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CartRow from "./CartRow";
import { updateCartItem, removeCartItem } from "src/redux/cart";
import styled from "styled-components";

const Cart = ({ cartItems, updateCartItem, removeCartItem }) => {
  return (
    <div>
      <Helmet title="Cart" />
      <Container>
        <StyledContainer>
          <ProductList />
          {cartItems && cartItems.length > 0
            ? <StyledCartTable>
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
              </StyledCartTable>
            : null}
        </StyledContainer>
      </Container>
    </div>
  );
};

const StyledContainer = styled.div`
  .icon {
    cursor: pointer;
    color: #669e3a;
  }
  .icon:hover {
     color: #578831;
  }
`;

const StyledCartTable = styled.table`
  margin-top: 40px;
  border: 1px solid #969494;
  border-collapse: collapse;
  width: 400px;
  
  td {
    border-bottom: 1px solid #969494;
    padding: 10px;
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
