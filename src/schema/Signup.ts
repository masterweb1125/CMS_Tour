import * as Yup from "yup";

export const SignUp_validate = Yup.object().shape({
    firstName: Yup.string()
        .required("Username is required")
        .min(3, "username must be at least 3 characters long")
        .max(20, "username must not exceed 20 characters"),

    lastName: Yup.string()
        .optional(),

    company_name: Yup.string().optional(),

    email: Yup.string()
        .trim()
        .email('Please enter valid email')
        .required('Email Address is Required'),

    Facial_no: Yup.string().optional(),


    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must not exceed 12 characters"),

    country: Yup.string().optional(),
    office_no: Yup.string().optional(),
    cell_phone: Yup.string().optional(),
    occupation: Yup.string().optional(),

    // confirmPassword: Yup.string()
    //     .required("Confirm Password is required")
    //     .oneOf([Yup.ref("password")], "Password does not match"),


});

