import { call, put, delay } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFail,
} from "./MovieSlice";
import { getMovieData } from "../../getData";

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    const movieData = yield call(getMovieData, movieId);
    yield delay(500);
    yield put(fetchMovieDetailsSuccess(movieData));
  } catch (error) {
    yield delay(500);
    yield put(fetchMovieDetailsFail());
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
