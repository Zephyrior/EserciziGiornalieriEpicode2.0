import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import fetchJobsReducer from "../reducers/fetchJobsReducers";
import queryReducer from "../reducers/queryReducers";
// import mainReducer from "../reducers";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: fetchJobsReducer,
  query: queryReducer,
});

const store = configureStore({
  // reducer: mainReducer,
  reducer: rootReducer,
});
export default store;
