import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPersonData } from "../../getData";
import { fetchActorDetails, fetchActorDetailsSuccess } from "./actorSlice";

function* fetchActorDetailsHandler({ payload: actorId }) {
  try {
    const actorData = yield call(getPersonData, actorId);
    yield delay(500);
    yield put(fetchActorDetailsSuccess(actorData));
  } catch (error) {}
}

export function* actorSaga() {
  yield takeLatest(fetchActorDetails.type, fetchActorDetailsHandler);
}
