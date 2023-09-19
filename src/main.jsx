import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
// import Header from './Components/Header/Header';

const router =  createBrowserRouter([

{

  path:'/',
  element:<Home></Home>,
/*   children:[
    {

      path:'/about',
      element:<About></About>

    },{

      path:'/Contact',
      element:<Contact></Contact>


    }
  ] */

  children:[

    {

      path:'/about',
      element:<About></About>

    },
    {

      path:'/contact',
      element:<Contact></Contact>

    },
    {

      path:'/users',
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>

    }

  ]
  
},
 
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App></App> */}
  </React.StrictMode>,
)
