import { StatusStyle } from "./Status.Style";
import { StatusProps } from "./Status.Type";
import { FC } from "react";
import "./index.css";

const Status: FC<StatusProps> = ({ state = "open", className }) => {
    return (
        <StatusStyle className={className} state={state}>
            <p>{state}</p>
        </StatusStyle>
    );
};

export default Status;
