import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule: [],
  filter: [],
};

const searchSlicer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    setSearch: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setSchedule, setSearch } = searchSlicer.actions;

export default searchSlicer.reducer;
