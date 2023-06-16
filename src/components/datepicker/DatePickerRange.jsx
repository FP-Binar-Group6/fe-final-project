import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { pickersLayoutClasses } from "@mui/x-date-pickers";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro";
export default function DatePickerRanger() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <StaticDateRangePicker
          sx={{
            [`.${pickersLayoutClasses.contentWrapper}`]: {
              alignItems: "center",
            },
          }}
        />
      </>
    </LocalizationProvider>
  );
}
