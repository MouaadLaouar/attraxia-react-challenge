import { NotFoundType } from "./NotFound.Type";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import * as Style from "./NotFound.Style";
import IMG from "../../../assets/NoTickets.png";
import IMG2 from "../../../assets/NotTickets2.png";

const NotFound: FC<NotFoundType> = ({ search }) => {
    return (
        <>
            {search ? (
                <Box sx={Style.NotFound}>
                    <img src={IMG2} />
                    <Typography variant="h1">
                        No tickets found for &quot;{search}&quot;
                    </Typography>
                    <Typography>
                        Please adjust your search term and try again.
                    </Typography>
                </Box>
            ) : (
                <Box sx={Style.NotFound}>
                    <img src={IMG} />
                    <Typography variant="h1">No Tickets Found!</Typography>
                    <Typography>
                        Your support tickets or feature requests will appear
                        here.
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default NotFound;
