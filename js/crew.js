const role = document.getElementById('role')
const crewName = document.getElementById('crew-name')
const bio = document.getElementById('bio')
const crewSource = document.getElementById('crew-source')
const crewImage = document.getElementById('crew-image')

const lists = document.querySelectorAll('.slide-one-indicator>*')

lists.forEach((list, i) => {
    let num = 0
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
                crew
            } = data

            role.textContent = crew[index].role
            crewName.textContent = crew[index].name
            bio.textContent = crew[index].bio
            crewSource.setAttribute('srcset', crew[index].images.webp)
            crewImage.setAttribute('src', crew[index].images.png)
        })
}