import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    currentPage: 1,
    totalPages: 0,
    fetchingStatus: "loading",
  },
  reducers: {
    setFetchingToSucces: (state, { payload }) => {
      state.people = payload.results;
      state.page = payload.page;
      state.totalPages = payload.total_pages;
      state.fetchingStatus = "success";
    },
    setFetchingToFail: (state) => {
      state.fetchingStatus = "fail";
    },
    fetchPeople: (state) => {
      state.fetchingStatus = "loading";
    },
    updatePeopleCurrentPage: (state, { payload: currentPage }) => {
      state.currentPage = currentPage;
    },
  },
});

export const {
  setFetchingToSucces,
  setFetchingToFail,
  fetchPeople,
  updatePeopleCurrentPage,
} = peopleSlice.actions;
export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectFetchingStatus = (state) =>
  selectPeopleState(state).fetchingStatus;
export const selectPeopleCurrentPage = (state) =>
  selectPeopleState(state).currentPage;
export const selectPeopleTotalPages = (state) =>
  selectPeopleState(state).totalPages;

export default peopleSlice.reducer;
