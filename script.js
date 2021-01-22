'use strict'

// 1
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

// start();

// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors:  {},
    genres: [],
    private: true
};

// console.log(typeof(personalMovieDB.movies));

// // 3
// const film = {
//     hey: 1
// };
function rememberMyFilms() {
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
}

// rememberMyFilms();

// console.log(personalMovieDB);


function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log("Просмотрено мало фильмов")
    } else if (personalMovieDB.count < 30 ) {
        console.log("Вы классический зритель")
    } else {
        console.log("Вы киноман")
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.private);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();