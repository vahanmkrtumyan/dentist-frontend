import * as React from "react";
import { Breadcrumb, SimpleCard } from "../../../matx";
import PaginationTable from "../material-kit/tables/PaginationTable";
import { TableCell } from "@material-ui/core";
import AddClient from "./AddClient";

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
];

const listData = subscribarList.map((item) => {
  return {
    Անուն: (
      <TableCell className="px-0 capitalize" align="left">
        {item.name}
      </TableCell>
    ),
    Ծնված: (
      <TableCell className="px-0 capitalize" align="left">
        {item.date}
      </TableCell>
    ),
    Հեռախոս: (
      <TableCell className="px-0 capitalize" align="left">
        {item.amount}
      </TableCell>
    ),
    "Էլ հասցե": (
      <TableCell className="px-0 capitalize" align="left">
        {item.status}
      </TableCell>
    ),
    Պարտք: (
      <TableCell className="px-0 capitalize" align="left">
        {item.status}
      </TableCell>
    ),
  };
});

function Clients() {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Պացիենտներ", path: "/clients" },
            { name: "Table" },
          ]}
        />
      </div>
      <SimpleCard title="Pagination Table">
        <AddClient />
        <PaginationTable
          bodyData={listData}
          thead={["Անուն", "Ծնված", "Հեռախոս", "Էլ հասցե", "Պարտք"]}
        />
      </SimpleCard>
    </div>
  );
}

export default React.memo(Clients);
