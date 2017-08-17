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
          <span
            className="minus-col"
            onClick={() => updateCartItem(cartItems, item, -1)}
          >
            <i className="fa fa-minus icon" aria-hidden="true" />
          </span>
        </div>
      </UpdateNumTd>
      <td>
        <ImageDiv>
          <i className="fa fa-leaf fa-lg" aria-hidden="true" />
          <span className="num">{cartItem.quantity} qty.</span>
        </ImageDiv>
      </td>
      <td>
        <InfoDiv>
          <div className="info-row"><span>{item.provider}</span></div>
          <div className="info-row title"><span><b>{item.title}</b></span></div>
          <div>
            <span><b>{priceFormatter(item.price$)}</b></span>
            {" "}
            -
            {" "}
            <span>{item.weight}</span>
          </div>
        </InfoDiv>
      </td>
      <RemoveTd>
        <span onClick={() => removeCartItem(cartItems, item)}>
          <i className="fa fa-trash-o fa-lg icon" aria-hidden="true" />
        </span>
      </RemoveTd>
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
      text-align: center;
   }
`;

const RemoveTd = styled.td`
  border-left: 1px solid #969494;
  text-align: center;
`;

const ImageDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    
    .num {
      margin-top: 5px;
      font-size: 12px;
    }
`;

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    
    .info-row {
      text-transform: uppercase;
    }
    
    .title {
      font-size: 20px;
    }
`;

CartRow.propTypes = {
  cartItem: PT.object.isRequired,
  cartItems: PT.array.isRequired,
  updateCartItem: PT.func.isRequired,
  removeCartItem: PT.func.isRequired
};

export default CartRow;
