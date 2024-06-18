"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Divider } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { LogoTransparent } from "@/src/utils/images/images";
import Image from "next/image";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <Box className="flex flex-col p-6 bg-white rounded-lg shadow-md w-96 mx-auto mt-10">
      <Image
        src={LogoTransparent}
        className="object w-16 self-center mb-4"
        alt="Registration Image"
      />
      <Typography variant="h5" className="mb-2">Sign up</Typography>
      <Typography className="mb-6">Start your 30-day free trial.</Typography>
      
      <form onSubmit={handleSubmit} className="w-full">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name*</label>
        <TextField
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className="mb-4"
        />
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email*</label>
        <TextField
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className="mb-4"
        />
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password*</label>
        <TextField
          id="password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className="mb-1"
        />
        <Typography variant="caption" className="block mb-4">
          Must be at least 8 characters.
        </Typography>
        <Button type="submit" variant="contained" fullWidth className="mb-4 bg-primary py-2 mx-4">
          Get started
        </Button>
      </form>
      
      <Divider className="w-full mb-4">OR</Divider>
      
      <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth className="mb-4">
        Sign up with Google
      </Button>
      
      <Typography className="mt-4 text-center">
        Already have an account? <a href="/login" className="text-blue-500">Log in</a>
      </Typography>
    </Box>
  );
};

export default SignUpForm;
