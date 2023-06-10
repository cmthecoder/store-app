// To create a slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload
    }
  }
})

// functions
export const {fetchProducts} = productSlice.actions
// gets the state
export default productSlice.reducer

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products")
      const result = await data.json()
      dispatch(fetchProducts(result))
  }
}