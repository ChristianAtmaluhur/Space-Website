const techImg = document.getElementById('tech-img')
const techName = document.getElementById('tech-name')
const techDesc = document.getElementById('tech-desc')

const lists = document.querySelectorAll('.slide-two-indicator>*')
let num = 0

lists.forEach((list, i) => {
    list.addEventListener('click', () => {
        for(const list of lists) {
            list.classList.remove('active')
        }
        list.classList.add('active')
        num = i
        useFetch(num)
    })
})

function useFetch(index) {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const {
                technology
            } = data

            window.addEventListener('resize', () => {
                imgType(technology, index)
            })

            imgType(technology, index)

            techName.textContent = technology[index].name
            techDesc.textContent = technology[index].description
        })
}

function imgType(technology, index) {
    if (window.innerWidth < 720) {
        techImg.style.content = `url(${technology[index].images.landscape})`
    } else if (window.innerWidth >= 720) {
        techImg.style.content = `url(${technology[index].images.portrait})`
    }
}