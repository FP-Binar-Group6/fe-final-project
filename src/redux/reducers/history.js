import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  historyDetails: null,
};

const historySlicer = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setHistoryDetails: (state, action) => {
      state.historyDetails = action.payload;
    },
  },
});

export const { setHistory, setHistoryDetails } = historySlicer.actions;

export default historySlicer.reducer;
