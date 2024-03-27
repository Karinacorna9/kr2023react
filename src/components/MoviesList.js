import React from 'react';
import { useSelector } from 'react-redux';
import { deleteMovie } from '../actions/moviesActions';
import Movie from './Movie';

const MoviesList = () => {
    const movies = useSelector((state) => state.movies);

    const handleDelete = (id) => {
        deleteMovie(id);
    };

    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

export default MoviesList;