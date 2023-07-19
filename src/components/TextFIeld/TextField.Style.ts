import { styled } from "@mui/material";
import { VariantTextField } from "./TextField.Type";

const variantStyle: Record<string, React.CSSProperties> = {
    search: {
        color: "green",
    },
};

export const TextFieldStyle = styled("input")<{ variant: VariantTextField }>(
    ({ variant }) => ({
        ...variantStyle[variant],
    }),
);
