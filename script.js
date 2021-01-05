'use strict'

// 1
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors:  {},
    genres: [],
    private: false
};

console.log(typeof(personalMovieDB.movies));

// 3
const film = {
    hey: 1
};

const   a = prompt("Че смотрел?",""),
        b = prompt("Ну и как тебе", ""),
        c = prompt("Че смотрел?",""),
        d = prompt("Ну и как тебе", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);