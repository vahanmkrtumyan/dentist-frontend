import React from "react";
import {authRoles} from "../../auth/authRoles";

export const clientsRoute = [
    {
        path: "/clients",
        component: React.lazy(() => import("./Clients")),
        auth: authRoles.editor
    }
]