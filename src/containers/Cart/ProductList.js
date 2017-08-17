import React from "react";
import { connect } from "react-redux";
import { updateCartItem } from "src/redux/cart";
import { priceFormatter } from "src/utils/numeralFormats";

const ProductList = ({ products, cartItems, updateCartItem }) => {
  return (
      <table>
        <tbody>
      {products.map(item => {
        return <tr key={item.id} >
          <td>{item.provider}</td>
          <td>{item.title}</td>
          <td>{priceFormatter(item.price$)}</td>
          <td>{item.weight}</td>
          <td><span className="icon" onClick={() => updateCartItem(cartItems, item, 1)} >
            <i className="fa fa-plus fa-lg" aria-hidden="true" />
          </span></td>
        </tr>;
      })}
        </tbody>
      </table>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.items,
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, { updateCartItem })(ProductList);
