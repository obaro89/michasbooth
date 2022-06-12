import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

//slices
import productsReducer from "./features/productSlice/productSlice";
import cartReducer from "./features/cartSlice/cartSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const productsPersistConfig = {
  key: "products",
  storage,
  keyPrefix: "redux-",
  whitelist: ["sortBy"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  keyPrefix: "redux-",
  whitelist: ["sortBy"],
};

const rootReducer = combineReducers({
  productsState: persistReducer(productsPersistConfig, productsReducer),
  cartState: persistReducer(cartPersistConfig, cartReducer),
});

export { rootPersistConfig, rootReducer };
