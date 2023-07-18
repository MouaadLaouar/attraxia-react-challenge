import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        text1: true;
        text2: true;
    }
    interface ButtonPropsSizeOverrides {
        sm: true;
        md: true;
        lg: true;
    }
}

const ButtonTheme = createTheme({
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
            },
            variants: [
                {
                    props: { variant: "text" },
                    style: {
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "rgba(0, 0, 0, 1)",
                    },
                },
                {
                    props: { variant: "text1" },
                    style: {
                        color: "rgba(85, 85, 85, 1)",
                        fontSize: "13px",
                        fontWeight: "400",
                    },
                },
                {
                    props: { variant: "text2" },
                    style: {
                        color: "rgba(40, 110, 241, 1)",
                        fontWeight: "700",
                        fontSize: "11px",
                    },
                },
                {
                    props: { variant: "contained" },
                    style: {
                        backgroundColor: "rgba(40, 110, 241, 1)",
                        fontWeight: 700,
                        fontSize: "13px",
                    },
                },
                {
                    props: { size: "lg" },
                    style: {
                        fontSize: "30px",
                    },
                },
                {
                    props: { size: "md" },
                    style: {
                        fontSize: "20px",
                    },
                },
                {
                    props: { size: "sm" },
                    style: {
                        fontSize: "15px",
                    },
                },
            ],
        },
    },
});

export default ButtonTheme;
