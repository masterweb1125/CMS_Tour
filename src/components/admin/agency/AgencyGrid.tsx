"use client";
import { Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { KababMenu } from "../../dashboard/dashboardComponents/CardItems";
import SearchInput from "../../dashboard/dashboardComponents/SearchInput";

const columns = [
  "#",
  "Agency Name",
  "Revenue",
  "No. of Tours",
  "Reviews",
  "Action",
];

function AgencyGrid({
  title,
  onSetData,
  setScreenView,
  allAgency,
}: {
  title: string;
  onSetData: any;
  setScreenView: any;
}) {
  return (
    <div className="shadow-4xl rounded-lg">
      <Grid container px={3} pt={3}>
        <Grid item xs={12} md={9}>
          <h1 className="text-lg font-semibold">{title}</h1>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput />
          </div>
        </Grid>
      </Grid>

      <Grid container mt={3}>
        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md">
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
                {allAgency.length !== 0 ? allAgency.data.map((item,i) =>(
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium">{i+1}</td>
                        <td className="px-6 py-4 font-medium">{item.name != null?item.name:item.company_name}</td>
                        <td className="px-6 py-4 font-medium">${item.totalRevenue}</td>
                        <td className="px-6 py-4 font-medium">{item.totalTours}</td>
                        <td className="px-6 py-4 font-medium">{item.totalReviews}</td>
                        <td className="px-6 py-4">
                          <BasicMenu setScreenView={() => setScreenView(2)} onSetData={onSetData} data={item}/>
                        </td>
                      </tr>
                    )):<div className="flex items-center p-6 w-full">Agencies not found</div>}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AgencyGrid;

function BasicMenu({
  onSetData,
  data,
  setScreenView,
}: {
  onSetData?: any;
  data?: any;
  setScreenView: any;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="cursor-pointer">
      <div onClick={handleClick}>
        <KababMenu />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            onSetData(data)
            setScreenView();
          }}
          className="font-mont text-xs"
        >
          View Details
        </MenuItem>
        <MenuItem onClick={handleClose} className="font-mont text-xs">
          Deactivate Agency
        </MenuItem>
        <MenuItem onClick={handleClose} className="font-mont text-xs">
          Chat
        </MenuItem>
        <MenuItem onClick={handleClose} className="font-mont text-xs">
          Blacklist agency
        </MenuItem>
      </Menu>
    </div>
  );
}