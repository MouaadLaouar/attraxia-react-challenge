import { SxProps } from "@mui/material";

export const NotFound: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "80px 0px",
    "& > img": {
        height: "150px",
        width: "150px",
    },
    "& > *": {
        margin: "10px 0px",
    },
    "& > h1": {
        fontWeight: 700,
        fontSize: "24px",
        textAlign: "center",
        color: "rgba(51, 51, 51, 1)",
    },
};
