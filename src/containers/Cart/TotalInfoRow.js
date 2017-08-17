import React from "react";
import PT from "prop-types";
import { priceFormatter } from "src/utils/numeralFormats";
import styled from "styled-components";

const TotalInfoRow = ({ cartItems }) => {
  const item = cartItem.item;
  return (
    <tr>
      <td>
        <div>
          Items total:
        </div>
        <div>
          Subtotal:
        </div>
        <div>
          Tax:
        </div>
        <div>
          Delivery Fee:
        </div>
        <div>
          Total: <b></b>
        </div>
      </td>
    </tr>
  );
};


TotalInfoRow.propTypes = {
  cartItems: PT.array.isRequired,
};

export default TotalInfoRow;
