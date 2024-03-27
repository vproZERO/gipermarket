import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("products") || {
  products: [],
  likes: [],
  count: 0,
  liked: 0,
  totalPrice: 0,
  isAdded: false,
};


const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductCount: (state) => {
      return { ...state, count: state.products.length };
    },
    setLiked: (state) => {
      return { ...state, liked: state.likes.length };
        
    },
    setTotalPrice: (state) => {
      const newPrice = state.products.reduce((a, b) => {
        return a + Number(b.userPrice);
      }, 0);

      return { ...state, totalPrice: newPrice };
    },
    add: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }

      return state;
    },
    addToFavorites: (state, action) => {
      const product = state.likes.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          likes: [
            ...state.likes,
            {
              ...action.payload,
              isAdded: true,
            },
          ],
        };
      }
      return state;
    },
    toggleProduct: (state, action) => {
      if (action.payload.type === "increment") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: item.price * (item.userCount + 1).toFixed(2), // Преобразование строки обратно в число
            };
          }
          return item;
        });

        return { ...state, products: newProduct };
      }
      if (action.payload.type === "decrement") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id && item.userCount > 0) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: item.price * (item.userCount - 1).toFixed(2), // Преобразование строки обратно в число
            };
          }
          return item;
        });

        return { ...state, products: newProduct };
      }
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default cartReducer.reducer;

export const {
  setTotalPrice,
  add,
  toggleProduct,
  deleteItem,
  setProductCount,
  setLiked,
  addToFavorites,
} = cartReducer.actions;
