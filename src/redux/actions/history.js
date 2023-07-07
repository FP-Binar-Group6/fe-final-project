import axios from "axios";
import { toast } from "react-toastify";
import { setHistory } from "../reducers/history";

const baseUrl = process.env.REACT_APP_AUTH_AirTicket;

//https://be-airticket-a6bnbhk5xa-as.a.run.app/api/payment/history/{userId}

export const getHistory = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    console.log(token);
    const response = await axios.get(`${baseUrl}/api/payment/history/17`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response?.data;
    console.log(data);
    dispatch(setHistory(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message || error?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const searchHistory = async (q) => {
  const search = await axios.get(`${baseUrl}/`);
  return search.data;
};
