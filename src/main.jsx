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
import UserDetails from './Components/UserDetails/UserDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
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

    },{

      path:'/user/:userId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
      element:<UserDetails></UserDetails>


    },{

      path:'/posts',
      loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts></Posts>


    },{

      path:'/post/:postId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDetails></PostDetails>

      
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
