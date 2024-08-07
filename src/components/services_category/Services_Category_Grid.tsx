"use client";
import { CSVLink } from "react-csv";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Grid,
  Popover,
  Typography,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { GetAllServicesCategory } from "@/src/redux/service/AdminApi";
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const columns = ["#", "Name", "Description", "Status", "Action"];

function ServicesCategoryGrid({ name, setCategory, setbtn, updated }) {
  const [categories, setCategories] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const res = await GetAllServicesCategory();
      setCategories(res.data);
      setDisplayedCategories(res.data.slice(0, pageSize));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [name]);

  const handleViewMore = () => {
    setPageSize((prevPageSize) => prevPageSize + 5);
    setDisplayedCategories(categories.slice(0, pageSize + 5));
    if (categories.length <= pageSize + 5) {
      setShowMore(false); // Hide button if all categories are displayed
    }
  };

  const handleActionClick = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleActionClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="border pt-8 rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={12} md={9}>
          <div className="border-t-4 border-[#FFA500] w-24 " />
          <p className="text-[#344054] text-lg font-semibold pt-4">
            Services Category
          </p>
          <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
            Manage your services categories here
          </h6>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput />
            <svg
              width="40"
              height="34"
              viewBox="0 0 40 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="43"
                rx="7.5"
                stroke="#D0D5DD"
              />
              <path
                d="M15 22H25M12.5 17H27.5M17.5 27H22.5"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md pb-3 pr-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item, index) => (
                    <th scope="col" key={index} className="px-6 py-3">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedCategories.length > 0 &&
                  displayedCategories.map((item, i) => (
                    <tr
                      key={item._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium">{i + 1}</td>
                      <td className="px-6 py-4 font-medium">{item.name}</td>
                      <td className="px-6 py-4 font-medium">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {item.isActive ? "Active" : "Inactive"}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <IconButton
                          className="p-2 rounded-fill relative rounded-full hover:bg-gray-300 text-xl"
                          onClick={(event) => handleActionClick(event, item)}
                        >
                          <BsThreeDotsVertical />
                        </IconButton>
                        <Popover
                          id={item._id}
                          open={open && selectedCategory?._id === item._id}
                          anchorEl={anchorEl}
                          onClose={handleActionClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <Paper className="w-[150px]">
                            <MenuList>
                              <MenuItem
                                onClick={() => {
                                  setCategory({
                                    name: item.name,
                                    description: item.description,
                                    isActive: item.isActive,
                                  });
                                  updated(item._id);
                                  setbtn(false);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                  handleActionClose();
                                }}
                                className="border-b-2 border-[#4482ff]"
                              >
                                <ListItemIcon>
                                  <AiOutlineClockCircle color="orange" />
                                </ListItemIcon>
                                <ListItemText primary="Update" />
                              </MenuItem>
                              <MenuItem
                                onClick={() => {
                                  // handle delete logic here
                                  handleActionClose();
                                }}
                              >
                                <ListItemIcon>
                                  <AiOutlineCloseCircle color="red" />
                                </ListItemIcon>
                                <ListItemText primary="Delete" />
                              </MenuItem>
                            </MenuList>
                          </Paper>
                        </Popover>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {showMore && (
              <div className="text-end pt-5 text-[#353535] font-semibold cursor-pointer select-none">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FFA500" }}
                  onClick={handleViewMore}
                >
                  View More
                </Button>
              </div>
            )}

            {!showMore && categories.length > pageSize && (
              <div className="text-end pt-5 text-[#353535] font-semibold cursor-pointer select-none">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FFA500" }}
                  onClick={handleViewMore}
                >
                  View More
                </Button>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServicesCategoryGrid;
