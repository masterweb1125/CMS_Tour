"use client";
import { Grid, InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Link from "next/link";
import { useState } from "react";

const locations = ["London", "Amsertadam", "Australia", "Asia", "New York"];
const languages = ["English", "French"];

export default function FilterModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [age, setAge] = useState("Pickup Location");
  const [language, setLanguage] = useState("English");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl px-10 py-6 w-[32rem] rounded-lg">
        <Grid container>
          <Grid item xs={12}>
            <div className="border-t-4 border-[#FFA500] w-24 mb-2" />
            <p className="text-[#344054] text-xs font-semibold md:font-medium pt-4">
              Starting Price
            </p>
            <p className="text-[#000] text-4xl font-semibold pt-4 flex items-center gap-1">
              <sub>us</sub>
              <div>$1,143</div>
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} mt={2}>
            <div className="form-group">
              <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                Pickup Location *
              </label>
              <br />

              <FormControl fullWidth>
                <Select
                  value={age}
                  onChange={handleChange}
                  className="pr-8 pl-2 py-2 w-full h-10 focus:outline-none bg-[#FBFBFB]"
                  sx={{
                    borderRadius: "7px",
                  }}
                  IconComponent={() => (
                    <InputAdornment position="end" className="absolute right-2">
                      <img
                        src="/icons/carticons/marker.png"
                        className="w-4"
                        alt="Icon"
                      />
                    </InputAdornment>
                  )}
                  renderValue={(v) => (
                    <div className="text-gray-500 font-mont">{v}</div>
                  )}
                >
                  <MenuItem
                    className="font-mont"
                    value={"Pickup Location"}
                    disabled
                  >
                    <div className="font-mont">Pickup Location</div>
                  </MenuItem>

                  {!!locations?.length &&
                    locations.map((item, index) => (
                      <MenuItem value={item}>
                        <div className="font-mont text-gray-500">{item}</div>
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={12} md={6} mt={2}>
            <div className="form-group">
              <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                Tour Date *
              </label>
              <br />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg bg-[#FBFBFB] outline-none"
                  slotProps={{
                    textField: { size: "small" },
                  }}
                />
              </LocalizationProvider>
            </div>
          </Grid>

          <Grid item xs={12} md={12} mt={2}>
            <div className="form-group">
              <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                Select language *
              </label>
              <br />

              <FormControl fullWidth>
                <Select
                  value={language}
                  onChange={(e: any) => setLanguage(e.target.value)}
                  className="pr-8 pl-2 py-2 w-full h-10 focus:outline-none bg-[#FBFBFB]"
                  sx={{
                    borderRadius: "7px",
                  }}
                  renderValue={(v) => (
                    <div className="text-gray-500 font-mont">{v}</div>
                  )}
                >
                  {!!languages?.length &&
                    languages.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        <div className="font-mont text-gray-500">{item}</div>
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Link href={"/book-now"}>
              <button className="bg-[#FFA500] text-white font-semibold font-mont text-xl px-4 py-3 rounded-lg w-full mt-4">
                Check Availability
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
