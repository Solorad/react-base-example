import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart";

const ProductList = ({ products, addItemToCart }) => {
  return (
    <div>
      {products.map(item => {
        <div key={item.id}>
          <span>{item.provider}</span>
          <span>{item.title}</span>
          <span>{item.price$} $</span>
          <span>{item.weight}</span>
          <button onClick={() => addItemToCart(item)} />
        </div>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.items
  };
};

export default connect(mapStateToProps, { addItemToCart })(ProductList);
