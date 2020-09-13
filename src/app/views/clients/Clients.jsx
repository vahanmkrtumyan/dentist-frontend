import * as React from "react"
import {Breadcrumb, SimpleCard} from "../../../matx";
import PaginationTable from "../material-kit/tables/PaginationTable";
import {TableCell} from "@material-ui/core";
import AddClient from "./AddClient";

const subscribarList = [
    {
        name: "john doe",
        date: "18 january, 2019",
        amount: 1000,
        status: "close",
        company: "ABC Fintech LTD."
    },
    {
        name: "kessy bryan",
        date: "10 january, 2019",
        amount: 9000,
        status: "open",
        company: "My Fintech LTD."
    },
    {
        name: "kessy bryan",
        date: "10 january, 2019",
        amount: 9000,
        status: "open",
        company: "My Fintech LTD."
    },
    {
        name: "james cassegne",
        date: "8 january, 2019",
        amount: 5000,
        status: "close",
        company: "Collboy Tech LTD."
    },
    {
        name: "lucy brown",
        date: "1 january, 2019",
        amount: 89000,
        status: "open",
        company: "ABC Fintech LTD."
    },
    {
        name: "lucy brown",
        date: "1 january, 2019",
        amount: 89000,
        status: "open",
        company: "ABC Fintech LTD."
    },
    {
        name: "lucy brown",
        date: "1 january, 2019",
        amount: 89000,
        status: "open",
        company: "ABC Fintech LTD."
    },
    {
        name: "lucy brown",
        date: "1 january, 2019",
        amount: 89000,
        status: "open",
        company: "ABC Fintech LTD."
    },
    {
        name: "lucy brown",
        date: "1 january, 2019",
        amount: 89000,
        status: "open",
        company: "ABC Fintech LTD."
    }
];

const listData = subscribarList.map((item) => {
    return {
        name: <TableCell className="px-0 capitalize" align="left">{item.name}</TableCell>,
        date: <TableCell className="px-0 capitalize" align="left">{item.date}</TableCell>,
        amount: <TableCell className="px-0 capitalize" align="left">{item.amount}</TableCell>,
        status: <TableCell className="px-0 capitalize" align="left">{item.status}</TableCell>,
        company: <TableCell className="px-0 capitalize" align="left">{item.company}</TableCell>,
    }
})


function Clients() {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        {name: "Պացիենտներ", path: "/clients"},
                        {name: "Table"}
                    ]}
                />
            </div>
            <SimpleCard title="Pagination Table">
                <AddClient/>
                <PaginationTable
                    bodyData={listData}
                    thead={[
                        "name",
                        "date",
                        "amount",
                        "status",
                        "company",
                        "close"]}/>
            </SimpleCard>
        </div>
    )
}

export default React.memo(Clients);