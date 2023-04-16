const API_URL = "https://imdb-api.com/API/AdvancedSearch/k_u0l08v44?title_type=feature&release_date=2020-01-01,2023-04-15";

const SEARCH_URL = `https://imdb-api.com/API/AdvancedSearch/k_u0l08v44?title_type=feature&release_date=2022-01-01,2023-04-15&title=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        const {imDbRating, 
            image, 
            plot, 
            title} = movie;
        const element = document.createElement('div');
        element.classList.add("movie");
        element.innerHTML = `
            <img src=${image} alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getTheClassByName(+imDbRating)}">${imDbRating}</span>
            </div>
            <div class="overview">
                ${plot}
            </div>
        `;
        main.appendChild(element);
    })
}

function getTheClassByName (vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + `${searchTerm}`);
        search.value = '';
    } else {
        window.location.reload();
    }   
})

// const movies = getMovies(API_URL);
// console.log(movies)