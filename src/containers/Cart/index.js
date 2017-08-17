import React from "react";
import { Container } from "src/components";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import ProductList from "./productList";
import CartRow from "./cartRow";
import { updateCartItem, removeCartItem } from "src/redux/cart";
import { priceFormatter } from "src/utils/numeralFormats";

const Cart = ({ cartItems, updateCartItem, removeCartItem }) => {
  return (
    <div>
      <Helmet title="Cart" />
      <Container>
        <ProductList />
        <div className="text-center">
          <table>
            <tbody>
              {cartItems.map(cartItem => {
                const item = cartItem.item;
                return (
                  <CartRow
                    key={item.id}
                    item={item}
                    cartItems={cartItems}
                    updateCartItem={updateCartItem}
                    removeCartItem={removeCartItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, { updateCartItem, removeCartItem })(
  Cart
);
