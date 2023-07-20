import { HTMLAttributes } from "react";

export interface TableType extends HTMLAttributes<HTMLDivElement> {
    Data?: any;
    search?: string;
}
