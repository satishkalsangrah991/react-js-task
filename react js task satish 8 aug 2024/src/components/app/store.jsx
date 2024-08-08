import { configureStore } from "@reduxjs/toolkit";
import cardReducers from "../fetures/cardSlice";
import formReducer from "../fetures/formSlice";
export const store = configureStore({
    reducer:{
       card:cardReducers, 
       form:formReducer
    }
})