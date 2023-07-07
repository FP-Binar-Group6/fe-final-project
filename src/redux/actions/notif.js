import axios from "axios";
import { toast } from "react-toastify";
import { setNotif } from "../reducers/notif";

const baseUrl = process.env.REACT_APP_AUTH_AirTicke;

//https://be-airticket-a6bnbhk5xa-as.a.run.app/api/notifications/{userId}

export const getNotif = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    // console.log(token);
    const response = await axios.get(`${baseUrl}/api/notifications/5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response?.data;
    dispatch(setNotif(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message || error?.message);
      return;
    }
    toast.error(error?.message);
  }
};
