import { styled } from "@mui/material";
import { VariantStatus } from "./Status.Type";

const variantStyle: Record<string, React.CSSProperties> = {
    open: {
        backgroundColor: "rgba(40, 110, 241, 1)",
    },
    resolved: {
        backgroundColor: "rgba(82, 209, 148, 1)",
    },
    feedback: {
        backgroundColor: "rgba(144, 38, 177, 1)",
    },
};

export const StatusStyle = styled("div")<{ status: VariantStatus }>(
    ({ status }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 10px",
        borderRadius: 14,
        fontSize: 14,
        fontWeight: 400,
        fontFamily: "Robot",
        color: "rgba(255, 255, 255, 1)",
        ...variantStyle[status],
    }),
);
