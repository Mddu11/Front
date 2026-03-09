import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",

  initialState: {
    movies: []
  },

  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;

      if (state.movies.includes(id)) {
        state.movies = state.movies.filter((m) => m !== id);
      } else {
        state.movies.push(id);
      }
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;