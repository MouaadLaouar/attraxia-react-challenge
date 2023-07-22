import { Box, Container, Typography } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar.Components";
import support from "../../assets/Support Forum icon.png";
import { Button } from "@mui/material";
import arrow from "../../assets/arrow.png";
import Data from "../../data/Tickets.json";
import { useState } from "react";
import * as Style from "./Home.Style";
import searchLogo from "../../assets/search.png";

import SearchText from "../../components/TextFIeld/SearchText/SearchText.Component";

// table
import { FormControl, Select, MenuItem } from "@mui/material";
import Table from "../../components/Table/Table.Component";
// hooks
import useGetTickets from "../../hooks/GetData/useGetTickets";
import useFilterTickets from "../../hooks/GetData/useFilterTickets";

const Home = () => {
    const { Sum, OpenSum, FeedbackSum, ResolvedSum } = useGetTickets(Data.data);

    const [SelectValue, setSelectValue] = useState("");
    const [TextFieldValue, setTextFieldValue] = useState("");

    const [Value, setValue] = useState("");

    const { NewData } = useFilterTickets(Data.data, Value);

    const handleChange = (e: any) => {
        setSelectValue(e.target.value);
        setValue(e.target.value);
    };

    return (
        <Box sx={Style.Home}>
            <Container maxWidth="lg" sx={Style.HeroSection}>
                <NavBar />
                <hr />
                <Box component="main">
                    <img src={support} />
                    <Typography variant="h1">Support Forums</Typography>
                    <Typography sx={Style.Text}>
                        Search the topic you need help with in our support
                        forums.
                    </Typography>
                    <Button sx={Style.button}>
                        Browse Forums <img src={arrow} />
                    </Button>
                    <SearchText placeholder="Search" icon={searchLogo} />
                </Box>
            </Container>

            <Container sx={Style.TableSection}>
                <Box sx={Style.AppBar}>
                    <h1>My Tickets</h1>
                    <Box component="div">
                        <FormControl sx={Style.FormControl}>
                            <Select
                                value={SelectValue}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem value="">
                                    <Box sx={Style.round}>
                                        <p>All Tickets</p>
                                        <Box component="span" sx={Style.All}>
                                            {Sum}
                                        </Box>
                                    </Box>
                                </MenuItem>
                                <MenuItem value="open">
                                    <Box sx={Style.round}>
                                        <p>open</p>
                                        <Box component="span" sx={Style.open}>
                                            {OpenSum}
                                        </Box>
                                    </Box>
                                </MenuItem>
                                <MenuItem value="feedback">
                                    <Box sx={Style.round}>
                                        <p>feedback</p>
                                        <Box
                                            component="span"
                                            sx={Style.feedback}
                                        >
                                            {FeedbackSum}
                                        </Box>
                                    </Box>
                                </MenuItem>
                                <MenuItem value="resolved">
                                    <Box sx={Style.round}>
                                        <p>resolved</p>
                                        <Box
                                            component="span"
                                            sx={Style.resolved}
                                        >
                                            {ResolvedSum}
                                        </Box>
                                    </Box>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <SearchText
                            icon={searchLogo}
                            onChange={(e: any) => {
                                setTextFieldValue(e.target.value);
                                setValue(e.target.value);
                            }}
                        />
                    </Box>
                </Box>
                <hr />
                <Table Data={NewData} search={TextFieldValue} />
            </Container>
        </Box>
    );
};

export default Home;
