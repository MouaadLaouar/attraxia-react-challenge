import { useState, useEffect } from "react";
import { Ticket } from "../../types/Ticket";

const useFilterTickets = (Data: Ticket[], Filter: string) => {
    const [NewData, setNewData] = useState<Ticket[]>([]);

    useEffect(() => {
        // eslint-disable-next-line prefer-const
        let arr: Ticket[] = [];

        const isPredefinedFilter =
            Filter === "open" || Filter === "feedback" || Filter === "resolved";

        arr = Data.filter((item) => {
            if (isPredefinedFilter) {
                return item.status === Filter;
            } else if (Filter === "") {
                return item;
            } else {
                return item.title.includes(Filter);
            }
        });

        setNewData(arr);
    }, [Data, Filter]);

    return { NewData };
};

export default useFilterTickets;
