const navBtn = document.querySelector('.mobile-btn')
const navbar = document.querySelector('.primary-navigation')

navBtn.addEventListener('click', () => {
    const visible = navbar.getAttribute('data-visible')
    if(visible === 'false') {
        navbar.setAttribute('data-visible', true)
        navBtn.setAttribute('aria-expanded', true)
    } else {
        navbar.setAttribute('data-visible', false)
        navBtn.setAttribute('aria-expanded', false)
    }
})

