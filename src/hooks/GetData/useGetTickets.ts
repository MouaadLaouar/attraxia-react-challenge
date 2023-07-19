import { useState } from "react";
import { Ticket } from "../../types/Ticket";

const useGetTickets = (Data: Ticket[]) => {
    const [Sum, setSum] = useState(0);
    const [OpenSum, SetOpenSum] = useState(0);
    const [FeedbackSum, SetFeedbackSum] = useState(0);
    const [ResolvedSum, SetResolvedSum] = useState(0);

    setSum(Data.length);

    // get the sum of the open
    for (let i = 0; i < Data.length; i++) {
        const item = Data[i];
        if (item.status === "open") {
            SetOpenSum(OpenSum + 1);
        }
    }

    // get the sum of the Feedback
    for (let i = 0; i < Data.length; i++) {
        const item = Data[i];
        if (item.status === "feedback") {
            SetFeedbackSum(FeedbackSum + 1);
        }
    }

    // get the sum of the resolved
    for (let i = 0; i < Data.length; i++) {
        const item = Data[i];
        if (item.status === "resolved") {
            SetResolvedSum(ResolvedSum + 1);
        }
    }

    return {
        Sum,
        OpenSum,
        FeedbackSum,
        ResolvedSum,
    };
};

export default useGetTickets;
