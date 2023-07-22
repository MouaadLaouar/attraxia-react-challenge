import { SxProps } from "@mui/material";

export const NavBar: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 20px",
    "& div": {
        display: "flex",
    },
    "& img": {
        marginRight: "5px",
    },
};

export const SecondButton: SxProps = {
    color: "rgba(85, 85, 85, 1)",
    fontSize: "13px",
    fontWeight: "400",
    marginRight: 2,
};
