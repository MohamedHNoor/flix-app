const global = {
  currentPage: window.location.pathname,
}

async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular')
  console.log(results)
  results.forEach((movie) => {
    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
     <a href="movie-details.html?id=${movie.id}">
       ${
         movie.poster_path
           ? `<img
             src='https://image.tmdb.org/t/p/w500${movie.poster_path}'
             class='card-img-top'
             alt='${movie.title}'
           />`
           : `<img
             src='images/no-image.jpg'
             class='card-img-top'
             alt='${movie.title}'
           />`
       }
     </a>
     <div class="card-body">
       <h5 class="card-title">${movie.title}</h5>
       <p class="card-text">
         <small class="text-muted">Release: ${movie.release_date}</small>
       </p>
     </div>
    `
    document.querySelector('#popular-movies').appendChild(div)
  })
}

// fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_Key = '65fd4724752b533f67b1ceb1485b8dd7'
  const API_URL = 'https://api.themoviedb.org/3/'

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_Key}&language=en-US`
  )

  const data = await response.json()
  return data
}

// highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link')

  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active')
    }
  })
}

// init
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displayPopularMovies()
      break
    case '/move-details.html':
      console.log('Movie Details')
      break
    case '/search.html':
      console.log('Search Page')
      break
    case '/shows.html':
      console.log('Tv Shows Page')
      break
    case '/tv-details.html':
      console.log('Tv Details page')
      break
  }
  highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)
