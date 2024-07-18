"use client"
import { Search } from "@/src/redux/service/AdminApi";
import { InputAdornment, TextField } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React, { useEffect, useRef, useState } from "react";
import {connectSocket} from '../../../redux/service/socket.js'
function SearchInput({...other }:any) {
  const [query,setquery] =useState("Aliyan")
  const [Active,setActive] = useState(false)
  const resultsRef = useRef(null);
  const [results ,setresults] = useState({tours:[],bookings:[],users:[]})
const hendlesearching = async ()=>{
const res = await Search(query);
setresults(res)
}

useEffect(()=>{
hendlesearching();
},[true,query])

useEffect(() => {
  // Event listener to handle click outside results container
  const handleClickOutside = (event) => {
    if (resultsRef.current && !resultsRef.current.contains(event.target)) {
      setActive(false); // Hide results if clicked outside
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
    <div className="relative">
      <TextField
      autoComplete={'off'}
      className="w-full font-mont"
      placeholder="Search"
      size="small"
      onFocus={()=>setActive(true)}
      value={query}
      onClick={()=>setActive(true)}
      onKeyDown={()=>setActive(true)}
      onChange={(e)=>setquery(e.target.value)}
      {...other}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputAdornment>
        ),
        sx: { borderRadius: 2, fontSize: 12 },
      }}
    />
   <div
  ref={resultsRef}
  hidden={!Active}
  className="absolute p-2 rounded-md top-[50px] left-0 bg-white w-full"
  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
>
  {results.tours && results.tours.length > 0 && (
    <div>
      <h2 className="text-sm font-semibold">Tours</h2>
      {/* Render each tour item */}
      {results.tours.map((tour, index) => (
        <div key={index} className="text-sm">{tour.name}</div>
      ))}
    </div>
  )}

  {results.bookings && results.bookings.length > 0 && (
    <div>
      <h2 className="text-sm font-semibold">Bookings</h2>
      {/* Render each booking item */}
      {results.bookings.map((booking, index) => (
        <div key={index} className="text-sm">{booking.bookingId}</div>
      ))}
    </div>
  )}

  {results.users && results.users.length > 0 && (
    <div>
      <h2 className="text-sm font-semibold mb-2">Users</h2>
      {/* Render each user item */}
      {results.users.map((item) => (
        <div key={item._id} className="flex hover:bg-gray-300 w-full gap-2 py-2 px-2">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={item?.profile_image}
            alt={item.name}
          />
          <div className="flex flex-col items-start justify-center text-[11px]">
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
}

export default SearchInput;
