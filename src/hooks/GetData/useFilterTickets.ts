import { useState } from "react";
import { Ticket } from "../../types/Ticket";

const useFilterTickets = (Data: Ticket[], status: string) => {
    const [NewData, setNewData] = useState<Ticket[]>([]);

    for (let i = 0; i < Data.length; i++) {
        const item = Data[i];
        if (item.status === status) {
            setNewData((prevItem) => [...prevItem, item]);
        }
    }

    return NewData;
};

export default useFilterTickets;
