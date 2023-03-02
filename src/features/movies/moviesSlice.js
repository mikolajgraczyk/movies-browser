import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    fetchingStatus: "loading",
  },
  reducers: {
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setFetchingToSucces: (state) => {
      state.fetchingStatus = "success";
    },
    setFetchingToFail: (state) => {
      state.fetchingStatus = "fail";
    },
    fetchMovies: () => {},
    fetchGenres: () => {},
  },
});

export const {
  setMovies,
  setFetchingToSucces,
  setFetchingToFail,
  setGenres,
  fetchMovies,
  fetchGenres,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectFetchingStatus = (state) =>
  selectMoviesState(state).fetchingStatus;

export const selectedGenreByIds = (state, genreIds) => {
    return genreIds.map((genreId) => {
    return selectGenres(state).find((genre) => genre.id === genreId);
  });
};

export default moviesSlice.reducer;
