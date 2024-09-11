import { configureStore } from "@reduxjs/toolkit";
import cardReducers from "../fetures/cardSlice";
import formReducer from "../fetures/formSlice";
import cardsSlice from "../fetures/cardsSlice";
import paginationReducer from '../slice/paginationSlice'
import userReducer from '../slice/userSlice'
import productCardReducer from "../slice/productcardSlice";
import productReducer from '../slice/productFilterSlice'
import scrollReducer from '../slice/infiniteScrollSlice'
export const store = configureStore({
    reducer:{
       card:cardReducers, 
       form:formReducer,
       cards:cardsSlice,
       
    //    this is my part 
       pagination:paginationReducer,
       users: userReducer,
       productCard :productCardReducer,
       productData:productReducer,
       scrollData:scrollReducer
    }
})