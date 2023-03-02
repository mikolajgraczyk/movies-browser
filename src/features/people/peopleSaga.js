import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getPopularData } from "../getData";
import {
  setPeople,
  setLoadingToSucces,
  setLoadingToFail,
  fetchPeople,
} from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    const people = yield call(getPopularData, "person");
    yield put(setPeople(people));
    yield delay(1000);
    yield put(setLoadingToSucces());
  } catch (error) {
    yield delay(1000);
    yield put(setLoadingToFail());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
