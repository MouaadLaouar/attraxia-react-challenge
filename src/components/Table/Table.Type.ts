import { HTMLAttributes } from "react";
import { Ticket } from "../../types/Ticket";

export interface TableType extends HTMLAttributes<HTMLDivElement> {
    Data: Ticket[];
    search?: string;
}
