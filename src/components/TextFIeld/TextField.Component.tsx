import { TextField as TextFieldMui, ThemeProvider } from "@mui/material";
import { FC } from "react";
import InputType from "./TextField.Type";
import TextFieldTheme from "./TextField.Style";

const TextField: FC<InputType> = ({
    className,
    label,
    id,
    type,
    inputProps,
    ...rest
}) => {
    return (
        <ThemeProvider theme={TextFieldTheme}>
            <TextFieldMui
                id={id}
                className={className}
                label={label}
                type={type}
                inputProps={inputProps}
                {...rest}
            />
        </ThemeProvider>
    );
};

export default TextField;
