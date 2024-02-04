import { configureStore } from "@reduxjs/toolkit";
import clienteReducer from "./redux/Reducer/clienteReducer";

export const store = configureStore({
  reducer: {
    client: clienteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
