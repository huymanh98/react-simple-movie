const apiKey = '95f2419536f533cdaa1dadf83c606027';
const endPoint = 'https://api.themoviedb.org/3/movie';
export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const tmdbAPI = {
    getMovieList: (type) => `${endPoint}/${type}?api_key=${apiKey}`,
    getMovieDetail: (movieId) => `${endPoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) => `${endPoint}/${movieId}/${type}?api_key=${apiKey}`,
    imagePath: (path) => `https://image.tmdb.org/t/p/original/${path}`
};