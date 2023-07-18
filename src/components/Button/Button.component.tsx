import { FC } from "react";
import ButtonProps from "./Button.type";
import { Button as ButtonMui, ThemeProvider } from "@mui/material";
import ButtonTheme from "./Button.style";

const Button: FC<ButtonProps> = ({
    children,
    variant,
    size,
    className,
    href,
    color,
    ...rest
}) => {
    return (
        <ThemeProvider theme={ButtonTheme}>
            <ButtonMui
                href={href}
                className={className}
                size={size}
                variant={variant}
                color={color}
                {...rest}
            >
                {children}
            </ButtonMui>
        </ThemeProvider>
    );
};

export default Button;
