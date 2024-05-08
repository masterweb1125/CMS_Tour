export const GenerateOTP = () => {
    // Generate a random 6-digit OTP
    const otp = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return otp;
}