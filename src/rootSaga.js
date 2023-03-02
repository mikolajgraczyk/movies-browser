import { all } from "redux-saga/effects";
import { actorSaga } from "./features/people/ActorPage/actorSaga";
import { peopleSaga } from "./features/people/peopleSaga";


export default function* rootSaga() {
  yield all([
    peopleSaga(),
    actorSaga(),
  ])
}