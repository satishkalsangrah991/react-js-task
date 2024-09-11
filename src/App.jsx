import { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/card/Card";
import MainFile from "./components/card/MainFile";

import ToolkitPagination from "./components/paginationwithtoolkit/ToolkitPagination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./components/useform/UserForm";
import UserList from "./components/useform/UserList";
import UserManagement from "./components/useform/UserManagement";
import CardAllproduct from "./components/shopingcardwithToolkit/CardAllproduct";
import toast, { Toaster } from 'react-hot-toast';
import AllCardViewpage from "./components/shopingcardwithToolkit/AllCardViewpage";
import AllProduct from "./components/allproductwithfilter/AllProduct";
import AlubmIdPage from "./components/googlephotosalum/AlubmIdPage";
import PhotoGallary from "./components/googlephotosalum/PhotoGallary";
import LoadMoreData from "./components/infinitescrollingpagination/LoadMoreData";
import ScrollingPagination from "./components/infinitescrollingpagination/ScrollingPagination";
import MoneyCount from "./components/bankmoneycount/MoneyCount";
function App() {


  return (
  
    <>

 
  {/* <Card/> */}
  {/* <MainFile/> */}
{/* <Pagination/> */}

<BrowserRouter>
  <Routes>
    <Route path="/" element={<ToolkitPagination/>}/>
    <Route path="/card" element={<CardAllproduct/>}/>
    <Route path="/card/view" element={<AllCardViewpage/>}/>
    <Route path="/user/list" element={<UserManagement/>}/>
    <Route path="/user/add" element={<UserForm/>}/>
    <Route path="/all/product" element={<AllProduct/>}/>
    <Route path="/allphoto" element={<PhotoGallary/>}/>
    <Route path="/allphoto/:id" element={<AlubmIdPage/>}/>
    <Route path="/allload/data" element={<LoadMoreData/>}/>
    <Route path="/infinitescroll/data" element={<ScrollingPagination/>}/>
    <Route path="/money/count" element={<MoneyCount/>}/>
    {/* <Route path="/user/list" element={<UserList/>}/> */}
  </Routes>
  <Toaster />
</BrowserRouter>



    </>
  );
}

export default App;
