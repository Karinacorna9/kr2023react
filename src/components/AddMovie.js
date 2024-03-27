import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetcher } from '../api/movies';

function AddMovie() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMovie = {
            title,
            genre,
            year,
            rating,
        };

        await addMovie(newMovie);
        history.push('/');
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Genre:
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </label>
                <label>
                    Year:
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
                <label>
                    Rating:
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                </label>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovie;