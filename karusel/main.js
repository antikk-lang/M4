let btn_left = document.getElementById("btn_left")
let carusel = document.getElementById("carusel")
let btn_right = document.getElementById("btn_right")

let carusel_elem = 3
let width = 100 /carusel_elem

for (let i of carusel.children){
    i.style.minWidth = `${width}%`
}

let count_item = carusel.children.length
let current = 0
btn_right.addEventListener("click", right)

function right(){
    current +=1
    carusel.style.transform = `translateX(-${width * current}%)`;
}
