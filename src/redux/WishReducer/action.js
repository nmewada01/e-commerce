import * as types from "./actionType";

const addToWishList = (payload) => ({
  type: types.ADD_TO_WISHLIST,
  payload,
});
const removeWishList = (payload) => ({
  type: types.REMOVE_TO_WISHLIST,
  payload,
});
export { addToWishList, removeWishList };
