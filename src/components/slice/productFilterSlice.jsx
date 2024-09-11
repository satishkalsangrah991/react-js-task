import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProductdata = createAsyncThunk(
"product/data",
async({page,limit,category,serch=""},{rejectWithValue})=>{
    // let beauty ="all"
    // /category/${beauty}
    //  let serch =""
try {
    // 'https://dummyjson.com/products?sortBy=title&order=asc'
    // const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${page*limit - limit}&select=title,price,description,thumbnail,category`)
if(category){
    const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${page*limit - limit}&select=title,price,description,thumbnail,category`)
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    const data = await response.json()
    return {data: data.products, totalCount:data.total}
}
else{
   
    const response = await fetch(`https://dummyjson.com/products/search?q=${serch}&limit=${limit}&skip=${page*limit - limit}&select=title,price,description,thumbnail,category`)
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    const data = await response.json()
    return {data: data.products, totalCount:data.total} 
}
} catch (error) {
    return rejectWithValue(error.message);
}
}
)


export const fetchCategorytdata = createAsyncThunk(
    "productcategory/data",
    async({page,limit},{rejectWithValue})=>{
        // let beauty ="all"
        // /category/${beauty}
    try {
        const response = await fetch("https://dummyjson.com/products/category-list")
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
    }
    )


const productFilterSlice = createSlice({
    name:"product",
    initialState:{
        productData:[],
        allCategory:[],
       totalPage:1,
       itemPerPage:8,
       currentPage:1,
       status: 'idle',
       error: null,
       searchQuery:""
    },
    reducers:{
 setCurrentProductPage(state, action) {
 state.currentPage = action.payload;
 },   
 setProductSearchQuery(state, action) {
    state.searchQuery = action.payload;
    }, 

    },
    extraReducers:(builder)=>{
builder
.addCase(fetchProductdata.pending,(state)=>{
state.status ="loading",
state.error=null
})
.addCase(fetchProductdata.fulfilled,(state,action)=>{
state.status ="succeeded",
state.error = null,
state.productData = action.payload.data
state.totalPage = Math.ceil(action.payload.totalCount / state.itemPerPage)
})
.addCase(fetchProductdata.rejected,(state,action)=>{
    state.status ="failed",
    state.error = action.payload
 })
 .addCase(fetchCategorytdata.fulfilled,(state,action)=>{
    state.status ="succeeded",
    state.error = null,
    state.allCategory = action.payload

    })

    }

})

export const {setCurrentProductPage,setProductSearchQuery} = productFilterSlice.actions
export default productFilterSlice.reducer