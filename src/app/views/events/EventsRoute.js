import React from "react";
import { authRoles } from "../../auth/authRoles";

export default [
  {
    path: "/events",
    component: React.lazy(() => import("./EventsContainer")),
    auth: authRoles.editor,
  },
];
