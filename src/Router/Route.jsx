import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import BooksPage from "../Pages/BooksPage/BooksPage";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/HomePage/BookDetails";

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
    },{
      path:'/bookDetails/:id',
      Component:BookDetails,
      loader:()=>fetch('/Data.json')
    }
  ], 
 errorElement:<ErrorPage></ErrorPage>

  }
 
])