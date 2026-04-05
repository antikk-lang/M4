let searchv = document.getElementById("searchv")
let searchb = document.getElementById("searchb")
let card = document.getElementById("card")
let load = document.getElementById("load")

let dataCard;

async function getcard(){
    card.classList.add("none");
    load.classList.remove("none");

    const response = await fetch(`https://api.github.com/users/${searchv.value}`)
    if (response.ok) {
        dataCard = await response.json()
        console.log(dataCard)
        genCard()
    }
    load.classList.add("none")
    
}

searchb.addEventListener("click", getcard);

function genCard(){
    card.innerHTML = `
        <img src="${dataCard.avatar_url}"/>
        <h1>${dataCard.login}</h1>
        <p>${dataCard.bio}</p>
        <nav>
            <div>
                <i class="fas fa-whale" style="color:yellow"></i>
                <span>${dataCard.location}</span>
            </div>
            <div>
                <i class="fas fa-whale" style="color: beige;"></i>
                <span>${dataCard.public_repos}</span>
            </div>
            <div>
                <i class="fas fa-whale" style="color: red;"></i>
                <span>${dataCard.followers}</span>
            </div>
        </nav>
        <a href="${dataCard.html_url}">periti</a>
    `
    card.classList.remove("none");
}