import { SxProps } from "@mui/material";

export const TextField: SxProps = {
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    p: "10px",
    "& img": {
        marginRight: 2,
    },
    "& input": {
        border: "none",
        backgroundColor: "transparent",
        "&:focus": {
            outline: "none",
        },
    },
};
