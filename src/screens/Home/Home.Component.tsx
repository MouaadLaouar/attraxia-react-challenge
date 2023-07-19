import { Container } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar.Components";
import "./Home.css";
import support from "../../assets/Support Forum icon.png";
import Button from "../../components/Button";
import arrow from "../../assets/arrow.png";
import TextField from "../../components/TextFIeld";

const Home = () => {
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
                    <TextField label="hello" variant="outlined" />
                </main>
            </Container>

            <Container sx={{ backgroundColor: "#FFFFFF", marginTop: "30px" }}>
                hello
            </Container>
        </div>
    );
};

export default Home;
