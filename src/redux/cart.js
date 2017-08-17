import update from "immutability-helper";

const UPDATE_CART = "UPDATE_CART";

const initValues = {
  cartItems: [],
};

export default function cartReducer(state = initValues, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
}

export function updateCartItem(cartItems, item, quantity) {
  const rowIndex = cartItems.findIndex(c => c.id === item.id);
  if (rowIndex >= 0) {
    // item already present
    const newItemQuantity = cartItems[rowIndex].quantity + quantity;
    if (newItemQuantity <= 0) {
      return removeCartItem(cartItems, item);
    }
    return {
      type: UPDATE_CART,
      cartItems: update(cartItems, {
        [rowIndex]: {
          quantity: { $set: cartItems[rowIndex].quantity + quantity }
        }
      })
    };
  }
  return {
    type: UPDATE_CART,
    cartItems: update(cartItems, {
      $push: [
        {
          item: item,
          quantity,
          id: item.id
        }
      ]
    })
  };
}

export function removeCartItem(cartRows, item) {
  return {
    type: UPDATE_CART,
    cartItems: cartRows.filter(c => c.id !== item.id)
  };
}
