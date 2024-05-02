const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('.body');
moon.addEventListener('click', function () {
    body.style.background = '#1a1a1a'
})
sun.addEventListener('click', function () {
    body.style.background = 'white'
})