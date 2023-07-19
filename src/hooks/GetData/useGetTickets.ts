import { useState, useEffect } from "react";
import { Ticket } from "../../types/Ticket";

const useGetTickets = (Data: Ticket[]) => {
    const [Sum, setSum] = useState(0);
    const [OpenSum, SetOpenSum] = useState(0);
    const [FeedbackSum, SetFeedbackSum] = useState(0);
    const [ResolvedSum, SetResolvedSum] = useState(0);

    useEffect(() => {
        setSum(Data.length);

        let openCount = 0;
        let feedbackCount = 0;
        let resolvedCount = 0;

        Data.forEach((item) => {
            if (item.status === "open") {
                openCount++;
            } else if (item.status === "feedback") {
                feedbackCount++;
            } else if (item.status === "resolved") {
                resolvedCount++;
            }
        });

        SetOpenSum(openCount);
        SetFeedbackSum(feedbackCount);
        SetResolvedSum(resolvedCount);
    }, [Data]);

    return {
        Sum,
        OpenSum,
        FeedbackSum,
        ResolvedSum,
    };
};

export default useGetTickets;
