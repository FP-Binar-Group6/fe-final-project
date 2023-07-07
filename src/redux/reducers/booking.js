import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPemesan: null,
  dataPenumpang: [],
  isBayar: false,
};

const bookingSlicer = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setDataPemesan: (state, action) => {
      state.dataPemesan = action.payload;
    },
    setDataPenumpang: (state, action) => {
      state.dataPenumpang = action.payload;
    },
    setIsbayar: (state, action) => {
      state.isBayar = action.payload;
    },
  },
});

// setDataPemesan, setDataPenumpang, and setIsBayar can be accessed in any files in this project
export const { setDataPemesan, setDataPenumpang, setIsbayar } =
  bookingSlicer.actions;

// export the global state / reducers
export default bookingSlicer.reducer;
