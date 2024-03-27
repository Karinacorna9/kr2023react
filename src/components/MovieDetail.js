import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetcher } from '../api/movies';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const movieData = await getMovieById(id);
            setMovie(movieData);
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    );
}

export default MovieDetail;