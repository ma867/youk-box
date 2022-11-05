let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
})


let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('#search-form');


searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle("show")
})