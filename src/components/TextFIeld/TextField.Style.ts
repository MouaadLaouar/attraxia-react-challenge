import { createTheme } from "@mui/material";

const TextFieldTheme = createTheme({
    components: {
        MuiTextField: {
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        backgroundColor: "rgb(242, 242, 242)",
                        borderRadius: "23px",
                    },
                },
            ],
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    display: "none",
                },
                input: {
                    display: "none",
                },
            },
        },
    },
});

export default TextFieldTheme;
