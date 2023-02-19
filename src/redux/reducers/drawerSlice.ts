import { RootState } from "redux/store";
import {createSlice} from "@reduxjs/toolkit";

// Provides a global state for the context menu
export const drawerSlice = createSlice({
   name: "drawer",
   initialState: {
      scanner: false,
      settings: false,
      profile: false,
      store: false,
   },
   reducers: {
      // Sets the context menu to active and sets the position
      setScanner: (state, action) => {
         state.scanner = action.payload;
      },
   }
});

export const { setScanner } = drawerSlice.actions;

export const selectScanner = (state: RootState) => state.drawer.scanner;

export default drawerSlice.reducer;