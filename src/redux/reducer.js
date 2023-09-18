import {
  GET_CATALOGS,
  GET_NEWS,
  GET_NEW_WITH_ID,
  GET_PRODUCTS,
  UPDATE_VIEWS,
} from "./action";

const initialState = {
  products: [],
  catalogs: [],
  news: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case GET_CATALOGS: {
      return {
        ...state,
        catalogs: action.payload,
      };
    }
    case GET_NEWS: {
      const data = [...state.news, ...action.payload].filter(
        (obj, index, self) => {
          return index === self.findIndex((o) => o.id === obj.id);
        }
      );
      return {
        ...state,
        news: data,
      };
    }
    case GET_NEW_WITH_ID: {
      if (state.news.filter((el) => el.id == action.payload.id).length == 0) {
        return {
          ...state,
          news: [...state.news, action.payload],
        };
      }
    }
    case UPDATE_VIEWS: {
      const data = {...state.news.find(el => el.id == action.payload.id), views: action.payload.view}
      return{
        ...state,
        news: [...(state.news.filter(el => el.id !== action.payload.id)), data]
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
