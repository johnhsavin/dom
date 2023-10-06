function calcWon(event){
    event.preventDefault()
    const usd = event.target.enterUsd.value
    const won = usd * 1343.96
const h2 = document.querySelector("h2")
h2.innerText = `$${usd} is ${won}won`
}
const form = document.querySelector("form")
form.addEventListener("submit",calcWon)
