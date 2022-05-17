const planetSource = document.getElementById('planet-source')
const planetImg = document.getElementById('planet-img')
const planetName = document.getElementById('planet-name')
const planetDesc = document.getElementById('planet-desc')
const distance = document.getElementById('distance')
const travel = document.getElementById('travel')


const lists = document.querySelectorAll('.destination-navigation>*')

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
});



function useFetch(index) {
    fetch("/data.json")
        .then(response => response.json())
        .then(data => {
            const {
                destinations
            } = data

            planetSource.setAttribute('srcset', destinations[index].images.webp)
            planetImg.setAttribute('src', destinations[index].images.png)
            planetName.textContent = destinations[index].name
            planetDesc.textContent = destinations[index].description
            distance.textContent = destinations[index].distance
            travel.textContent = destinations[index].travel
        })
}
