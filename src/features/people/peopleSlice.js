import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        people: [],
        fetchingStatus: "loading",
    },
    reducers: {
        setPeople: (state, { payload: people }) => {
            state.people = people
        },
        setFetchingToSucces: state => {
            state.fetchingStatus = "success";
        },
        setFetchingToFail: state => {
            state.fetchingStatus = "fail";
        },
        fetchPeople: () => { },
    },
});

export const { setPeople, setFetchingToSucces, setFetchingToFail, fetchPeople } = peopleSlice.actions;
export const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectFetchingStatus = state => selectPeopleState(state).fetchingStatus;
export default peopleSlice.reducer;