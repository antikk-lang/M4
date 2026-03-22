let burger = document.getElementById("burger")
let main = document.getElementById("main")

let active = false
function activeMenu(){
    active = !active
    if (active){
        menu.style.top = '100%'
    }else {
        menu.style.top = "-500%"
    }
}

burger.addEventListener("click", activeMenu)