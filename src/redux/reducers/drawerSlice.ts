import { RootState } from "../store"
import {createSlice} from "@reduxjs/toolkit";

// Provides a global state for the context menu
export const drawerSlice = createSlice({
   name: "drawer",
   initialState: {
      scanner: false,
      settings: false,
      profile: false,
      store: false,
      message: false,
   },
   reducers: {
      // Sets the context menu to active and sets the position
      setScanner: (state, action) => {
         state.scanner = action.payload;
      },
      setMessages: (state, action) => {
         state.message = action.payload;
      }
   }
});

export const { setScanner, setMessages } = drawerSlice.actions;

export const selectScanner = (state: RootState) => state.drawer.scanner;
export const selectMessages = (state: RootState) => state.drawer.message;

export default drawerSlice.reducer;