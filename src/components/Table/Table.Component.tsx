import { FC, useState, useEffect } from "react";
import * as Style from "./Table.Style";
import { TableType } from "./Table.Type";
import { Ticket } from "../../types/Ticket";
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
import useSort from "../../hooks/GetData/useSort";
import Status from "../Status/Status.Component";
import NotFound from "./NotFound/NotFound.Component";
import Profil from "../../assets/profile.png";

const Table: FC<TableType> = ({ Data, search }) => {
    const tableRowHead: string[] = [
        "Ticket",
        "Status",
        "Created On",
        "Replies",
    ];
    const [button, setbutton] = useState<string[]>([]); // <- the number of pages in the TablePagination

    const rowsPerPage: number = 10; // <- rows per page
    const [page, setPage] = useState<number>(0); // <- which table that i show , per default we show the first table 1

    // the data that i show in the table from { startIndex } to { endIndex }
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const { handleSort } = useSort(Data);

    // const DisplayedData: Ticket[] = DataSort.slice(startIndex, endIndex); // <- the data that will be displayed
    const DisplayedData: Ticket[] = Data.slice(startIndex, endIndex); // <- the data that will be displayed

    // this function is for change the page that we show in the table
    const changePage = (numPage: number) => {
        setPage(numPage);
    };

    // here to refrech how much the number of button depend of number of pages we got
    // and it change every time that the { Data } change
    useEffect(() => {
        const arr: string[] = [];
        for (let i = 0; i < Data.length / rowsPerPage; i++) {
            arr.push(`${i + 1}`);
        }
        setbutton(arr);
    }, [Data]);

    if (Data.length === 0) {
        return <>{search ? <NotFound search={search} /> : <NotFound />}</>;
    } else {
        return (
            <>
                <MuiTable sx={Style.Table}>
                    <TableHead>
                        <TableRow sx={Style.TableRowHead}>
                            {tableRowHead.map((item: string) => (
                                <TableCell
                                    key={tableRowHead.indexOf(item)}
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => {
                                        handleSort(item);
                                    }}
                                >
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
                    </Box>
                </Box>
            </>
        );
    }
};

export default Table;
