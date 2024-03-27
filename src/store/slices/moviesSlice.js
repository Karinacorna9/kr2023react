import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    page: 1,
    totalPages: 1,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
        },
    },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
