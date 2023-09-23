import {
  GET_BEST_NEWS,
  GET_BEST_NEW_WITH_ID,
  GET_CATALOGS,
  GET_NEWS,
  GET_NEWS_LENGTH,
  GET_NEWS_NEXT_PAGE,
  GET_NEW_WITH_ID,
  GET_PHOTO_GALLARY,
  GET_PHOTO_GALLARY_LENGTH,
  GET_PHOTO_GALLARY_NEXT_PAGE,
  GET_PRODUCTS,
  UPDATE_BEST_VIEWS,
  UPDATE_VIEWS,
} from "./action";

const initialState = {
  products: [],
  catalogs: [],
  news: {},
  bestNews: [],
  photoGallary: {},
  photoGallaryLength: 0,
  newsLength: 0,
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
      const data = { ...state.news };
      data["page_1"] = action.payload;
      return {
        ...state,
        news: data,
      };
    }
    case GET_NEWS_LENGTH: {
      return {
        ...state,
        newsLength: action.payload,
      };
    }
    case GET_NEWS_NEXT_PAGE: {
      const data = { ...state.news };
      data[`page_${action.payload.page}`] = action.payload.value;
      return {
        ...state,
        news: data,
      };
    }
    case GET_PHOTO_GALLARY: {
      const data = { ...state.photoGallary };
      data["page_1"] = action.payload;
      return {
        ...state,
        photoGallary: data,
      };
    }
    case GET_PHOTO_GALLARY_LENGTH: {
      return {
        ...state,
        photoGallaryLength: action.payload,
      };
    }
    case GET_PHOTO_GALLARY_NEXT_PAGE: {
      const data = { ...state.photoGallary };
      data[`page_${action.payload.page}`] = action.payload.value;
      return {
        ...state,
        photoGallary: data,
      };
    }
    case GET_NEW_WITH_ID: {
      const data = { ...state.news };
      if (!data[action.payload.page]) {
        data[action.payload.page] = [];
      }
      data[action.payload.page] = [
        ...data[action.payload.page].filter(
          (el) => el.id !== action.payload.value.id
        ),
        action.payload.value,
      ];
      return {
        ...state,
        news: data,
      };
    }

    case GET_BEST_NEWS: {
      return {
        ...state,
        bestNews: action.payload,
      };
    }

    case GET_BEST_NEW_WITH_ID: {
      if (state.bestNews.length == 0) {
        return {
          ...state,
          bestNews: [action.payload],
        };
      } else {
        return {
          ...state,
          bestNews: [
            ...state.bestNews.filter((el) => el.id !== action.payload.id),
            action.payload,
          ],
        };
      }
    }

    case UPDATE_BEST_VIEWS: {
      return {
        ...state,
        bestNews: [
          ...state.bestNews.filter((el) => el.id !== action.payload.id),
          action.payload.data,
        ],
      };
    }

    case UPDATE_VIEWS: {
      const data = { ...state.news };
      data[action.payload.page] = [
        ...data[action.payload.page].filter(
          (el) => el.id !== action.payload.id
        ),
        action.payload.data,
      ];
      return {
        ...state,
        news: data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
