import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieDetails: {
      movieCast: [],
      movieCrew: [],
      movieInfo: {},
    },
    status: "loading",
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      state.status = "success";
    },
    fetchMovieDetailsFail: (state) => {
      state.status = "fail";
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFail,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movie;
export const selectMovieDetails = (state) => selectMovieState(state).movieDetails;
export const selectMovieCast = (state) => selectMovieDetails(state).movieCast;
export const selectMovieCrew = (state) => selectMovieDetails(state).movieCrew;
export const selectMovieInfo = (state) => selectMovieDetails(state).movieInfo;
export const selectFetchingStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;