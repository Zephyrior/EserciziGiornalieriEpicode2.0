import { ADD_FAVOURITES, REMOVE_FAVOURITE } from "../actions";

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites.slice(0, action.payload), ...state.favourites.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};
export default favouritesReducer;
