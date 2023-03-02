import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actorDetails: {},
    status: "loading",
  },
  reducers: {
    fetchActorDetails: (state) => {
      state.status = "loading";
    },
    fetchActorDetailsSuccess: (state, { payload: actorDetails }) => {
      state.actorDetails = actorDetails;
      state.status = "success";
    },
    fetchActorDetailsFail: (state) => {
      state.status = "fail";
    },
  },
});

export const { fetchActorDetails, fetchActorDetailsSuccess } =
  actorSlice.actions;

const selectActorState = (state) => state.actor;
export const selectActorDetails = (state) =>
  selectActorState(state).actorDetails;
export const selectActorInfo = (state) => selectActorDetails(state)[0];
export const selectActorPageStatus = (state) => selectActorState(state).status;

export default actorSlice.reducer;
