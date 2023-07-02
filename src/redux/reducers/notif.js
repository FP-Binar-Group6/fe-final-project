import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notif: [],
};

const notifSlicer = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotif: (state, action) => {
      state.notif = action.payload;
    },
  },
});

export const { setNotif } = notifSlicer.actions;

export default notifSlicer.reducer;
