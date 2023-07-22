import { FC } from "react";
import { SearchTextType } from "./SearchText.Type";

import { Box } from "@mui/material";
import * as Style from "./Search.Style";

const SearchText: FC<SearchTextType> = ({ placeholder = "Search", icon }) => {
    return (
        <Box sx={Style.TextField}>
            {icon ? <img src={icon} /> : null}
            <input placeholder={placeholder} />
        </Box>
    );
};

export default SearchText;
