import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home, Projects} from "./pages/index"
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/projects",
      element: <Projects />
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
