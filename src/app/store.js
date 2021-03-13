import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Slice/appSlice";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
