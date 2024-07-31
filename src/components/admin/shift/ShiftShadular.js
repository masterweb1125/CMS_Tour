import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  MonthView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  ViewSwitcher,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { GetAllShift } from "@/src/redux/service/AdminApi";

const ShiftShadular = ({refetch}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
 const [shift ,setshift] =  useState([])
  // Sample data
  const data = shift.map((item) => ({
    title: item.name,
    startDate: new Date(item.shiftDate + "T09:00:00"), // Default start time
    endDate: new Date(item.shiftDate + "T17:00:00"), // Default end time
  }));
const fetch = async ()=>{
const res = await GetAllShift();

setshift(res.data);
}
useEffect(()=>{
 fetch();
},[refetch]);


  return (
    <div className="p-4 ">
      <div className="w-full h-[60px] border-[#EBEFF3] border-2 rounded-[5px] mb-2  flex  items-center justify-between px-5">
        <h2 className="text-xl font-semibold ">
          Shifts <div className="bg-primary h-[0.1rem] mt-[3px] w-full rounded-[10px] " />
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between h-[35px] rounded-[3px] border-[#EBEFF3] border-2  w-[250px] ">
            <button
              className="px-2  h-full"
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() - 1))
                )
              }
            >
              <IoIosArrowBack />
            </button>
            <span className="mx-4">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              className="px-2  h-full"
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                )
              }
            >
              <IoIosArrowForward />
            </button>
          </div>
          <button className="p-2 border rounded">📅</button>
        </div>
      </div>
      <Paper>
        <Scheduler data={data} height={700}>
          <ViewState currentDate={currentDate} />
          <MonthView />
          <WeekView startDayHour={9} endDayHour={19} />
          <AllDayPanel />
          <Appointments />
          <AppointmentTooltip showOpenButton showCloseButton />
          <Toolbar />
          <ViewSwitcher />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default ShiftShadular;
