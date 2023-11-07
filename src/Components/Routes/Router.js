

import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import View from "../pages/View/View";
import Update from "../pages/Update/Update";






const { createBrowserRouter } = require("react-router-dom");



 export const router = createBrowserRouter([
  
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/view',
          element:<View></View>,
         
          
        },
        {
         path:'/updateUser/:id',
         element:<Update></Update>,
         loader: ({params}) => fetch(`http://localhost:5000/task/${params.id}`)
        }
       
       
       
        
       
        
      ],
    },
   
  ]);