let searchv = document.getElementById("searchv")
let searchb = document.getElementById("searchb")
let card = document.getElementById("card")
let load = document.getElementById("load")

let dataCard;

async function getcard(){
    card.classList.add("none");
    load.classList.remove("none");

    const response = await fetch("https://api.github.com/users/KrasnovDaniil1")
    if (response.ok) {
        dataCard = await response.json()
        console.log(dataCard)
    }
}

searchb.addEventListener("click", getcard);