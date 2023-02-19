import {configureStore} from "@reduxjs/toolkit";
import drawerSlice from "redux/reducers/drawerSlice";

//Main redux state store
export const store = configureStore({
   reducer:{
      drawer: drawerSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
});

export type RootState = ReturnType<typeof store.getState>