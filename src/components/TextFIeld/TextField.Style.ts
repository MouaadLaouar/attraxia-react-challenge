import { styled } from "@mui/material";
import { VariantTextField } from "./TextField.Type";

const variantStyle: Record<string, React.CSSProperties> = {
    search: {
        color: "green",
        backgroundColor: "rgba(242, 242, 242, 1)",
        borderRadius: 23,
    },
};

export const TextFieldStyle = styled("div")<{ variant: VariantTextField }>(
    ({ variant }) => ({
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
        maxWidth: 400,
        padding: 10,
        ...variantStyle[variant],
    }),
);
