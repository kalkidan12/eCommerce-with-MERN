import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const Store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
Store.getState();
export default Store;
