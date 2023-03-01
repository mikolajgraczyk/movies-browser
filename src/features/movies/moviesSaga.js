import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getPopularData, getGenreName } from "../getData";
import {
  setMovies,
  setGenres,
  setLoadingToSucces,
  setLoadingToFail,
  fetchMovies,
  fetchGenres,
} from "./moviesSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenreName);
    yield put(setGenres(genres));
  } catch (error) {
    yield delay(1000);
    yield put(setLoadingToFail());
  }
}

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getPopularData, "movie");
    yield put(setMovies(movies));
    yield delay(1000);
    yield put(setLoadingToSucces());
  } catch (error) {
    yield delay(1000);
    yield put(setLoadingToFail());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
