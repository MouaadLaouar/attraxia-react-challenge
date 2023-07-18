import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
    variant?: "text" | "text1" | "text2" | "contained";
    className?: any;
    childrean?: any;
    href?: any;
    color?: any
}

export default ButtonProps;
