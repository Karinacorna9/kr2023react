import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1NmE5NmE3OWIxZmQyMjMwMWNmN2E0MDNiMmViNSIsInN1YiI6IjY1ZTYwYmVhNDRhNDI0MDE2MzExYTU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYNwm8VCjgVbL5WhJkMMImTl8vbwdBsToAFzUpOVqy4';

// const moviesAPI = {

    export const searchMovies = async (query, page) => {
        const params = {
            api_key: apiKey,
            query: query || '',
            page: page || 1,
        };

        const response = await api.get('search/movie', {params});
        return response.data;
    };

    export const loadMoreMovies = async (query, page) => {
        const params = {
            api_key: apiKey,
            query: query,
            page: page,
        };

        const response = await api.get('search/movie', {params});
        return response.data;
    };

    export const getPopularMovies = async (page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get('movie/popular', {params});
        return response.data;
    };

    export const getTopRatedMovies = async (page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get('movie/top_rated', {params});
        return response.data;
    };

    export const getMovieDetails = async (movieId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`movie/${movieId}`, {params});
        return response.data;
    };

    export const getTrailer = async (movieId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`movie/${movieId}/videos`, {params});
        return response.data;
    };

    export const getSimilarMovies = async (movieId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`movie/${movieId}/similar`, {params});
        return response.data;
    };

    export const getUpcomingMovies = async (page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get('movie/upcoming', {params});
        return response.data;
    };

    export const getNowPlayingMovies = async (page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get('movie/now_playing', {params});
        return response.data;
    };

    export const getRecommendedMovies = async (movieId, page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get(`movie/${movieId}/recommendations`, {
            params,
        });
        return response.data;
    };

    export const searchPeople = async (query, page) => {
        const params = {
            api_key: apiKey,
            query: query || '',
            page: page || 1,
        };

        const response = await api.get('person/search', {params});
        return response.data;
    };

    export const getPersonDetails = async (personId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`person/${personId}`, {params});
        return response.data;
    };

    export const getMovieCredits = async (movieId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`movie/${movieId}/credits`, {params});
        return response.data;
    };

    export const getSimilarPeople = async (personId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`person/${personId}/similar`, {params});
        return response.data;
    };

    export const getTVDetails = async (TVId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`tv/${TVId}`, {params});
        return response.data;
    };

    export const getPopularTV = async (page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get('tv/popular', {params});
        return response.data;
    };

    export const getTopRatedTV = async (page) => {
        const params = {
            api_key: apiKey,
            page: page || 1,
        };

        const response = await api.get('tv/top_rated', {params});
        return response.data;
    };

    export const getTVCredits = async (TVId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`tv/${TVId}/credits`, {params});
        return response.data;
    };

    export const searchTV = async (query, page) => {
        const params = {
            api_key: apiKey,
            query: query || '',
            page: page || 1,
        };

        const response = await api.get('tv/search', {params});
        return response.data;
    };

    export const getSimilarTV = async (TVId) => {
        const params = {
            api_key: apiKey,
        };

        const response = await api.get(`tv/${TVId}/similar`, {params});
        return response.data;
    };

    export default {
        searchMovies,
        loadMoreMovies,
        getPopularMovies,
        getTopRatedMovies,
        getMovieDetails,
        getTrailer,
        getSimilarMovies,
        getUpcomingMovies,
        getNowPlayingMovies,
        getRecommendedMovies,
        searchPeople,
        getPersonDetails,
        getMovieCredits,
        getSimilarPeople,
        getTVDetails,
        getPopularTV,
        getTopRatedTV,
        getTVCredits,
        searchTV,
        getSimilarTV,
    };


//
// import axios from 'axios';
//
// const moviesAPI = {
//     getMovies: async () => {
//         try {
//             const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1NmE5NmE3OWIxZmQyMjMwMWNmN2E0MDNiMmViNSIsInN1YiI6IjY1ZTYwYmVhNDRhNDI0MDE2MzExYTU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYNwm8VCjgVbL5WhJkMMImTl8vbwdBsToAFzUpOVqy4&language=en-US&page=1');
//             return response.data.results;
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//             throw error;
//         }
//     },
//
//     getMovieDetails: async (id) => {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1NmE5NmE3OWIxZmQyMjMwMWNmN2E0MDNiMmViNSIsInN1YiI6IjY1ZTYwYmVhNDRhNDI0MDE2MzExYTU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYNwm8VCjgVbL5WhJkMMImTl8vbwdBsToAFzUpOVqy4&language=en-US`);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching movie details:', error);
//             throw error;
//         }
//     },
//
//     searchMovies: async (query) => {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1NmE5NmE3OWIxZmQyMjMwMWNmN2E0MDNiMmViNSIsInN1YiI6IjY1ZTYwYmVhNDRhNDI0MDE2MzExYTU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYNwm8VCjgVbL5WhJkMMImTl8vbwdBsToAFzUpOVqy4&language=en-US&query=${query}&page=1&include_adult=false`);
//             return response.data.results;
//         } catch (error) {
//             console.error('Error searching movies:', error);
//             throw error;
//         }
//     },
// };
//
// export default moviesAPI;