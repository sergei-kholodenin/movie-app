const API_URL = "https://imdb-api.com/API/AdvancedSearch/k_u0l08v44?title_type=feature&release_date=2020-01-01,2023-04-15";

const SEARCH_URL = `https://imdb-api.com/API/AdvancedSearch/k_u0l08v44?title_type=feature&release_date=2022-01-01,2023-04-15&title=`;

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
}

getMovies(API_URL);

const form = document.getElementById("form");
const search = document.getElementById("search");


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