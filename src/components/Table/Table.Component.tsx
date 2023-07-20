import { FC } from "react";
import { TableType } from "./Table.Type";
import { Ticket } from "../../types/Ticket";
import NotFound from "./NotFound/NotFound.Component";
import "./index.css";
import {
    Table as MuiTable,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from "@mui/material";
import Status from "../Status/Status.Component";
import Profil from "../../assets/profile.png";

const Table: FC<TableType> = ({ Data, search }) => {
    console.log(Data);
    if (Data.length === 0) {
        return <>{search ? <NotFound search={search} /> : <NotFound />}</>;
    } else {
        return (
            <>
                <MuiTable sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow sx={{ fontSize: 400 }}>
                            <TableCell>Ticket</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created On</TableCell>
                            <TableCell>Replies</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((row: Ticket) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <p className="title">{row.title}</p>
                                    <p>{row.subtitle}</p>
                                </TableCell>
                                <TableCell align="left">
                                    <Status status={row.status} />
                                </TableCell>
                                <TableCell align="left">
                                    {row.date.month} @ {row.date.hours}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    align="left"
                                >
                                    <img className="Profil" src={Profil} />
                                    <p>Last By {row.replies[0].name}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </>
        );
    }
};

export default Table;
