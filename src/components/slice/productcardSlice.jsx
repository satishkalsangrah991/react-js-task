import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCard = createAsyncThunk(
"card/data",
async({page,limit},{rejectWithValue})=>{
    // let beauty ="all"
    // /category/${beauty}
try {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit - limit}&select=title,price,description,thumbnail,category`)
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    const data = await response.json()
    return {data: data.products, totalCount:data.total}
} catch (error) {
    return rejectWithValue(error.message);
}
}
)



const productCardslice = createSlice({
    name:"card",
    initialState:{
    //    card :[],
    card:localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
       data:[],
       totalPage:1,
       itemPerPage:8,
       currentPage:1,
       qty:1,
       status: 'idle',
       error: null,
    },
    reducers:{
 setCurrentCardPage(state, action) {
 state.currentPage = action.payload;
 },   
  addToCart(state,action){
    let upadate = state.card.findIndex((val,i)=>{
        return val.id === action.payload.id 
    })
    if(upadate >= 0){
        state.card[upadate].qty += 1
    }
    else{
   state.card.push(action.payload)
    }
    localStorage.setItem("cartItems", JSON.stringify(state.card));
   
},
removeCardItem:(state,action)=>{
    state.card = state.card.filter((val,i)=>val.id !== action.payload)
    localStorage.setItem("cartItems", JSON.stringify(state.card));
},

decrementQty:(state,action)=>{
    let upadate = state.card.findIndex((val,i)=>{
        return val.id === action.payload.id 
    })
    console.log(upadate)
    if(state.card[upadate].qty >=1){
        state.card[upadate].qty -= 1
    }
    localStorage.setItem("cartItems", JSON.stringify(state.card));
},
clearCart(state, action) {
    state.card = [];
    localStorage.setItem("cartItems", JSON.stringify(state.card));

  },
    },
    extraReducers:(builder)=>{
builder
.addCase(fetchCard.pending,(state)=>{
state.status ="loading",
state.error=null
})
.addCase(fetchCard.fulfilled,(state,action)=>{
state.status ="succeeded",
state.error = null,
state.data = action.payload.data
state.totalPage = Math.ceil(action.payload.totalCount / state.itemPerPage)
})
.addCase(fetchCard.rejected,(state,action)=>{
    state.status ="failed",
    state.error = action.payload
 })

    }

})

export const {addToCart,removeCardItem,decrementQty,clearCart,setCurrentCardPage} = productCardslice.actions
export default productCardslice.reducer