import axios from "axios";
import { toast } from "react-toastify";
import { setAirport } from "../reducers/home";

export const getAllAirport = (navigate) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    console.log("token", token)
    const response = await axios.get(
      `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/airport/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

    );

    console.log("munculin response",response)

    const { data } = response?.data;
    dispatch(setAirport(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
