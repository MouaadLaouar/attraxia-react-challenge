import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "transprent",
                    },
                    boxShadow: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                },
                contained: {
                    backgroundColor: "rgba(40, 110, 241, 1)",
                    fontWeight: 700,
                    fontSize: "13px",
                    borderRadius: "4px",
                },
                text: {
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 1)",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& fieldset": {
                        borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                        borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                    },
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                },
            },
        },
    },
});

export default theme;
