import { HTMLAttributes } from "react";

export type VariantTextField = "search";

export interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
    variant?: VariantTextField;
    className?: any;
    ref?: any;
}
