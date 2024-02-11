import { createSlice } from "@reduxjs/toolkit";

const movieGptSlice = createSlice({
    name : "movieGpt",
    initialState : {
        openMovieGpt: false,
        suggestedMovieList: null,
        suggestedMovies: null
    },
    reducers: {
        openGpt: (state, action)=>{
            state.openMovieGpt = !state.openMovieGpt;
        },
        addSuggestedMovies: (state,action)=>{
            const {suggestedMovieList, suggestedMovies} = action.payload;
            state.suggestedMovies = suggestedMovies;
            state.suggestedMovieList = suggestedMovieList;
        }
    }
});

export const {openGpt, addSuggestedMovies} = movieGptSlice.actions;

export default movieGptSlice.reducer;