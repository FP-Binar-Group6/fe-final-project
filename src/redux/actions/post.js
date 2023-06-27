import axios from "axios";
import { toast } from "react-toastify";
import { setPostsAirport } from "../reducers/post";

export const getPostAirport = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/airport/`
    );
    dispatch(setPostsAirport(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
