import { configureStore } from "@reduxjs/toolkit";
import joinReducer from "./features/join/joinSlice";

export default configureStore({
  reducer: {
    join: joinReducer,
  },
});
