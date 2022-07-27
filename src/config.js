const apiKey = '95f2419536f533cdaa1dadf83c606027';
const endPoint = 'https://api.themoviedb.org/3/movie';
const endPointSearch = 'https://api.themoviedb.org/3/search/movie';
export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const tmdbAPI = {
    getMovieList: (type, page = 1) => `${endPoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieSearch: (query, page = 1) => `${endPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
    getMovieDetail: (movieId) => `${endPoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) => `${endPoint}/${movieId}/${type}?api_key=${apiKey}`,
    imagePath: (path) => `https://image.tmdb.org/t/p/original/${path}`
};