"use client";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import {
  GetReferralUser,
  GetUserById,
  GetUserReferral,
  UpdateReferralUser,
} from "@/src/redux/service/AdminApi";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const InputClasses = "font-mont text-xs rounded-lg hover:outline-none";

export default function Referrals() {
  // const [user, setUser] = useState(null);
  const [referral, setReferral] = useState({
    userId: "",
    referral_amount: 0,
    isActive: false,
  });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const fetch = async () => {
    const res = await GetReferralUser();
    setUsers(res.data);
  };

  const fetchUser = async () => {
    if (selectedUser) {
      const userReferral = await GetUserReferral(selectedUser);
      if (userReferral.status) {
        const { userId, referral_amount, isActive } = userReferral.data;
        setReferral({
          userId: userId,
          referral_amount: referral_amount,
          isActive: isActive,
        });
      }
    }
  };
  const reset = () => {
    setReferral({ userId: "", referral_amount: 0, isActive: false });
    setSelectedUser("");
  };

  const handleUpdateReferralUser = async () => {
    if (selectedUser === "") {
      return toast.error("Please fill all fields");
    }
    const res = await UpdateReferralUser(referral.userId, referral);
    if (res.status) {
      // setUser(res.data);
      setReferral(res.data);
      toast.success("Referral successfully updated");
    }
    reset();
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    fetchUser();
  }, [selectedUser]);

  return (
    <div>
      <Toaster />
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Referrals</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Fund any wallet quickly. You can enter a negative amount to deduct
              from wallet.
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
                  Referral Details
                </p>
                <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
                  Select user which you want to add something or deduct
                </h6>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Referral Incentive Beneficiary{" "}
                  <span className="text-red-500">*</span>
                </label>
                <br />
                <select
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  onChange={(e) => {
                    setSelectedUser(e.target.value);
                    setReferral({ ...referral, userId: e.target.value });
                  }}
                  value={selectedUser}
                >
                  <option disabled>Referral Incentive Beneficiary</option>
                  {users.length !== 0 &&
                    users.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name} - {item.email} - {item.rolename}
                      </option>
                    ))}
                </select>
              </Grid>

              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Amount <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  className="w-full font-mont"
                  placeholder="Percentage"
                  size="small"
                  type="Number"
                  onChange={(e) =>
                    setReferral({
                      ...referral,
                      referral_amount: e.target.value,
                    })
                  }
                  value={referral.referral_amount}
                  InputProps={{
                    className: InputClasses,
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
                  value={referral ? (referral.isActive ? 1 : 0) : 0}
                  onChange={(e) =>
                    setReferral({
                      ...referral,
                      isActive: e.target.value == 1 ? true : false,
                    })
                  }
                >
                  <option value={1}>Active</option>
                  <option value={0}>Not Active</option>
                </select>
              </Grid>

              <Grid item xs={12}>
                <button
                  onClick={handleUpdateReferralUser}
                  className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg mt-5"
                >
                  Add to system
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
