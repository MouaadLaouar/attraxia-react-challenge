import { StatusStyle } from "./Status.Style";
import { StatusProps } from "./Status.Type";
import { FC } from "react";

const Status: FC<StatusProps> = ({ status = "open", className }) => {
    return (
        <StatusStyle className={className} status={status}>
            <p>{status}</p>
        </StatusStyle>
    );
};

export default Status;
