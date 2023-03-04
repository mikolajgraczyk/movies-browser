import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getPopularData } from "../getData";
import {
  setPeople,
  setFetchingToSucces,
  setFetchingToFail,
  fetchPeople,
} from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    const people = yield call(getPopularData, "person");
    yield put(setPeople(people));
    yield delay(500);
    yield put(setFetchingToSucces());
  } catch (error) {
    yield delay(500);
    yield put(setFetchingToFail());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
