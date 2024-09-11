// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchLoadIds = createAsyncThunk(
// "fetchIds/ids",
// async(perms,{rejectWithValue,dispatch})=>{
// let response = await fetch( 'https://hacker-news.firebaseio.com/v0/jobstories.json')
// try {
//     if(!response.ok){
//         throw new Error('Network response was not ok');
//     }
//    let data = await response.json() 
//    const ids = data.splice(0, 8);
//    dispatch(fetchIdsData(ids));

//    return data; // Return the initial ids
// //    return data
// } catch (error) {
//    return rejectWithValue(error.message) 
// }
// }
// )


// export const fetchIdsData = createAsyncThunk(
//     "fetchIds/data",
//     async(ids,{rejectWithValue})=>{
//         let apiCall = ids.map(async(val)=>{
//  let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${val}.json?print=pretty`)
// try {
//     if(!response.ok){
//         throw new Error('Network response was not ok');
//     }
//    let data = await response.json() 
//    return data
// } catch (error) {
//    return rejectWithValue(error.message) 
// }
//         })

//         let result = await Promise.all(apiCall)
//         return result
  
//     }
//     )

// const infiniteScrollSlice = createSlice({
//  name:'scrolling',  
//  initialState:{
//    jobData :[] ,
//    ids:[],
//    postId :[],
//    loading:false,
//    loading1:false
//  } ,
//  reducers:{
// setPostId(state,action){
// state.postId = action.payload
// }
//  },
//  extraReducers:(builder)=>{
// builder
// .addCase(fetchLoadIds.pending , (state)=>{
// state.loading = true
// })
// .addCase(fetchLoadIds.fulfilled, (state,action)=>{
// state.loading = false
// // state.ids = action.payload.splice(0,8)
// state.postId = action.payload
//     })
//  .addCase(fetchLoadIds.rejected , (state)=>{
//   state.loading = false
//  })

//  .addCase(fetchIdsData.pending , (state)=>{
//     state.loading1 = true
//     })
//     .addCase(fetchIdsData.fulfilled, (state,action)=>{
//     state.loading1 = false
// let data = [...state.jobData]
// // state.jobData.push(...action.payload)
// state.jobData =([...data,...action.payload])
//         })
//      .addCase(fetchIdsData.rejected , (state)=>{
//       state.loading1 =false
//      })
//  }
// })
// export const {setPostId} = infiniteScrollSlice.actions
// export default infiniteScrollSlice.reducer



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLoadIds = createAsyncThunk(
  "fetchIds/ids",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const ids = data.slice(0, 8);  // Use `slice` instead of `splice` to avoid mutating `data`
      dispatch(fetchIdsData(ids));
      return data.slice(8);  // Return the remaining ids
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchIdsData = createAsyncThunk(
  "fetchIds/data",
  async (ids, { rejectWithValue }) => {
    try {
      const apiCalls = ids.map(async (id) => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
      return await Promise.all(apiCalls);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchScrollData = createAsyncThunk(
    'pagination/scroll',
    async({page,limit},{rejectWithValue})=>{
try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    let data = await response.json()
    let totalCount = response.headers.get("x-total-count")
    return {data,totalCount:parseInt(totalCount,10)}
}
catch(error){
    return rejectWithValue(error.message);
}
    }
)

const infiniteScrollSlice = createSlice({
  name: 'scrolling',
  initialState: {
    jobData: [],
    ids: [],
    postId: [],
    scrollData:[],
    totalPage: 1,
    currentPage: 1,
    itemsPerPage: 6,
    loading: false,
    loading1: false,
    status:false,
    error:null
  },
  reducers: {
    setPostId(state, action) {
      state.postId = action.payload;
    },
    incrementPage(state,action) {
        state.currentPage +=1;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadIds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLoadIds.fulfilled, (state, action) => {
        state.loading = false;
        state.postId = action.payload;
      })
      .addCase(fetchLoadIds.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchIdsData.pending, (state) => {
        state.loading1 = true;
      })
      .addCase(fetchIdsData.fulfilled, (state, action) => {
        state.loading1 = false;
        state.jobData = [...state.jobData, ...action.payload];
      })
      .addCase(fetchIdsData.rejected, (state) => {
        state.loading1 = false;
      })
      .addCase(fetchScrollData.pending,(state)=>{
        state.status = true
        state.error =null
        })
        .addCase(fetchScrollData.fulfilled,(state,action)=>{
            state.status = false
            state.error = null
            state.scrollData = [...state.scrollData, ...action.payload.data];
            state.totalPage = Math.ceil(action.payload.totalCount / state.itemsPerPage);
        })
        .addCase(fetchScrollData.rejected,(state,action)=>{
            state.status = false
            state.error = action.payload
        
        })


  }
});



export const { setPostId , incrementPage} = infiniteScrollSlice.actions;
export default infiniteScrollSlice.reducer;
