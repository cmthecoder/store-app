// To create a slice
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // What are the things I want to do
    add(state, action){
      // State update
      state.push(action.payload)
    }
  }
})

// functions
export const {add} = cartSlice.actions
// gets the state
export default cartSlice.reducer