"use client"
const { configureStore } = require("@reduxjs/toolkit");
import reducer from "../redux/slice"
export const store=configureStore({
        reducer
})