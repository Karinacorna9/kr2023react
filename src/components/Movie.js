import React from 'react';

const Movie = ({ movie, handleDelete }) => {
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
    );
};

export default Movie;