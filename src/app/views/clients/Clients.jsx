import * as React from "react"
import {Breadcrumb, SimpleCard} from "../../../matx";
import PaginationTable from "../material-kit/tables/PaginationTable";

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
                <PaginationTable/>
            </SimpleCard>
        </div>
    )
}

export default Clients;