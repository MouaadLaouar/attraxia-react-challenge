import { SxProps } from "@mui/material";

export const Title: SxProps = {
    fontSize: "15px",
    fontWeight: 700,
    color: "rgba(40, 110, 241, 1)",
};

export const SubTitle: SxProps = {
    fontSize: "13px",
    fontWeight: 500,
    color: "rgba(85, 85, 85, 1)",
};

export const Table: SxProps = {
    minWidth: 700,
    backgroundColor: "#FFFFFF",
};

export const TableRowHead: SxProps = {
    fontSize: 400,
    backgroundColor: "#FFFFFF",
};

export const TableRowBody: SxProps = {
    textAlign: "left",
};

export const TableCellReplies: SxProps = {
    display: "flex",
    alignItems: "center",
};

export const TablePagination: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px",
    "& > div": {
        display: "flex",
    },
};

export const Button = {
    minWidth: "24px",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    color: "rgba(85, 85, 85, 1)",
    mx: "5px",
    p: 1,
    "&:hover": {
        backgroundColor: "transparent",
    },
};

export const PageActive = {
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "#FFFFFF",
};

export const DataCounter: SxProps = {
    fontWeight: 700,
    fontSize: "12px",
    colors: "rgba(85, 85, 85, 1)",
};
