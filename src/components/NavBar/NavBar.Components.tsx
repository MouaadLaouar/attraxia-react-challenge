import Button from "../Button";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div>
                <Button variant="text">Support</Button>
                <Button variant="text">Ressources</Button>
            </div>
            <div>
                <Button variant="text1">Need Help ?</Button>
                <Button variant="contained">
                    <img className="logo" src={logo} />
                    Get Support
                </Button>
            </div>
        </div>
    );
};

export default NavBar;
