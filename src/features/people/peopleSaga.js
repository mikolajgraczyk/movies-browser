import { call, put, delay, debounce } from "redux-saga/effects";
import { getDataByQuery, getPopularData } from "../getData";
import {
  setFetchingToSucces,
  setFetchingToFail,
  fetchPeople,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload }) {
  try {
    const currentPage = payload.currentPage;
    const query = payload.query;
    const data = yield !query
      ? call(getPopularData, "person", currentPage)
      : call(getDataByQuery, "person", currentPage, query);
    yield delay(500);
    yield put(setFetchingToSucces(data));
  } catch (error) {
    yield delay(500);
    yield put(setFetchingToFail());
  }
}

export function* peopleSaga() {
  yield debounce(500, fetchPeople.type, fetchPeopleHandler);
}
