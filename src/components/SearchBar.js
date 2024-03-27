import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../api/movies';
import { setMovies } from '../features/movies/moviesSlice';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovies(query).then((response) => {
            dispatch(setMovies(response.data));
            setQuery('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search movies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;