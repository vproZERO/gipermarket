import {
  configureStore,
  isAnyOf,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import { saveState } from "../config/storage";
import cart from "./reducers/cart";
import {
  add,
  deleteItem,
  deleteLiked,
  setProductCount,
  setTotalPrice,
  addToFavorites,
  setLiked,
  toggleProduct,
} from "./reducers/cart";

const countMiddleware = createListenerMiddleware();

countMiddleware.startListening({
  matcher: isAnyOf(add, deleteItem, deleteLiked, toggleProduct , setLiked, addToFavorites ),
  effect: (_, api) => {
    api.dispatch(setProductCount());
    api.dispatch(setTotalPrice());
    api.dispatch(setLiked());
  },
});

export const store = configureStore({
  reducer: {
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countMiddleware.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState().cart);
});
