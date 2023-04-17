import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Shop from './Components/Shoop/Shop'
import Product from './Components/Product/Product'
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login'
import cartProductsLoaded from './loaders/CartProductsLoader'
import FinalPayment from './Components/finalPayment/FinalPayment'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/orders',
        element: <Product></Product>,
        loader: cartProductsLoaded,
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/payment',
        element:<FinalPayment></FinalPayment>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
