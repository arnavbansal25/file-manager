import { configureStore, createReducer, createStore } from "@reduxjs/toolkit";
import myData from "../src/utils/dummy.json";

export const store = configureStore({
  // reducer: {
  //   data: state => {
  //     data: myData
  //   },
  // },
  // data: myData,
  reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
