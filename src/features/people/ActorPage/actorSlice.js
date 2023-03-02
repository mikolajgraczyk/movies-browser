import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actorDetails: {},
    credits: [],
    status: "loading",
  },
  reducers: {
    fetchActorDetails: () => {},
    fetchActorDetailsSuccess: (state, { payload: actorDetails }) => {
      state.actorDetails = actorDetails;
    },
    fetchActorCredits: () => {},
    fetchActorCreditsSuccess: (state, { payload }) => {
      state.credits = payload;
    },
    fetchActorDataSuccess: (state) => {
      state.status = "success";
    },
  },
});

export const {
  fetchActorDetails,
  fetchActorDetailsSuccess,
  fetchActorCredits,
  fetchActorCreditsSuccess,
  fetchActorDataSuccess,
} = actorSlice.actions;

const selectActorState = (state) => state.actor;
export const selectActorDetails = (state) =>
  selectActorState(state).actorDetails;
export const selectCredits = (state) => selectActorState(state).credits;
export default actorSlice.reducer;
