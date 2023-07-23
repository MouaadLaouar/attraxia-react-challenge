import { useState } from "react";
import * as Style from "./Home.Style";
import {
    Box,
    Container,
    Typography,
    Button,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import Data from "../../data/Tickets.json";
import NavBar from "../../components/NavBar/NavBar.Components";
import SearchText from "../../components/TextFIeld/SearchText/SearchText.Component";
import Table from "../../components/Table/Table.Component";
import useGetTickets from "../../hooks/GetData/useGetTickets";
import useFilterTickets from "../../hooks/GetData/useFilterTickets";
import arrow from "../../assets/arrow.png";
import searchLogo from "../../assets/search.png";
import support from "../../assets/Support Forum icon.png";

const Home = () => {
    const { Sum, OpenSum, FeedbackSum, ResolvedSum } = useGetTickets(Data.data);
    const menuItem = [
        {
            name: "All Tickets",
            value: "",
            sx: Style.All,
            cpt: Sum,
        },
        {
            name: "open",
            value: "open",
            sx: Style.open,
            cpt: OpenSum,
        },
        {
            name: "feedback",
            value: "feedback",
            sx: Style.feedback,
            cpt: FeedbackSum,
        },
        {
            name: "resolved",
            value: "resolved",
            sx: Style.resolved,
            cpt: ResolvedSum,
        },
    ];

    const [SelectValue, setSelectValue] = useState<string>("");
    const [TextFieldValue, setTextFieldValue] = useState<string>("");
    const [Value, setValue] = useState<string>("");

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
                                {menuItem.map((item) => (
                                    <MenuItem
                                        key={menuItem.indexOf(item)}
                                        value={item.value}
                                    >
                                        <Box sx={Style.round}>
                                            <p>{item.name}</p>
                                            <Box component="span" sx={item.sx}>
                                                {item.cpt}
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                ))}
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
