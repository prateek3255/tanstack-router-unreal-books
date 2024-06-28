/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SalesImport } from './routes/sales'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SalesRoute = SalesImport.update({
  path: '/sales',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/sales': {
      id: '/sales'
      path: '/sales'
      fullPath: '/sales'
      preLoaderRoute: typeof SalesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, SalesRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/sales"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/sales": {
      "filePath": "sales.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
