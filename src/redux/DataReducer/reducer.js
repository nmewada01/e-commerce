import * as data from "./actionType";

const init = {
  products: [],
  isLoading: false,
  isError: false,
};

const dataReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_DATA_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_DATA_S: {
      return {
        ...state,
        isLoading: false,
        isError:false,
        products: payload,
      };
    }
    case data.GET_DATA_F: {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
export { dataReducer };
