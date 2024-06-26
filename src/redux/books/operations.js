import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getRecommendedBooks = createAsyncThunk('books/getAll', async ({page, limit}, thunkAPI) => {
    const params = new URLSearchParams({
        page,
        limit,
    })
    try {
        const res = await axios.get(`/books/recommend?${params}`)
         const { results, totalPages } = res.data;
       
         return  { results, totalPages };
    }
    catch (error) {
         return thunkAPI.rejectWithValue(error.message);
    }
} )