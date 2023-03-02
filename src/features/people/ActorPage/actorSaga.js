import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { getCombinedCredits, getPersonById } from "../../getPopularData";
import {
  fetchActorCredits,
  fetchActorCreditsSuccess,
  fetchActorDataSuccess,
  fetchActorDetails,
  fetchActorDetailsSuccess,
} from "./actorSlice";

function* fetchActorDetailsHandler({ payload: actorId }) {
  try {
    yield delay(2000);
    const actorDetails = yield call(getPersonById, actorId);
    yield put(fetchActorDetailsSuccess(actorDetails));
  } catch (error) {}
}

function* fetchActorCrewHandler({ payload: actorId }) {
  try {
    const crew = yield call(getCombinedCredits, actorId);
    yield put(fetchActorCreditsSuccess(crew));
  } catch (error) {}
}

export function* actorSaga() {
  yield all([
    yield takeLatest(fetchActorDetails.type, fetchActorDetailsHandler),
    yield takeLatest(fetchActorCredits.type, fetchActorCrewHandler),
  ]);
}
