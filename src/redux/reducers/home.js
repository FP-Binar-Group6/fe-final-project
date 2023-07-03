import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airport: [],
};

const homeSlicer = createSlice({
  name: "home",
  initialState,
  reducers: {
    setAirport: (state, action) => {
      state.airport = action.payload;
    },
  },
});

export const { setAirport } = homeSlicer.actions;

export default homeSlicer.reducer;
