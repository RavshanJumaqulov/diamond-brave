import { GET_CATALOGS, GET_PRODUCTS } from "./action";

const initialState = {
  products: [],
  catalogs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      }
    }
    case GET_CATALOGS: {
      return {
        ...state,
        catalogs: action.payload,
      }
    }
    default: {
        return state
    }
  }
};

export default reducer
