import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
const MainContent = lazy(() => import("./viewparts/MainContent.tsx"))
const SearchHistory = lazy(() => import("./viewparts/SearchHistory/SearchHistory"))
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Suspense fallback={<div>loading</div>}><MainContent /></Suspense>
      },
      {
        path: "/history",
        element: <Suspense fallback={<div>loading</div>}><SearchHistory /></Suspense>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
