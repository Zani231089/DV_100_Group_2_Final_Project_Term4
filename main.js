//TMDB

const API_KEY = `api_key=cebd05b01198a3b1c7147fd20944f4c6`;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            showMovies(data.results);
        });
}

//The Movie Card

function showMovies(data) {
    main.innerHTML = '';

    data.forEach((movie) => {
        const {original_title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div'); // Specify 'div' as the element type.
        movieElement.classList.add('movie');

        //Movie Card gotten from the Html card created
        movieElement.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${original_title}">
        <div class="movie-info">
            <h7>${original_title}</h7>
        </div>
        <div class="overview">
        <h5>Overview</h5>
        <h7>${overview}</h7>
        </div>
        `;

        main.appendChild(movieElement);
    });
}


getMovies(API_URL);

