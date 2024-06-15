"use client";
import DashboardHeader from "@/src/components/supplierdashboard/dashboardComponents/DashboardHeader";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import {
  Divider,
  Grid,
  InputAdornment,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const InputClasses = "font-mont text-xs rounded-lg hover:outline-none";

const itemsList = [
  "Dinner",
  "Hotel",
  "Room",
  "Music",
  "Food",
  "Pick Up",
  "Work",
];

interface FormData {
  name: string;
  category: string;
  location: string;
  destination: string;
  language: string;
  tourPrice: string;
  priceAdult: string;
  priceChild: string;
  priceInfant: string;
  startDate: string;
  endDate: string;
  singleDayTour: string;
  tourClosingDate: string;
  description: string;
  instruction: string;
  videoUrl: string;
}

const initialState: FormData = {
  name: "",
  category: "",
  location: "",
  destination: "",
  language: "",
  tourPrice: "",
  priceAdult: "",
  priceChild: "",
  priceInfant: "",
  startDate: "",
  endDate: "",
  singleDayTour: "",
  tourClosingDate: "",
  description: "",
  instruction: "",
  videoUrl: "",
};

function Booking() {
  const [whatIncludes, setWhatIncludes] = useState<string[]>([]);
  const [whatNotIncludes, setWhatNotIncludes] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(initialState);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    console.log("files uploaded: ", files);
    setUploadedFiles(files);
  };

  const CreateTour = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      uploadedFiles.forEach(file => {
        data.append('images', file);
      });

      (Object.keys(formData) as (keyof FormData)[]).forEach(key => {
        data.append(key, formData[key]);
      });

      data.append("whatIncludes", JSON.stringify(whatIncludes));
      data.append("whatNotIncludes", JSON.stringify(whatNotIncludes));

      const res = await API_DOMAIN.post("/api/v1/tour/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("res is: ", res.data);
      setLoading(false);

      toast.success("Tour created successfully", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
      toast.error("Creating tour failed!", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <DashboardHeader name="Jhon Christopher" />

      <div className="border rounded-lg p-4">
        <Grid container>
          <Grid item xs={12}>
            <h1 className="font-semibold">Create Tour</h1>
          </Grid>
        </Grid>

        <Grid container className="mt-1" spacing={3}>
          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full"
              placeholder="Enter Destination"
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_953_5705)">
                        <path
                          d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                          stroke="#98A2B3"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_953_5705">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </InputAdornment>
                ),
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Tour Category <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full"
              placeholder="Enter Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                  </InputAdornment>
                ),
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Location <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full"
              placeholder="Enter Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>                  
                    </InputAdornment>
                ),
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Destination <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full"
              placeholder="Enter Destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>                  
                  </InputAdornment>
                ),
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Language <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full font-mont"
              placeholder="Enter Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Tour Price <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full font-mont"
              placeholder="Enter Tour Price"
              name="tourPrice"
              value={formData.tourPrice}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>                  
                    </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Child Price <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full"
              placeholder="Enter Per Child Price"
              name="priceChild"
              value={formData.priceChild}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>                  
                    </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Infant Price <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full font-mont"
              placeholder="Enter Per Infant Price"
              name="priceInfant"
              value={formData.priceInfant}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>                  
                    </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Adult Price <span className="text-red-500">*</span>
            </label>
            <TextField
              className="w-full font-mont"
              placeholder="Enter Per Adult Price"
              name="priceAdult"
              value={formData.priceAdult}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
                endAdornment: (
                  <InputAdornment position="start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_953_5705)">
                          <path
                            d="M6.06065 5.99967C6.21739 5.55412 6.52675 5.17841 6.93395 4.9391C7.34116 4.69978 7.81991 4.6123 8.28544 4.69215C8.75096 4.772 9.1732 5.01402 9.47737 5.37536C9.78154 5.7367 9.94802 6.19402 9.94732 6.66634C9.94732 7.99967 7.94732 8.66634 7.94732 8.66634M8.00065 11.333H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_953_5705">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>                  
                    </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label className="text-[#344054] text-sm font-medium">
              Starting Date
            </label>
            <TextField
              type="date"
              className="w-full font-mont"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label className="text-[#344054] text-sm font-medium">
              Ending Date
            </label>
            <TextField
              type="date"
              className="w-full font-mont"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Single Day Tour
            </label>
            <TextField
              type="time"
              className="w-full"
              placeholder="Enter Single Day Tour Time"
              name="singleDayTour"
              value={formData.singleDayTour}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <label className="text-[#344054] text-sm font-medium">
              Tour Closing Date <span className="text-red-500">*</span>
            </label>
            <TextField
              type="date"
              className="w-full font-mont"
              placeholder="Enter Tour Closing Date"
              name="tourClosingDate"
              value={formData.tourClosingDate}
              onChange={handleChange}
              size="small"
              InputProps={{
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <div className="flex justify-center items-center gap-4">
              <h1 className="font-semibold text-sm">Tour Description</h1>
              <div className="flex-1">
                <Divider />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <label className="text-[#344054] text-sm font-medium">
              Tour Description <span className="text-red-500">*</span>
            </label>
            <TextareaAutosize
              className="w-full border-2 rounded-lg p-2 text-sm"
              style={{ height: "130px" }}
              placeholder="Tour Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label className="text-[#344054] text-sm font-medium">
              Upload Images <span className="text-red-500">*</span>
            </label>
            <br />
            <TextField
              type="file"
              size="small"
              onChange={handleFileChange}
              className="w-full"
              InputProps={{
                className: InputClasses,
                inputProps: { multiple: true }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label className="text-[#344054] text-sm font-medium">
              Upload Video <span className="text-red-500">*</span>
            </label>
            <br />
            <TextField
              type="file"
              size="small"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              className="w-full"
              InputProps={{
                className: InputClasses,
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <div className="flex justify-center items-center gap-4">
              <h1 className="font-semibold text-sm">Add What’s Include</h1>
              <div className="flex-1">
                <Divider />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <label className="text-[#344054] text-sm font-medium">
              Things Included <span className="text-red-500">*</span>
            </label>

            <div className="w-full border-2 rounded-lg p-2 text-sm h-24 overflow-y-scroll flex gap-2 flex-wrap">
              {!!whatIncludes?.length &&
                whatIncludes.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="text-sm text-[#344054] border px-2 py-1 rounded-md font-medium h-8 flex items-center gap-1 transition-all select-none"
                  >
                    <div>{value}</div>
                    <svg
                      className="cursor-pointer"
                      onClick={() =>
                        setWhatIncludes((prev: any) =>
                          prev.filter((v: string) => v !== value)
                        )
                      }
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7M1 1L7 7"
                        stroke="#98A2B3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ))}
            </div>

            <div className="flex gap-2 mt-3 select-none">
              {itemsList.map((value, index) =>
                whatIncludes?.includes(value) ||
                whatNotIncludes?.includes(value) ? (
                  <div
                    key={index}
                    className="text-sm text-[#344054] border cursor-not-allowed px-2 py-1 rounded-md font-medium"
                  >
                    {value}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="text-sm text-[#344054] border cursor-pointer px-2 py-1 rounded-md font-medium"
                    onClick={() => {
                      setWhatIncludes((prev: any) => [...prev, value]);
                    }}
                  >
                    {value}
                  </div>
                )
              )}
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <div className="flex justify-center items-center gap-4">
              <h1 className="font-semibold text-sm">Add What’s Not Include</h1>
              <div className="flex-1">
                <Divider />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <label className="text-[#344054] text-sm font-medium">
              Things Not Included <span className="text-red-500">*</span>
            </label>

            <div className="w-full border-2 rounded-lg p-2 text-sm h-24 overflow-y-scroll flex gap-2 flex-wrap">
              {!!whatNotIncludes?.length &&
                whatNotIncludes.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="text-sm text-[#344054] border px-2 py-1 rounded-md font-medium h-8 flex items-center gap-1 transition-all select-none"
                  >
                    <div>{value}</div>
                    <svg
                      className="cursor-pointer"
                      onClick={() =>
                        setWhatNotIncludes((prev: any) =>
                          prev.filter((v: string) => v !== value)
                        )
                      }
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7M1 1L7 7"
                        stroke="#98A2B3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ))}
            </div>

            <div className="flex gap-2 mt-3 select-none">
              {itemsList.map((value, index) =>
                whatIncludes?.includes(value) ||
                whatNotIncludes?.includes(value) ? (
                  <div
                    key={index}
                    className="text-sm text-[#344054] border cursor-not-allowed px-2 py-1 rounded-md font-medium"
                  >
                    {value}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="text-sm text-[#344054] border cursor-pointer px-2 py-1 rounded-md font-medium"
                    onClick={() => {
                      setWhatNotIncludes((prev: any) => [...prev, value]);
                    }}
                  >
                    {value}
                  </div>
                )
              )}
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <div className="flex justify-center items-center gap-4">
              <h1 className="font-semibold text-sm">Add Important Note</h1>
              <div className="flex-1">
                <Divider />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <label className="text-[#344054] text-sm font-medium">
              Instructions <span className="text-red-500">*</span>
            </label>
            <TextareaAutosize
              className="w-full border-2 rounded-lg p-2 text-sm"
              style={{ height: "130px" }}
              placeholder="Enter Instructions"
              name="instruction"
              value={formData.instruction}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <div className="flex items-end justify-end gap-3">
              <button className="text-black font-mont text-sm font-medium px-4 py-2 rounded-md ">
                Add to Draft
              </button>
              <button
                className="bg-[#FFA500] text-white font-mont text-sm font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                onClick={CreateTour}
              >
                {loading ? (
                  <div className="px-12 loading animate-spin text-[1.5rem] text-white">
                    <AiOutlineLoading3Quarters />
                  </div>
                ) : (
                  <>
                    <div>Upload Tour</div>
                    <div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66732 6.76759C1.16482 6.43123 0.833984 5.85842 0.833984 5.20833C0.833984 4.23185 1.58045 3.42971 2.53388 3.3414C2.72891 2.15505 3.75909 1.25 5.00065 1.25C6.24222 1.25 7.27239 2.15505 7.46743 3.3414C8.42086 3.42971 9.16732 4.23185 9.16732 5.20833C9.16732 5.85842 8.83648 6.43123 8.33398 6.76759M3.33398 6.66667L5.00065 5M5.00065 5L6.66732 6.66667M5.00065 5V8.75"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Booking;
