import { FC, useState } from "react";
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
    Typography,
    Box,
    Button,
} from "@mui/material";

const Table: FC<TableType> = ({ Data, search }) => {
    const tableRowHead = ["Ticket", "Status", "Created On", "Replies"];
    const button = ["1", "2", "3"];

    ////
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const DisplayedData = Data.slice(startIndex, endIndex);
    ////

    const changePage = (numPage: number) => {
        setPage(numPage);
    };

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
                        {DisplayedData.map((row: Ticket) => (
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
                                    <img src={Profil} />
                                    <p>Last By {row.replies[0].name}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
                <Box sx={Style.TablePagination}>
                    <Box component="div">
                        {button.map((item, index) => (
                            <Button
                                key={index}
                                sx={[
                                    Style.Button,
                                    page === index ? Style.PageActive : null,
                                ]}
                                value={index}
                                onClick={() => {
                                    changePage(index);
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Box sx={Style.DataCounter}>
                            {startIndex} - {endIndex} of {Data.length}
                        </Box>
                        <Box></Box>
                    </Box>
                </Box>
            </>
        );
    }
};

export default Table;
