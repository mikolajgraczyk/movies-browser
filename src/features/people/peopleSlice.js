import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    totalResults: 0,
    totalPage: 500,
    fetchingStatus: "loading",
  },
  reducers: {
    setFetchingToSucces: (state, { payload }) => {
      state.people = payload.results;
      state.page = payload.page;
      state.totalResults = payload.total_results;
      state.totalPage = payload.total_pages;
      if (payload.total_results === 0) {
        state.fetchingStatus = "noResults";
      } else {
        state.fetchingStatus = "success";
      }
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
export const selectPeopleTotalPage = (state) =>
  selectPeopleState(state).totalPage;
export const selectPeopleTotalResults = (state) =>
  selectPeopleState(state).totalResults;

export default peopleSlice.reducer;
