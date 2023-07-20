import { FC } from "react";
import { TableType } from "./Table.Type";
import NotFound from "./NotFound/NotFound.Component";

const Table: FC<TableType> = ({ Data, search }) => {
    console.log(Data);
    if (Data.length === 0) {
        return (
            <>
                {search ? (<NotFound search={ search }/>) : (<NotFound/>)}
            </>
        );
    }
    return <></>;
};

export default Table;
