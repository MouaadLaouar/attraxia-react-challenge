import { FC } from "react";
import * as Style from "./Table.Style";
import { TableType } from "./Table.Type";
import { Ticket } from "../../types/Ticket";
import NotFound from "./NotFound/NotFound.Component";
import Status from "../Status/Status.Component";
import Profil from "../../assets/profile.png";
import {
    Table as MuiTable,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TablePagination,
    Typography,
} from "@mui/material";

const Table: FC<TableType> = ({ Data, search }) => {
    const tableRowHead = ["Ticket", "Status", "Created On", "Replies"];
    if (Data.length === 0) {
        return <>{search ? <NotFound search={search} /> : <NotFound />}</>;
    } else {
        return (
            <>
                <MuiTable sx={Style.Table}>
                    <TableHead>
                        <TableRow sx={Style.TableRowHead}>
                            {tableRowHead.map((item) => (
                                <TableCell key={tableRowHead.indexOf(item)}>
                                    {item}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((row: Ticket) => (
                            <TableRow sx={Style.TableRowBody} key={row.id}>
                                <TableCell>
                                    <Typography sx={Style.Title}>
                                        {row.title}
                                    </Typography>
                                    <Typography sx={Style.SubTitle}>
                                        {row.subtitle}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Status status={row.status} />
                                </TableCell>
                                <TableCell>
                                    {row.date.month} @ {row.date.hours}
                                </TableCell>
                                <TableCell sx={Style.TableCellReplies}>
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
