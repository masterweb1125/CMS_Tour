"use client";
import { addToCart } from "@/src/redux/features/User.Slice";
import { Grid, InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Import dayjs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const locations = ["London", "Amsertadam", "Australia", "Asia", "New York"];
const languages = ["English", "French"];

export default function FilterModal({
  open,
  handleClose,
  tourDetail,
}: {
  open: boolean;
  handleClose: () => void;
  tourDetail: any;
}) {
  const [age, setAge] = useState("Pickup Location");
  const [selectedDate, setSelectedDate] = useState("");
  const [isAvailability, setisAvailability] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [language, setLanguage] = useState("English");
  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  const user: any = useSelector((root: any) => root?.User?.UserInfo);
  const cart: any = useSelector((root: any) => root?.User?.cart);

  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleDateChange = (date: any) => {
    if (date) {
      setSelectedDate(dayjs(date).format("MMMM D, YYYY"));
    } else {
      setSelectedDate("");
    }
  };

  // check availability
  const IsAvailable = () => {
    setisAvailability((prev: any) => !prev);
  };

  // ------ check out --------
  const checkOut = () => {
     const priceAdult = parseInt(tourDetail?.priceAdult) * adult;
     const priceChild = parseInt(tourDetail?.priceChild) * child;
     const tourPrice = parseInt(tourDetail?.tourPrice);
     const totalPrice = tourPrice + priceChild + priceAdult;
     const cart_Tour_detail = {
       tourId: tourDetail?._id,
       tourName: tourDetail?.name,
       price: totalPrice,
       date: selectedDate,
       duration: 5,
       person: adult,
       child: child,
       departTime: "10:00 PM",
       imageUrl: tourDetail?.imageUrl,
     };
     dispatch(addToCart(cart_Tour_detail));

     if (!user?.name) {
       navigate.push("/auth/login");
       toast.error("Please register yourself first", {
         style: { width: "auto", height: "auto" },
         duration: 3000,
       });
     } else {
      navigate.push("/book-now");
     }
    handleClose();
  }

  // add-to-cart function definition
  const AddToCart = () => {
    const priceAdult = parseInt(tourDetail?.priceAdult) * adult;
    const priceChild = parseInt(tourDetail?.priceChild) * child;
    const tourPrice = parseInt(tourDetail?.tourPrice);
    const totalPrice = tourPrice + priceChild + priceAdult;

    const cart_Tour_detail = {
      tourId: tourDetail?._id,
      tourName: tourDetail?.name,
      price: totalPrice,
      date: selectedDate,
      duration: 5,
      person: adult,
      child: child,
      departTime: "10:00 PM",
      imageUrl: tourDetail?.imageUrl,
    };
    dispatch(addToCart(cart_Tour_detail));

    if (!user?.name) {
      navigate.push("/auth/login")
      toast.error("Please register yourself first", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    } else {
      toast.success("Added to the Cart successfully", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    }

    handleClose();
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
                      <Image
                        src="/icons/carticons/marker.png"
                        className="w-4"
                        width={10}
                        height={10}
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
                      <MenuItem key={index} value={item}>
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
                  value={selectedDate}
                  onChange={handleDateChange}
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

          {isAvailability ? (
            <Grid container className=" flex justify-center items-center">
              <Grid
                item
                xs={10}
                className="  flex justify-between items-center"
              >
                <p className="text-[#344054] font-semibold text-[1rem] md:font-medium pt-4">
                  Adults (13+)
                </p>
                <div className="text-[#000]  font-semibold pt-4 flex items-center gap-3">
                  <p
                    className="text-[1.5rem] cursor-pointer"
                    onClick={() => setAdult(adult > 1 ? adult - 1 : 1)}
                  >
                    {" "}
                    <CiSquareMinus />
                  </p>
                  <p className="text-[1.3rem] text-gray-600"> {adult} </p>
                  <p
                    className="text-[1.5rem] cursor-pointer "
                    onClick={() => setAdult(adult + 1)}
                  >
                    <CiSquarePlus />
                  </p>
                </div>
              </Grid>

              <Grid
                item
                xs={10}
                className="  flex justify-between items-center"
              >
                <p className="text-[#344054] font-semibold text-[1rem] md:font-medium pt-4">
                  Child (3-11)
                </p>
                <div className="text-[#000]  font-semibold pt-4 flex items-center gap-3">
                  <p
                    className="text-[1.5rem] cursor-pointer"
                    onClick={() => setChild(child >= 1 ? child - 1 : 0)}
                  >
                    {" "}
                    <CiSquareMinus />
                  </p>
                  <p className="text-[1.3rem] text-gray-600"> {child} </p>
                  <p
                    className="text-[1.5rem] cursor-pointer "
                    onClick={() => setChild(child + 1)}
                  >
                    <CiSquarePlus />
                  </p>
                </div>
              </Grid>

              {/* action buttons */}
              <Grid item xs={12} className="flex gap-3">
                <button
                  className="border  border-[#FFA500] text-black font-semibold font-mont text-xl px-4 py-2 rounded-lg w-[48%] mt-4"
                  onClick={AddToCart}
                >
                  Add To Cart
                </button>

                <button
                  className="bg-[#FFA500] text-white font-semibold font-mont text-xl px-4 py-2 rounded-lg w-[48%] mt-4"
                  onClick={checkOut}
                >
                  Check Out
                </button>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <div>
                <button
                  className="bg-[#FFA500] text-white font-semibold font-mont text-xl px-4 py-3 rounded-lg w-full mt-4"
                  onClick={IsAvailable}
                >
                  Check Availability
                </button>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </Modal>
  );
}
