import { Ticket } from "../../types/Ticket";

export interface TableType {
    Data: Ticket[];
    search?: string;
}
