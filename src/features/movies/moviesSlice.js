import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    loadingStatus: "loading",
  },
  reducers: {
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setLoadingToSucces: (state) => {
      state.loadingStatus = "success";
    },
    setLoadingToFail: (state) => {
      state.loadingStatus = "fail";
    },
    fetchMovies: () => {},
    fetchGenres: () => {},
  },
});

export const {
  setMovies,
  setLoadingToSucces,
  setLoadingToFail,
  setGenres,
  fetchMovies,
  fetchGenres,
} = moviesSlice.actions;
export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectLoadingStatus = (state) =>
  selectMoviesState(state).loadingStatus;
export default moviesSlice.reducer;
