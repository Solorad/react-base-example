import React from "react";
import PT from "prop-types";
import { priceFormatter } from "src/utils/numeralFormats";
import styled from "styled-components";

const CartRow = ({ cartItems, cartItem, updateCartItem, removeCartItem }) => {
  const item = cartItem.item;
  return (
    <tr>
      <UpdateNumTd>
        <div>
          <span
            className="plus-col"
            onClick={() => updateCartItem(cartItems, item, 1)}
          >
            <i className="fa fa-plus icon" aria-hidden="true" />
          </span>
          <span className="minus-col" onClick={() => updateCartItem(cartItems, item, -1)}
          >
            <i className="fa fa-minus icon" aria-hidden="true" />
          </span>
        </div>
      </UpdateNumTd>
      <td>
        <i className="fa fa-leaf fa-lg" aria-hidden="true" />
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
        <span onClick={() => removeCartItem(cartItems, item)}>
          <i className="fa fa-trash-o fa-lg icon" aria-hidden="true" />
        </span>
      </td>
    </tr>
  );
};

const UpdateNumTd = styled.td`
  border-right: 1px solid #969494;
  padding: 0;
  
  div {
    display: flex;
    flex-direction: column;
  }
    
   .plus-col {
      margin: 0 -10px;
      border-bottom: 1px solid #969494;
      text-align: center;
      padding-bottom: 10px;
   }
   
   .minus-col {
      margin-top: 10px;
   }
`;

CartRow.propTypes = {
  cartItem: PT.object.isRequired,
  cartItems: PT.array.isRequired,
  updateCartItem: PT.func.isRequired,
  removeCartItem: PT.func.isRequired
};

export default CartRow;
