// let movies = [
//     {
//         id: 0,
//         name: "Star Wars",
//         score: 1
//     },
//     {
//         id: 1,
//         name: "Avengers",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "The Godfather",
//         score: 99
//     },
//     {
//         id: 3,
//         name: "Logan",
//         score: 2
//     },
//     {
//         id: 4,
//         name: "Begin Again",
//         score: 100
//     },
// ]

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id)
//     return filteredMovies[0];
// }

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovies.length) {
//         movie = cleanedMovies;
//         return true;
//     }
//     else {
//         return false; 
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: movies.length + 1,
//         name,
//         score
//     }
//     movies.push(newMovie)
//     return newMovie;
// }

import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = (limit, rating) => {
    fetch(`${API_URL}`).then(res => res.json()).then(json => json.data.movies)
}