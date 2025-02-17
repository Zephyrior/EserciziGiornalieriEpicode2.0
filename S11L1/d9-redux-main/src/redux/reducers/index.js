const initialState = {
  main: {
    favourites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        main: {
          ...state.main,
          favourites: [...state.main.favourites, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
