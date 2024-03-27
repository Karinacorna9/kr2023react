// reducer.js
import { combineReducers } from 'redux';

const initialState = {
    movies: [],
    genres: [],
    selectedGenre: 'All',
    searchTerm: '',
    loading: false,
    error: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null
            };
        case 'SET_GENRES':
            return {
                ...state,
                genres: action.payload,
                loading: false
            };
        case 'SET_SELECTED_GENRE':
            return {
                ...state,
                selectedGenre: action.payload
            };
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;