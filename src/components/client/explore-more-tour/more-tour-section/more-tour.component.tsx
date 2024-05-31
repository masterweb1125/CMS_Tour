"use client";
import React, { useEffect, useState } from "react";
import Client_Container from "../../container/container.component";
import { InputAdornment, TextField, Tab, Tabs, Checkbox } from "@mui/material";
import { Search } from "@mui/icons-material";
import Client_ToursDirectoryItem from "../../tours-main/tours-directory-item.component";
import Client_Paginator from "../../libs/paginator/paginator.component";
import BasicDatePicker from "../../libs/AppDatePicker/datepicker.component";
import { useDispatch, useSelector } from "react-redux";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { addToursData } from "@/src/redux/features/general.slice";
import toast from "react-hot-toast";

type ToursProps = {
  directoryTitle: string;
  subPara: string;
};

export const tabStyles = (isActive: any) => ({
  backgroundColor: "transparent",
  opacity: isActive ? 1 : 0.5,
  "&.Mui-selected": {
    color: "inherit",
    borderBottom: "3px solid #FFA500",
    fontWeight: "bold",
    opacity: 1,
  },
});

const Client_MoreTours = ({  directoryTitle, subPara }: any) => {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
      min: 0,
      max: 0,
    });
   const toursData: any = useSelector((root: any) => root?.general?.toursData);
  const checkingGeneralData: any = useSelector((root: any) => root?.general);
  const dispatch = useDispatch();
  const toursPerPage = 6;

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

 const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   setSelectedCategory(event.target.value);
   setCurrentPage(1);
 };

  
    const handlePriceRangeChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, checked } = event.target;
      if (checked) {
        // Parse the name attribute to get the min and max values
        const [min, max] = name.split("-").map(Number);
        setPriceRange({ min, max });
      } else {
        setPriceRange({ min: 0, max: 0 });
      }
      setCurrentPage(1);
    };


  const filteredTours = toursData
    ? toursData.filter(
        (tour: any) =>
          tour?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) &&
          (selectedCategory === "" ||
            tour.category?.toLowerCase() === selectedCategory?.toLowerCase()) &&
          (priceRange.min === 0 || priceRange.min <= tour?.tourPrice) &&
          (priceRange.max === 0 || priceRange.max >= tour?.tourPrice)
      )
    : [];

    const indexOfLastTour = currentPage * toursPerPage;
    const indexOfFirstTour = indexOfLastTour - toursPerPage;
    const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

const FetchingTours = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/tour");
    console.log("res: ", res.data);
    dispatch(addToursData(res?.data?.data));
  } catch (error) {
    console.log("something went wrong: ", error);
    toast.error("Retrieving tours data failed");
  }
};

useEffect(() => {
  FetchingTours();
}, []);

  return (
    <Client_Container>
      <div className="directory-titles pt-20 pb-8">
        <div className="flex md:flex-row flex-col">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4 capitalize">
              {directoryTitle}
            </h1>
            <p className="text-gray-text text-lg leading-7 font-medium mb:3 sm-block">
              {subPara}
            </p>
          </div>
          <div>
            <div className=" md:w-[300px] md:h-[35px] mt-2 md:mt-0">
              <TextField
                className="w-full"
                placeholder="Search..."
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-row mt-20 gap-14">
          <div className="lg:w-[362px] w-full hidden sm:block">
            <div className="flex flex-col">
              <h3 className="text-1xl md:text-2xl lg:text-2xl text-black-50 font-semibold mb-4 capitalize">
                Category
              </h3>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border border-r-[12px] border-transparent w-full p-2 mt-2 block border-gray-300 text-black bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
              >
                <option value="">Choose Category</option>
                <option value="adventure">Adventure</option>
                <option value="ecotourism">Ecotourism</option>
                <option value="educational">Educational</option>
                <option value="cultural">Cultural</option>
                <option value="heritage">Heritage</option>
              </select>
            </div>
            <div className="flex flex-col mt-7">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-1xl md:text-2xl lg:text-2xl text-black-50 font-semibold mb-4 capitalize">
                  Price Range
                </h3>
                <p className="text-gray-400 mb-4">Low to High</p>
              </div>

              {/* below are the price checkbox given -------- */}
              <div className="flex flex-col">
                <div className=" flex flex-row gap-3 justify-start items-center">
                  <Checkbox
                    name="0-100"
                    checked={priceRange.min === 0 && priceRange.max === 100}
                    onChange={handlePriceRangeChange}
                    id="1"
                  />
                  <h5 className="text-black-50 text-normal">Less than $100</h5>
                </div>
                <div className=" flex flex-row gap-3 justify-start items-center">
                  <Checkbox
                    name="100-500"
                    checked={priceRange.min === 100 && priceRange.max === 500}
                    onChange={handlePriceRangeChange}
                    id="2"
                  />
                  <h5 className="text-black-50 text-normal">$100 to $500</h5>
                </div>
                <div className=" flex flex-row gap-3 justify-start items-center">
                  <Checkbox
                    name="500-999"
                    checked={priceRange.min === 500 && priceRange.max === 999}
                    onChange={handlePriceRangeChange}
                    id="3"
                  />
                  <h5 className="text-black-50 text-normal">$500 to $999</h5>
                </div>
                <div className=" flex flex-row gap-3 justify-start items-center">
                  <Checkbox
                    name="1000-2000"
                    checked={priceRange.min === 1000 && priceRange.max === 2000}
                    onChange={handlePriceRangeChange}
                    id="4"
                  />
                  <h5 className="text-black-50 text-normal">$1k to $2k</h5>
                </div>
                <div className=" flex flex-row gap-3 justify-start items-center">
                  <Checkbox
                    name="2000-5000"
                    checked={priceRange.min === 2000 && priceRange.max === 5000}
                    onChange={handlePriceRangeChange}
                    id="5"
                  />
                  <h5 className="text-black-50 text-normal">$2k to $5k</h5>
                </div>
                <div className=" flex flex-row gap-3 justify-start items-center">
                  <Checkbox
                    name="5000-100000"
                    checked={
                      priceRange.min === 5000 && priceRange.max === 100000
                    }
                    onChange={handlePriceRangeChange}
                    id="6"
                  />
                  <h5 className="text-black-50 text-normal">$5k+</h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-7">
              <h3 className="text-1xl md:text-2xl lg:text-2xl text-black-50 font-semibold mb-4 capitalize">
                Destination
              </h3>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter Location"
                className="border border-r-[12px] border-transparent w-full p-2 mt-2 block border-gray-300 text-black bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
              ></input>
            </div>

            <div className="flex flex-col mt-7">
              <h3 className="text-1xl md:text-2xl lg:text-2xl text-black-50 font-semibold mb-4 capitalize">
                Travel Dates
              </h3>
              <div className="flex flex-col mb-5">
                <h5 className="text-black-300 text-semibold mb-5">From</h5>
                <input
                  type="date"
                  id="location"
                  name="location"
                  placeholder="Enter Location"
                  className="border border-r-[12px] border-transparent w-full p-2 mt-2 block border-gray-300 text-black bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
                ></input>
              </div>
              <div className="flex flex-col">
                <h5 className="text-black-300 text-semibold  mb-5">To</h5>
                <input
                  type="date"
                  id="location"
                  name="location"
                  placeholder="Enter Location"
                  className="border border-r-[12px] border-transparent w-full p-2 mt-2 block border-gray-300 text-black bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-row justify-around items-center gap-10 mb-7">
              <div className="border-t border-gray-300 h-1 flex-1 hidden sm:block"></div>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Tab label="Featured" sx={tabStyles} />
                <Tab label="Most Reviews" sx={tabStyles} />
                <Tab label="Popular" sx={tabStyles} />
              </Tabs>
            </div>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mb-10 md:mb-16 lg:mb-20 min-h-[500px]">
              {value === 0 && (
                <>
                  {currentTours?.map((tourItem: any, index: number) => (
                    <div
                      key={index}
                      className="md:col-span-1 lg:col-span-1 min-h-[500px]"
                    >
                      <Client_ToursDirectoryItem tour={tourItem} />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="md:hidden grid grid-cols-1 gap-6 justify-center mb-10 mb-16 min-h-[500px]">
              {value === 0 && (
                <>
                  {currentTours
                    ?.splice(0, 4)
                    .map((tourItem: any, index: number) => (
                      <div
                        key={index}
                        className="md:col-span-1 lg:col-span-1 min-h-[500px]"
                      >
                        <Client_ToursDirectoryItem tour={tourItem} />
                      </div>
                    ))}
                </>
              )}
            </div>

            <Client_Paginator
              totalItems={toursData?.length || 0}
              itemsPerPage={toursPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </Client_Container>
  );
};

export default Client_MoreTours;
