import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scheduleId: "",
    dataPemesan: null,
    dataPenumpang: [],
    paymentId:"",
    bookingCode: localStorage.getItem("bookingCode") || null

};

const bookingSlicer = createSlice({
  name: "booking",
  initialState,
  reducers: {

    setScheduleId: (state, action) => {
      state.scheduleId = action.payload;
    },

    setDataPemesan: (state, action) => {
      state.dataPemesan = action.payload;
    },
    setDataPenumpang: (state, action) => {
      state.dataPenumpang = action.payload;
    },

    setPaymentId: (state, action) => {
      state.paymentId = action.payload;
    },
    setBookingCode: (state, action) => {
      if (action.payload) {
        localStorage.setItem("bookingCode", (action.payload));
      } else {
        localStorage.removeItem("bookingCode");
      }
      state.bookingCode = action.payload;

    },
  },
});


// setScheduleId, setDataPemesan, setDataPenumpang, setPaymentStatus, and setBookingCode can be accessed in any files in this project
export const { setScheduleId, setDataPemesan, setDataPenumpang, setPaymentId, setBookingCode } = bookingSlicer.actions;


// export the global state / reducers
export default bookingSlicer.reducer;
