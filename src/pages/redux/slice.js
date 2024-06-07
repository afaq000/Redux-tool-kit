// pages/redux/slice.js
"use client"
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

const slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: { 
    adduser: (state, action) => {
      console.log(action, "action");
      const data = {
        id: nanoid(),
        name: action.payload
      };
      state.users.push(data);
    }
  }
});

export const { adduser } = slice.actions;
export default slice.reducer;
