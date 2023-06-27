import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule: []
};

const scheduleSlicer = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedules: (state, action) => {
      state.schedule = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setSchedules } = scheduleSlicer.actions;

// export the global state / reducers
export default scheduleSlicer.reducer;
