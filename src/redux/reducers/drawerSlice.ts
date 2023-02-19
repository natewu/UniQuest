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
      data: {
         valid: "",
         points: "",
         description: "",
         image: "",

      }
   },
   reducers: {
      // Sets the context menu to active and sets the position
      setScanner: (state, action) => {
         state.scanner = action.payload;
      },
      setMessages: (state, action) => {
         state.message = action.payload;
      },
      setDataJSON(state, action) {
         state.data = action.payload;
      }
   }
});

export const { setScanner, setMessages, setDataJSON } = drawerSlice.actions;

export const selectScanner = (state: RootState) => state.drawer.scanner;
export const selectMessages = (state: RootState) => state.drawer.message;
export const selectData = (state: RootState) => state.drawer.data;

export default drawerSlice.reducer;