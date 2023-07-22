import { SxProps } from "@mui/material";

export const button: SxProps = {
    color: "rgba(40, 110, 241, 1)",
    fontWeight: "700",
    "& > img": {
        margin: "0px 5px",
    },
};

export const Home: SxProps = {
    marginTop: "100px",
};

export const Text: SxProps = {
    fontWeight: 400,
    fontSize: "15px",
    textAlign: "center",
    color: "rgba(85, 85, 85, 1)",
};

export const HeroSection: SxProps = {
    backgroundColor: "#FFFFFF",
    "& > hr": {
        borderColor: "rgba(237, 237, 237, 1)",
    },
    "& > main": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "80px 0px",
    },
    "& > main > *": {
        margin: "10px 0px",
    },
    "& > main > h1": {
        fontWeight: 700,
        fontSize: "24px",
        color: "rgba(0, 0, 0, 1)",
    },
};

export const TableSection: SxProps = {
    marginY: "50px",
    "& > hr": {
        borderColor: "rgba(237, 237, 237, 1)",
    },
};

export const FormControl: SxProps = {
    marginRight: 3,
    width: "150px",
};

export const AppBar: SxProps = {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    "& > h1": {
        fontSize: "16px",
    },
    "& > div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
};

export const round: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontWeight: 500,
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)",
    "& > span": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        fontSize: "11px",
        fontWeight: 700,
    },
};

export const All: SxProps = {
    backgroundColor: "rgba(230, 230, 230, 1)",
    color: "rgba(0, 0, 0, 1)",
};

export const open: SxProps = {
    backgroundColor: "rgba(40, 110, 241, 1)",
    color: "rgba(255, 255, 255, 1)",
};

export const feedback: SxProps = {
    backgroundColor: "rgba(144, 38, 177, 1)",
    color: "rgba(255, 255, 255, 1)",
};

export const resolved: SxProps = {
    backgroundColor: "rgba(82, 209, 148, 1)",
    color: "rgba(255, 255, 255, 1)",
};
