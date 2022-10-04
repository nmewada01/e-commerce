import * as data from "./actionType";

const init = {
  mensD: [],
  womensD: [],
  shoesD: [],
  homeD: [],
  isLoading: false,
  isError: false,
};

const pagesReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_MENS_DATA_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_MENS_DATA_S: {
      return {
        ...state,
        isLoading: false,
        mensD: payload,
      };
    }
    case data.GET_HOMEDATA_S: {
      return {
        ...state,
        isLoading: false,
        homeD: payload,
      };
    }
    case data.GET_WOMENS_DATA_S: {
      return {
        ...state,
        isLoading: false,
        womensD: payload,
      };
    }
    case data.GET_SHOES_DATA_S: {
      return {
        ...state,
        isLoading: false,
        shoesD: payload,
      };
    }
    case data.GET_MENS_DATA_F: {
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
export { pagesReducer };
