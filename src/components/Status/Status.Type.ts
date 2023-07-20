export type VariantStatus = "open" | "resolved" | "feedback";

export interface StatusProps {
    status?: VariantStatus | any;
    className?: any;
}
