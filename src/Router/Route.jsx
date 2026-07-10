import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import BooksPage from "../Pages/BooksPage/BooksPage";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router=createBrowserRouter([
  {
    path:'/',
  Component:MainLayOut,
  children:[
    {
      index:true,
      Component:HomePage
    },
    {
path:'/book',
Component:BooksPage
    }
  ], 
 errorElement:<ErrorPage></ErrorPage>

  }
 
])