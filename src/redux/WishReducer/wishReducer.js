import * as data from "./actionType";

const init = {
  wishlist: [],
};

const wishReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.ADD_TO_WISHLIST: {
      const isPresent = state.wishlist.find((item) => {
        return item.id === payload.id;
      });
      let newCart;
      if (isPresent) {
        newCart = state.wishlist.map((item) => {
          if (item.id === payload.id) {
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
        newCart = [...state.wishlist, newPayload];
      }
      return { ...state, wishlist: newCart };
    }
    case data.REMOVE_TO_WISHLIST: {
      let blankTheWishlist = state.wishlist.filter((item) => {
        return !(item.id === payload.id);
      });
      return { ...state, wishlist: blankTheWishlist };
    }
    default: {
      return state;
    }
  }
};
export { wishReducer };
