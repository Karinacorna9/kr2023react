import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetcher } from '../api/movies';

function GenreList() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genreData = await getGenres();
            setGenres(genreData);
        };

        fetchGenres();
    }, []);

    return (
        <div>
            <h1>Genres</h1>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GenreList;