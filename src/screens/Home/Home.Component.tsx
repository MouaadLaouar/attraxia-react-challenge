import { Box, Container } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar.Components";
import "./Home.css";
import support from "../../assets/Support Forum icon.png";
import Button from "../../components/Button";
import arrow from "../../assets/arrow.png";
import TextField from "../../components/TextFIeld/TextField.Component";
import Data from "../../data/Tickets.json";
import { useState } from "react";

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
        <div className="Home">
            <Container maxWidth="lg" sx={{ backgroundColor: "#FFFFFF" }}>
                <NavBar />
                <hr />
                <main>
                    <img src={support} />
                    <h1>Support Forums</h1>
                    <p>
                        Search the topic you need help with in our support
                        forums.
                    </p>
                    <Button variant="text2" size="sm">
                        Browse Forums <img className="arrow" src={arrow} />
                    </Button>
                    <TextField />
                </main>
            </Container>

            <Container sx={{ backgroundColor: "#FFFFFF", marginY: "50px" }}>
                <div className="AppBar">
                    <h1>My Tickets</h1>
                    <div>
                        <FormControl sx={{ marginRight: 3, width: "150px" }}>
                            <Select
                                value={SelectValue}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem value="">
                                    <div className="round All">
                                        <p>All</p> <span>{Sum}</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value="open">
                                    <div className="round open">
                                        <p>open</p>
                                        <span>{OpenSum}</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value="feedback">
                                    <div className="round feedback">
                                        <p>feedback</p>
                                        <span>{FeedbackSum}</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value="resolved">
                                    <div className="round resolved">
                                        <p>resolved</p>
                                        <span>{ResolvedSum}</span>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            onChange={(e: any) => {
                                setTextFieldValue(e.target.value);
                                setValue(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <hr />
                <Table Data={NewData} search={TextFieldValue} />
            </Container>
        </div>
    );
};

export default Home;
