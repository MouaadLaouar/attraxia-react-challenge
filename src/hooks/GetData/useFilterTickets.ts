import { useState, useEffect } from "react";
import { Ticket } from "../../types/Ticket";

const useFilterTickets = (Data: Ticket[], status: string) => {
    const [NewData, setNewData] = useState<Ticket[]>([]);

    useEffect(() => {
        // eslint-disable-next-line prefer-const
        let arr: Ticket[] = [];

        Data.forEach((item) => {
            if (item.status === status) {
                arr.push(item);
            }
        });

        setNewData(arr);
    }, []);

    return NewData;
};

export default useFilterTickets;
