import "./NavBar.css";
import * as Style from "./NavBar.Style";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div>
                <Button variant="text">Support</Button>
                <Button variant="text">Ressources</Button>
            </div>
            <div>
                <Button variant="text" sx={Style.SecondButton}>
                    Need Help ?
                </Button>
                <Button variant="contained">
                    <img className="logo" src={logo} />
                    Get Support
                </Button>
            </div>
        </div>
    );
};

export default NavBar;
