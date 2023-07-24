/* eslint-disable indent */
import { useState, useEffect } from "react";
import { Ticket } from "../../types/Ticket";

const useSort = (Data: Ticket[]) => {
    const [DataSorted, setDataSorted] = useState<Ticket[]>([]);
    const [order, setorder] = useState({
        Ticket: "asc",
        Replies: "asc",
    });

    const handleSort = (Value: string) => {
        // eslint-disable-next-line prefer-const
        let arr: Ticket[] = [];

        setDataSorted(arr);
        switch (Value) {
            case "Ticket":
                if (order.Ticket === "asc") {
                    arr = Data.sort((a, b) => {
                        return a.title.toUpperCase() > b.title.toUpperCase()
                            ? -1
                            : 1;
                    });
                    setorder({
                        Ticket: "desc",
                        Replies: "asc",
                    });
                } else if (order.Ticket === "desc") {
                    arr = Data.sort((a, b) => {
                        return a.title.toUpperCase() > b.title.toUpperCase()
                            ? 1
                            : -1;
                    });
                    setorder({
                        Ticket: "asc",
                        Replies: "asc",
                    });
                }
                break;
            case "Replies":
                if (order.Replies === "asc") {
                    arr = Data.sort((a, b) => {
                        return a.replies[0].name.toUpperCase() >
                            b.replies[0].name.toUpperCase()
                            ? -1
                            : 1;
                    });
                    setorder({
                        Ticket: "asc",
                        Replies: "desc",
                    });
                } else if (order.Replies === "desc") {
                    arr = Data.sort((a, b) => {
                        return a.replies[0].name.toUpperCase() >
                            b.replies[0].name.toUpperCase()
                            ? 1
                            : -1;
                    });
                    setorder({
                        Ticket: "asc",
                        Replies: "asc",
                    });
                }
                break;
        }
    };

    return { DataSorted, handleSort };
};

export default useSort;
