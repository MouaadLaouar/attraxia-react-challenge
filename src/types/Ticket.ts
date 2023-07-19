export interface Ticket {
    id: number;
    title: string;
    subtitle: string;
    status: "open" | "feedback" | "resolved" | string;
    date: {
        day: number;
        month: string;
        hours: number;
    };
    replies: {
        img: string;
        name: string;
    }[];
}
