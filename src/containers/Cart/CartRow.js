import React from "react";
import PT from "prop-types";
import { priceFormatter } from "src/utils/numeralFormats";
import styled from "styled-components";

const CartRow = ({ cartItems, cartItem, updateCartItem, removeCartItem }) => {
  const item = cartItem.item;
  return (
    <tr>
      <td>
        <UpdateNumDiv>
          <span
            className="update-col icon"
            onClick={() => updateCartItem(cartItems, item, 1)}
          >
            <i className="fa fa-plus fa-lg" aria-hidden="true" />
          </span>
          <span
            className="update-col icon"
            onClick={() => updateCartItem(cartItems, item, -1)}
          >
            <i className="fa fa-minus fa-lg" aria-hidden="true" />
          </span>
        </UpdateNumDiv>
      </td>
      <td>
        <i className="fa fa-leaf fa-2x" aria-hidden="true" />
        {cartItem.quantity} qty.
      </td>
      <td>
        <span>{item.provider}</span>
        <span><b>{item.title}</b></span>
        <span><b>{priceFormatter(item.price$)}</b></span>
        {" "}
        -
        {" "}
        <span>{item.weight}</span>
      </td>
      <td>
        <span className="icon" onClick={() => removeCartItem(cartItems, item)}>
          <i className="fa fa-trash-o fa-lg" aria-hidden="true" />
        </span>
      </td>
    </tr>
  );
};

const UpdateNumDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

CartRow.propTypes = {
  cartItem: PT.object.isRequired,
  cartItems: PT.array.isRequired,
  updateCartItem: PT.func.isRequired,
  removeCartItem: PT.func.isRequired
};

export default CartRow;
