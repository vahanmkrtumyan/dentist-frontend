import * as React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination
} from "@material-ui/core";

const PaginationTable = ({thead, bodyData}) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
    };

    return (
        <div className="w-full overflow-auto">
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        {thead?.map((name) => {
                            return <TableCell className="px-0" key={name}>{name}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bodyData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((tableRow, index) => {
                                console.log(bodyData)
                                return (
                                    <TableRow key={index}>
                                        {thead.map((thName, ind) => {
                                            return (
                                                <React.Fragment key={ind}>
                                                    {tableRow[thName]}
                                                </React.Fragment>
                                            )
                                        })}
                                    </TableRow>
                                )
                            }
                        )}
                </TableBody>
            </Table>

            <TablePagination
                className="px-4"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={bodyData?.length || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    "aria-label": "Previous Page"
                }}
                nextIconButtonProps={{
                    "aria-label": "Next Page"
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default React.memo(PaginationTable);
