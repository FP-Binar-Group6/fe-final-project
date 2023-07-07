import axios from "axios";
import { toast } from "react-toastify";
import { setDataPemesan } from "../reducers/booking";

export const saveDataPenumpang =
  (data, navigate) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      console.log("tokennnnnnnn", token);
      const response = await axios.post(
        `${process.env.REACT_APP_AUTH_AirTicket}/api/tickets`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Data Anda berhasil tersimpan!");
      navigate("/booking/payment");
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message || error?.message);
        console.log("erorrrrrrrrrr", error);
        return;
      }
      toast.error(error.message);
    }
  };

export const saveDataPemesan = (pemesan, navigate) => async (dispatch) => {
  dispatch(setDataPemesan(pemesan));
  toast.success("Data Pemesan berhasil tersimpan!");
  navigate("/booking/penumpang");
};
