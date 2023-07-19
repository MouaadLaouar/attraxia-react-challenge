import { FC } from "react";
import { TextFieldStyle } from "./TextField.Style";
import { TextFieldProps } from "./TextField.Type";

const TextField: FC<TextFieldProps> = ({ className, variant = "search" }) => {
    return <TextFieldStyle className={className} variant={variant}/>;
};

export default TextField;
