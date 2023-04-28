// Toggle mobile navigation open
const btnNav = document.querySelector('.btn-mobile-nav')
const headerElement = document.querySelector('.header')
btnNav.addEventListener('click', () => headerElement.classList.toggle('nav-open'))

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const href = link.getAttribute('href')

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } if (href !== '#' && href.startsWith('#')) {
      const sectionElement = document.querySelector(href)
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    } if (link.classList.contains('main-nav-link')) {
      headerElement.classList.toggle('nav-open')
    }
  })
})

// Update Year
const yearElement = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearElement.textContent = currentYear

// Fix flexbox gap missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)
  console.log(isSupported)

  if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()