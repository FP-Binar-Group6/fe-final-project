import axios from "axios";
import { toast } from "react-toastify";
import { setSchedule, setSearch } from "../reducers/search";

export const getAllSchedule =
  (navigate, departureTime, departureAirportId, arrivalAirportId, className) =>
  async (dispatch, getState) => {
    try {
      // const { token } = getState().auth;
      const response = await axios.get(
        `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/schedule`
      );

      const { data } = response?.data;
      dispatch(setSchedule(data));

      // navigate("/search");
    } catch (error) {
      console.log("untuk munculin error", error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error.message);
    }
  };

export const getSearchSchedule =
  (departureTime, departureAirportId, arrivalAirportId, className, navigate) =>
  async (dispatch, getState) => {
    try {
      // const { token } = getState().auth;
      const response = await axios.get(
        `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/schedule/search?departureTime=${departureTime}&departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&className=${className}`
        // {
        //   params: {
        //     departureTime,
        //     departureAirportId,
        //     arrivalAirportId,
        //     className,
        //   },
        // }
      );

      console.log(" data response", response);

      const { data } = response?.data;

      console.log("data search", data);

      dispatch(setSearch(data));

      navigate("/search");
    } catch (error) {
      console.log("untuk munculin error", error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error.message);
    }
  };
