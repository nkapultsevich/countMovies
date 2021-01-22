'use strict'

const personalMovieDB = {
    count: 0,
    movies: {}, 
    actors:  {},
    genres: [],
    private: false,

    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },

    rememberMyFilms: () => {
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
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10 ) {
            console.log("Просмотрено мало фильмов")
        } else if (personalMovieDB.count < 30 ) {
            console.log("Вы классический зритель")
        } else {
            console.log("Вы киноман")
        }
    },

    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                if (genre != null && genre != "" && genre != isNaN(genre)) {
                    personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} — это ${item}`);
        })
    },

    toggleVsibleMyDB: () => {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};


// personalMovieDB.writeYourGenres();