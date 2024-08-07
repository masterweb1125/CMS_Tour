import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Create_services = () => {
    const [Service,setService] = useState({
        name:'',
        discription:"",
        categorif:"categoruy"
        
    })
  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Create Service</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Add new service for tour here.
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={3} className="flex items-center">
          <SearchInput />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <div className="border rounded-lg px-8 py-4">
            <Grid container>
              <Grid item xs={12} mb={4}>
                <div className="border-t-4 border-[#FFA500] w-24" />
                <p className="text-[#344054] text-lg font-semibold pt-4">
                  Service Details
                </p>
                <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
                  Add details for the new service.
                </h6>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
            <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Category Name <span className="text-red-500">*</span>
                </label>

                <br />
                <TextField
                  className="w-full font-mont"
                  placeholder="Category Name"
                  size="small"
                  name="name"
                //   value={category.name}
                //   onChange={handleChange}
                  InputProps={{
                    className: "input-class", 
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  className="w-full font-mont"
                  placeholder="Category Name"
                  size="small"
                  name="name"
                //   value={category.name}
                //   onChange={handleChange}
                  InputProps={{
                    className: "input-class", 
                  }}
                />
              </Grid>



            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Create_services;
