import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getPopularData, getGenres } from "../getData";
import {
  setMovies,
  setGenres,
  setFetchingToSucces,
  setFetchingToFail,
  fetchMovies,
  fetchGenres,
} from "./moviesSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
  } catch (error) {
    yield put(setFetchingToFail());
  }
}

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getPopularData, "movie");
    yield put(setMovies(movies));
    yield delay(1000);
    yield put(setFetchingToSucces());
  } catch (error) {
    yield delay(1000);
    yield put(setFetchingToFail());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
