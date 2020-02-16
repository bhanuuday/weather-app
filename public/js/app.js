console.log('Client side javascript file is loaded!')

const getForecast = (location, () => {
        
})


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = "Query - " + location
    search.value=''
    Forecast(location)
})

const Forecast = (location) => {
    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageTwo.textContent = "Error - " + data.error
            } else {
                messageTwo.textContent = "Weather Forecast - " + data.forecast
            }
        })
    })
}