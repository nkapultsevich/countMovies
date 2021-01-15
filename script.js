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

for (let i = 0; i < 2; i++) {
    const   a = prompt("Че смотрел?",""),
            b = prompt("Ну и как тебе", "");

    if (a != null && b !== null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done"); 
    } else {
        console.log("error");
        i--;
    }

}

console.log(personalMovieDB);

if (personalMovieDB.count < 10 ) {
    console.log("Просмотрено мало фильмов")
} else if (personalMovieDB.count < 30 ) {
    console.log("Вы классический зритель")
} else {
    console.log("Вы киноман")
}