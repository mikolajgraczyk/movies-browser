import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    fetchingStatus: "loading",
  },
  reducers: {
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setFetchingToSucces: (state, { payload: movies }) => {
      state.fetchingStatus = "success";
      state.movies = movies;
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
  const genres = selectGenres(state);
  let foundGenres = [];

  if (genres.length > 0) {
    genreIds.forEach((genreId) => {
      const foundGenre = selectGenres(state).find(
        (genre) => genre.id === genreId
      );

      if (foundGenre) {
        foundGenres.push(foundGenre);
      }
    });
  }

  return foundGenres;
};

export default moviesSlice.reducer;
