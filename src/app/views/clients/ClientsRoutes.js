import React from 'react';
import { authRoles } from '../../auth/authRoles';

export const clientsRoute = [
  {
    path: '/client',
    component: React.lazy(() => import('./Client')),
    auth: authRoles.editor,
  },
  {
    path: '/clients',
    component: React.lazy(() => import('./Clients')),
    auth: authRoles.editor,
  },
];
