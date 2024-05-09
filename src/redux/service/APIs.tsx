import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setUserData } from "../features/User.Slice";

export const BASE_API: any = "http://localhost:8080";
export const API_DOMAIN = axios.create({ baseURL: BASE_API });

export const EmailVerification = async (
  dispatch: Dispatch,
  email: any,
  OTP: any
): Promise<any> => {
  try {
    const res = await API_DOMAIN.post(`/api/v1/auth`, {
      email: email,
      OTP: OTP,
    });
    console.log("recieved response for sending otp through email: ", res);
    // return res.data;
  } catch (err: any) {
    return err?.response;
  }
};

// creating new user
export const CreatingUser = async (dispatch: Dispatch, userData: any): Promise<any> => {
    try {
        const res = await API_DOMAIN.post(`/api/v1/auth/signup`, userData);
            dispatch(setUserData(res.data?.data));
        return res.status;
    } catch (err: any) {
        console.log("create a user error: ", err?.response);
        return err?.response?.status;

    }
};

export const LoginAPI = async (dispatch: Dispatch, userData: any) => {
  try {
    const res = await API_DOMAIN.post(`/api/v1/auth/signin`, userData);
    dispatch(setUserData(res.data?.data));
    return res.status;
  } catch (err: any) {
    console.log("Something went wrong while login", err?.response);
    return err?.response?.status;
  }
};

// Retrieving a specific user record
export const RetrievingUser = async (
  dispatch: Dispatch,
  userUID: any
): Promise<any> => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/user/${userUID}`);
    console.log("response come from API: ", res);
    dispatch(setUserData(res.data.data));
    console.log("res.data: ", res.data);
    return res.data;
  } catch (err: any) {
    console.log("Something went wrong while getting user info");
    return err?.response;
  }
};
