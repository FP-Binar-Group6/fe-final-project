import axios from "axios";
import { toast } from "react-toastify";
import { setNotif } from "../reducers/notif";

const baseUrl = process.env.REACT_APP_AUTH_AirTicke;

export const getNotif = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(`${baseUrl}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setNotif(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
