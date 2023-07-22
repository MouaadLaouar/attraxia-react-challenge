import { TextFieldProps, BoxProps } from "@mui/material";

export type SearchTextType = TextFieldProps &
    BoxProps & {
        placeholder?: string;
        icon?: any;
    };
