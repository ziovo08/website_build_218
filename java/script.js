/* HEADER CODE */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
/* HEADER CODE */



/* MAIN SECTION CODE */
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})



/* API v1 */
/* document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ghibliapi.vercel.app/films')
        .then(response => response.json())
        .then(movies => {
            const moviesList = document.getElementById('movies-list');
            movies.forEach(movie => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${movie.title}</strong> (${movie.release_date}) - Directed by ${movie.director}<br>${movie.description}`;
                moviesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
});
 */


/* API V2 */
let filmsData = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ghibliapi.vercel.app/films')
        .then(response => response.json())
        .then(films => {
            filmsData = films; // Store the films data
        })
        .catch(error => console.error('Error fetching data: ', error));
});

function generateRandomFilm() {
    if (filmsData.length > 0) {
        const randomIndex = Math.floor(Math.random() * filmsData.length);
        const film = filmsData[randomIndex];
        document.getElementById('film-title').textContent = `${film.title} (${film.release_date})`;
        document.getElementById('film-info').textContent = `Directed by ${film.director}: ${film.description}`;

        // Update the link to point to the detail page
        const filmDetailLink = document.getElementById('film-detail-link');
        filmDetailLink.href = `/film-detail.html?id=${film.id}`; // Assuming you have a way to handle this URL
        filmDetailLink.style.display = 'block'; // Make the link visible
    } else {
        document.getElementById('film-title').textContent = 'Loading films or failed to load, please refresh the page.';
        document.getElementById('film-info').textContent = '';
        document.getElementById('film-detail-link').style.display = 'none'; // Hide the link if there's no data
    }
}

/* testest */