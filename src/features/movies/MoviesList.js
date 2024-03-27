import React from 'react';

const MoviesList = ({ movies }) => (
    <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
                {movie.title} ({movie.release_date.split('-')[0]})
            </li>
        ))}
    </ul>
);

export default MoviesList;