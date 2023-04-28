const btnNav = document.querySelector('.btn-mobile-nav')
const headerElement = document.querySelector('.header')

btnNav.addEventListener('click', () => headerElement.classList.toggle('nav-open'))

const yearElement = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearElement.textContent = currentYear