import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostsAirport: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setPostsAirport } = postSlicer.actions;

// export the global state / reducers
export default postSlicer.reducer;
