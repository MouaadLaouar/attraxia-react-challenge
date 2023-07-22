import { FC } from "react";
import * as Style from "./Status.Style";
import { StatusProps } from "./Status.Type";
import { Box, Typography } from "@mui/material";

const Status: FC<StatusProps> = ({ status = "open" }) => {
    return (
        <Box
            sx={[
                Style.Status,
                status === "open" ? Style.open : null,
                status === "resolved" ? Style.resolved : null,
                status === "feedback" ? Style.feedback : null,
            ]}
        >
            <Typography>{status}</Typography>
        </Box>
    );
};

export default Status;
