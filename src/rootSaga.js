import {all} from "redux-saga/effects";
import { peopleSaga } from "./features/people/peopleSaga";
import { moviesSaga } from "./features/movies/moviesSaga";
import { actorSaga } from "./features/people/ActorPage/actorSaga";
import { movieSaga } from "./features/movies/MoviePage/MovieSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        moviesSaga(),
        actorSaga(),
        movieSaga(),
    ]);
};
