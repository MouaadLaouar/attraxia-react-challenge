import { FC } from "react";
import { TextFieldStyle } from "./TextField.Style";
import { TextFieldProps } from "./TextField.Type";
import logo from "../../assets/search.png";
import "./TextField.css";

const TextField: FC<TextFieldProps> = ({ className, variant = "search" }) => {
    return (
        <TextFieldStyle className={className} variant={variant}>
            {variant === "search" ? <img src={logo} /> : ""}
            <input className="Input" placeholder={variant} />
        </TextFieldStyle>
    );
};

export default TextField;
