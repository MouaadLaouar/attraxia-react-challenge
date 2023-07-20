import { Container } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar.Components";
import "./Home.css";
import support from "../../assets/Support Forum icon.png";
import Button from "../../components/Button";
import arrow from "../../assets/arrow.png";
import Status from "../../components/Status";
import TextField from "../../components/TextFIeld/TextField.Component";
import Data from "../../data/Tickets.json";
import { useState } from "react";

// table
import { FormControl, Select, MenuItem } from "@mui/material";

// hooks
import useGetTickets from "../../hooks/GetData/useGetTickets";
import useFilterTickets from "../../hooks/GetData/useFilterTickets";

const Home = () => {
    const { Sum, OpenSum, FeedbackSum, ResolvedSum } = useGetTickets(Data.data);
    // console.log({ Sum, OpenSum, FeedbackSum, ResolvedSum });
    // const hello = useFilterTickets(Data.data, "open");
    // console.log(hello);
    const [value, setvalue] = useState("");
    const filteredData = useFilterTickets(Data.data, value);

    const handleChange = (e: any) => {
        setvalue(e.target.value);
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

            <Container sx={{ backgroundColor: "#FFFFFF", marginTop: "30px" }}>
                <div className="AppBar">
                    <h1>My Tickets</h1>
                    <div>
                        <FormControl sx={{ marginRight: 3 }}>
                            <Select
                                value={value}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem value="">
                                    <em>All - {Sum}</em>
                                </MenuItem>
                                <MenuItem value="open">
                                    open - {OpenSum}
                                </MenuItem>
                                <MenuItem value="feedback">
                                    feedback - {FeedbackSum}
                                </MenuItem>
                                <MenuItem value="resolved">
                                    resolved - {ResolvedSum}
                                </MenuItem> 
                            </Select>
                        </FormControl>
                        <TextField />
                    </div>
                </div>
                <hr />
            </Container>
        </div>
    );
};

export default Home;
