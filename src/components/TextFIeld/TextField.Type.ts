import React from "react";
import {
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
} from "@mui/material";

interface Input extends React.HTMLAttributes<HTMLInputElement> {
    className?: any;
    label?: any;
    childrean?: any;
    id?: any;
    type?: any;
    inputProps?: any;
}

type InputType = Input &
    (FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps);

export default InputType;
