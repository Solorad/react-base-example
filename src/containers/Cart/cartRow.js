import React from "react";
import PT from "prop-types";
import { priceFormatter } from "src/utils/numeralFormats";

const CartRow = ({ cartItems, item, updateCartItem, removeCartItem }) => {
  return (
    <tr>
      <td>
        <div className="update-num">
          <span
            className="update-col"
            onClick={() => updateCartItem(cartItems, item, 1)}
          >
            <i className="fa fa-plus fa-lg" aria-hidden="true" />
          </span>
          <span
            className="update-col"
            onClick={() => updateCartItem(cartItems, item, 1)}
          >
            <i className="fa fa-minus fa-lg" aria-hidden="true" />
          </span>
        </div>
      </td>
      <td>
        <i className="fa fa-leaf fa-3x" aria-hidden="true" />
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
        <button onClick={() => removeCartItem(cartItems, item)}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

CartRow.propTypes = {
  item: PT.object.isRequired,
  cartItems: PT.array.isRequired,
  updateCartItem: PT.func.isRequired,
  removeCartItem: PT.func.isRequired
};

export default CartRow;
