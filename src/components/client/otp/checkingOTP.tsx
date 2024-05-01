import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";

export default function Testotp({ otp, setOtp }:any) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768; // Adjust the breakpoint as needed

  const customInputStyle:any = {
    width: isMobile ? "2rem" : "3.625rem", // Adjust the width for mobile screens
    height: isMobile ? "2rem" : "3.625rem", // Adjust the height for mobile screens
    fontSize: isMobile ? "1rem" : "1.2rem", // Adjust the font size for mobile screens
    borderRadius: isMobile ? "0.25rem" : "0.3125rem", // Adjust the border radius for mobile screens
    margin: isMobile ? "0.125rem" : "0.25rem", // Adjust the margin for mobile screens
    textAlign: "center",
    outline: "none",
    backgroundColor: "#F0F6FF",
  };

  const customContainerStyle = {
    display: "flex",
    // justifyContent: 'space-between',
    alignItems: "center",
  };

  // Update windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props, index) => (
          <input {...props} style={customInputStyle} />
        )}
        containerStyle={customContainerStyle}
      />
    </div>
  );
}
