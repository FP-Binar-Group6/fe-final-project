import axios from "axios";
import { toast } from "react-toastify";
import { setHistoryDetails, setHistory } from "../reducers/history";

const baseUrl = process.env.REACT_APP_AUTH_AirTicket;

export const getHistory = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(`${baseUrl}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setHistory(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const searchHistory = async (q) => {
  const search = await axios.get(`${baseUrl}/`);
  return search.data;
};

export const getHistoryDetails = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(`${baseUrl}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setHistoryDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
