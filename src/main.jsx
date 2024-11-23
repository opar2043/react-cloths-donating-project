import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';

import Root from '../src/Components/Root/Root.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Home from './Components/Pages/Home.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx'
import Campaign from './Components/Pages/Campaign.jsx'
import Register from './Components/Provider/Register.jsx';
import Error from './Components/Root/Error.jsx';
import NewDashboard from './Components/Pages/NewDashboard.jsx';
import PrivateRoute from './Components/Provider/PrivateRoute.jsx';
import Donation from './Components/Pages/Donation.jsx';
import Login from './Components/Provider/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      // {
      //   path: '/howtohelp',
      //   element: <HowToHelp></HowToHelp>
      // },
      {
        path: '/donattionDetails',
        element: <Donation></Donation>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><NewDashboard></NewDashboard></PrivateRoute>
      },
      {
        path: '/catagory/:id',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        loader:({params})=> fetch('/cloth.json')
      },
      {
        path: '/campgain',
        element: <Campaign></Campaign>,
        loader: ()=> fetch('/cloth.json')
      },

    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
