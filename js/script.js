const global = {
  currentPage: window.location.pathname,
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
      console.log('Home')
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
