"use client";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import ServicesCategoryGrid from "@/src/components/services_category/Services_Category_Grid";
import {
  CreateServicesCategory,
  UpdatedServicesCategory,
} from "@/src/redux/service/AdminApi";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CategoryForm = () => {
  const [functionality, setfunctionality] = useState(true);
  const [nameError, setNameError] = useState("");
  const [updatedCategoryId, setUpdatedCategoryId] = useState(null);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    isActive: true,
  });

  const reset = () => {
    setCategory({ name: "", description: "", isActive: true });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (category.name === "" && category.description === "") {
      return toast.error("please fill all the fields");
    }
    const res = await CreateServicesCategory(category);
    if (res.status) {
      if (res.frontenderror) {
        toast.error(res.msg);
      } else {
        reset();
        toast.success("category successfuly created");
      }
    } else {
      toast.error("Some thing want wrong");
    }
  };

  const handleUpdate = async () => {
    if (category.name === "" && category.description === "") {
      return toast.error("please fill all the fields");
    }

    const res = await UpdatedServicesCategory(updatedCategoryId, category);
    if (res?.status) {
      toast.success("Category Updated successfully");
      reset()
      setUpdatedCategoryId(null)
      setfunctionality(true)
    }
  };

  return (
    <div id="scroll">
      <Toaster />
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Create Service Category</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Add new categories for services here.
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
                  Service Category Details
                </p>
                <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
                  Add details for the new service category.
                </h6>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Category Name <span className="text-red-500">*</span>
                </label>
                {/* <p className="text-xs text-red-500 py-1">{nameError}</p> */}
                <br />
                <TextField
                  className="w-full font-mont"
                  placeholder="Category Name"
                  size="small"
                  name="name"
                  value={category.name}
                  onChange={handleChange}
                  InputProps={{
                    className: "input-class", // You can add a custom CSS class here if needed
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Description
                </label>
                <br />
                <TextField
                  className="w-full font-mont"
                  placeholder="Description"
                  size="small"
                  name="description"
                  value={category.description}
                  onChange={handleChange}
                  InputProps={{
                    className: "input-class", // You can add a custom CSS class here if needed
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6} className="pr-4 mt-4">
                <label className="text-[#344054] text-sm font-medium">
                  Status
                </label>
                <br />
                <select
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  name="isActive"
                  value={category.isActive ? 1 : 0}
                  onChange={(e) =>
                    setCategory({
                      ...category,
                      isActive: e.target.value === "1" ? true : false,
                    })
                  }
                >
                  <option value={1}>Active</option>
                  <option value={0}>Not Active</option>
                </select>
              </Grid>

              <Grid item xs={12} className="">
                <button
                  onClick={functionality ? handleSubmit : handleUpdate}
                  className="bg-[#FFA500] mt-3 text-white font-medium text-xs px-6 py-2 rounded-lg"
                >
                  {functionality ? "Add Category" : "Update Category"}
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container className="mt-14">
        <Grid item xs={12}>
          <ServicesCategoryGrid
            updated={setUpdatedCategoryId}
            setbtn={setfunctionality}
            name={category.name}
            setCategory={setCategory}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryForm;
