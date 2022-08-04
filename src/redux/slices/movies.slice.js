import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {getMovie, getMovies} from "../../services/movies.services";


const initialState = {
  movies: []
}

const get_Movies = createAsyncThunk(
    'moviesSlice/get_Movies',
   async (_, {rejectWithValue}) => {
      try {
       const {data} = await getMovies();
       return data.results
     } catch (e) {
        return rejectWithValue(e.response.data)
     }
   }
)
const get_Movie = createAsyncThunk(
    'moviesSlice/get_Movie',
    async(_,{rejectedWithValue}) =>{
        try {
            const {data} = await getMovie();
            return data.results
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},
   extraReducers: (builder) =>
       builder
           .addCase(get_Movies.fulfilled, (state, action) => {
             state.movies = action.payload
           })
           .addDefaultCase((state, action) => {
             const [type] = action.type.split('/').splice(-1);
             if (type === 'rejected'){
               state.errors = action.payload;
             }else {
               state.errors = null
             }
           })
})
const {reducer: moviesReducer} = moviesSlice;
const moviesActions ={
  get_Movies
}
export{
    moviesActions,
    moviesReducer
}