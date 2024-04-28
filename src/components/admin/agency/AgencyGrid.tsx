"use client";
import { Grid } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import { KababMenu } from "../../dashboard/dashboardComponents/CardItems";
import SearchInput from "../../dashboard/dashboardComponents/SearchInput";

const columns = ["Agency ID", "Agency Name", "Revenue", "No. of Tours", "Reviews", "Action"]

function AgencyGrid({ title, onSetData, setScreenView }: { title: string; onSetData: any; setScreenView: any }) {
    return (
        <div className="shadow-4xl rounded-lg">
            <Grid container px={3} pt={3}>
                <Grid item xs={12} md={9}>
                    <h1 className="text-lg font-semibold">{title}</h1>
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium">232323</td>
                                    <td className="px-6 py-4 font-medium">TravelCo</td>
                                    <td className="px-6 py-4 font-medium">$9093</td>
                                    <td className="px-6 py-4 font-medium">23</td>
                                    <td className="px-6 py-4 font-medium">2133213</td>
                                    <td className="px-6 py-4">
                                        <BasicMenu setScreenView={() => setScreenView(2)} />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium">232323</td>
                                    <td className="px-6 py-4 font-medium">TravelCo</td>
                                    <td className="px-6 py-4 font-medium">$9093</td>
                                    <td className="px-6 py-4 font-medium">23</td>
                                    <td className="px-6 py-4 font-medium">2133213</td>
                                    <td className="px-6 py-4">
                                        <BasicMenu setScreenView={() => setScreenView(2)} />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium">232323</td>
                                    <td className="px-6 py-4 font-medium">TravelCo</td>
                                    <td className="px-6 py-4 font-medium">$9093</td>
                                    <td className="px-6 py-4 font-medium">23</td>
                                    <td className="px-6 py-4 font-medium">2133213</td>
                                    <td className="px-6 py-4">
                                        <BasicMenu setScreenView={() => setScreenView(2)} />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium">232323</td>
                                    <td className="px-6 py-4 font-medium">TravelCo</td>
                                    <td className="px-6 py-4 font-medium">$9093</td>
                                    <td className="px-6 py-4 font-medium">23</td>
                                    <td className="px-6 py-4 font-medium">2133213</td>
                                    <td className="px-6 py-4">
                                        <BasicMenu setScreenView={() => setScreenView(2)} />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium">232323</td>
                                    <td className="px-6 py-4 font-medium">TravelCo</td>
                                    <td className="px-6 py-4 font-medium">$9093</td>
                                    <td className="px-6 py-4 font-medium">23</td>
                                    <td className="px-6 py-4 font-medium">2133213</td>
                                    <td className="px-6 py-4">
                                        <BasicMenu setScreenView={() => setScreenView(2)} />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium">232323</td>
                                    <td className="px-6 py-4 font-medium">TravelCo</td>
                                    <td className="px-6 py-4 font-medium">$9093</td>
                                    <td className="px-6 py-4 font-medium">23</td>
                                    <td className="px-6 py-4 font-medium">2133213</td>
                                    <td className="px-6 py-4">
                                        <BasicMenu setScreenView={() => setScreenView(2)} />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </Grid>
            </Grid>
        </div>
    );
}

export default AgencyGrid;




function BasicMenu({ onSetData, setScreenView }: { onSetData?: any; setScreenView: any }) {
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
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {handleClose(); setScreenView();}} className="font-mont text-xs">View Details</MenuItem>
                <MenuItem onClick={handleClose} className="font-mont text-xs">Deactivate Agency</MenuItem>
                <MenuItem onClick={handleClose} className="font-mont text-xs">Chat</MenuItem>
                <MenuItem onClick={handleClose} className="font-mont text-xs">Blacklist agency</MenuItem>
            </Menu>
        </div>
    );
}
