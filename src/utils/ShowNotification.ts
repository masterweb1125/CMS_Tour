"use client";
import toast from "react-hot-toast";

export const ToastNotification = (NotificationType: string, message: string) => {

    if (NotificationType === "success") {
        toast.success(message, {
            style: { width: "auto", height: "auto" },
            duration: 3000,
        });
    } else if (NotificationType === "error") {
        toast.error(message, {
            style: { width: "auto", height: "auto" },
            duration: 3000,
        });
    }

}