import { configureStore } from "@reduxjs/toolkit";
import createCocktailSlice from "./feature/createCocktailSlice";

export default configureStore({
  reducer: {
    cocktailapp: createCocktailSlice,
  },
});
