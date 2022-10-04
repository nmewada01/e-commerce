import * as data from "./actionType";

const init = {
  cart: [],
};

const cartReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case data.ADD_TO_CART: {
      const isPresent = state.cart.find((item) => {
        return item.id === payload.id && item.size === payload.size;
      });
      let newCart;
      if (isPresent) {
        newCart = state.cart.map((item) => {
          if (item.id === payload.id && item.size === payload.size) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        let newPayload = {
          ...payload,
          qty: 1,
        };
        newCart = [...state.cart, newPayload];
      }
      return { ...state, cart: newCart };
    }

    case data.IN_QTY: {
      let newChangeCart = state.cart.map((item) => {
        if (item.id === payload.id && item.size === payload.size) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });

      return { ...state, cart: newChangeCart };
    }

    case data.DEC_QTY: {
      let newChangeCart = state.cart.map((item) => {
        if (item.id === payload.id && item.size === payload.size) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });

      return { ...state, cart: newChangeCart };
    }

    case data.REMOVE_QTY: {
      let blankTheCart = state.cart.filter((item) => {
        return !(item.size === payload.size && item.id === payload.id);
      });
      return { ...state, cart: blankTheCart };
    }
    case data.CLEAR_QTY: {
      return { ...state, cart: (state.cart = []) };
    }

    default:
      return state;
  }
};
export { cartReducer };
