import React from "react";
import PT from "prop-types";
import { priceFormatter } from "src/utils/numeralFormats";

const TotalInfoRow = ({ cartItems, deliveryFee }) => {
  let itemsTotal = 0;
  let subtotal = 0;
  cartItems.forEach(function(v) {
    itemsTotal += v.quantity;
    subtotal += v.quantity * v.item.price$;
  });
  const tax = 10.5 * subtotal / 100; // let tax is constant 10.5%
  const total = subtotal + tax + deliveryFee;

  return (
    <tr>
      <td>&nbsp;</td>
      <td>
        <span className="total-icon">
          <i className="fa fa-sticky-note-o fa-2x" aria-hidden="true" />
        </span>
      </td>
      <td>
        <span className="total-statistic">
          <div>
            Items total: {itemsTotal}
          </div>
          <div>
            Subtotal:{priceFormatter(subtotal)}
          </div>
          <div>
            Tax: {priceFormatter(tax)}
          </div>
          <div>
            Delivery Fee: {priceFormatter(deliveryFee)}
          </div>
          <div>
            Total: <b>{priceFormatter(total)}</b>
          </div>
        </span>
      </td>
      <td>&nbsp;</td>
    </tr>
  );
};

TotalInfoRow.propTypes = {
  cartItems: PT.array.isRequired,
  deliveryFee: PT.number.isRequired
};

export default TotalInfoRow;
