import * as Style from "./NavBar.Style";
import logo from "../../assets/logo.png";
import { Button, Box } from "@mui/material";

const NavBar = () => {
    return (
        <Box sx={Style.NavBar}>
            <Box>
                <Button variant="text">Support</Button>
                <Button variant="text">Ressources</Button>
            </Box>
            <Box>
                <Button variant="text" sx={Style.SecondButton}>
                    Need Help ?
                </Button>
                <Button variant="contained">
                    <img src={logo} />
                    Get Support
                </Button>
            </Box>
        </Box>
    );
};

export default NavBar;
