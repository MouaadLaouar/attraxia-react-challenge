import { useState, useEffect } from "react";
import { Ticket } from "../../types/Ticket";

const useFilterTickets = (Data: Ticket[], Filter: string) => {
    const [NewData, setNewData] = useState<Ticket[]>([]);

    useEffect(() => {
        // eslint-disable-next-line prefer-const
        let arr: Ticket[] = [];

        Data.forEach((item) => {
            if (Filter === ("" || "open" || "feedback" || "resolved")) {
                if (item.status === Filter) {
                    arr.push(item);
                } else {
                    arr.push(item);
                }
            } else {
                if (item.title.includes(Filter)) {
                    arr.push(item);
                }
            }
        });

        setNewData(arr);
    }, [Data, Filter]);

    return NewData;
};

export default useFilterTickets;
