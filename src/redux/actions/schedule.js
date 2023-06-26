import axios from "axios";
import { setSchedules } from "../reducers/schedule";
import { toast } from "react-toastify";

export const getSchedules = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/schedule/`
    );
    dispatch(setSchedules(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
