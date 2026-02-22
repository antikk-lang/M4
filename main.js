let start = document.getElementById("start")
let result = document.getElementById("result")
let main = document.getElementById("main")

let current = 0
let count = 0
let questions = [
    {
        question: "2+2",
        current: 4,
        answers: [2,3,4,5,6]
    },
    {
        question: "4+4",
        current: 8,
        answers: [8,3,56,5,6]
    },
];



function startPr(){
    start.classList.add("close")
    main.classList.remove("close")
    result.classList.add("close")
    gen()
}
start.addEventListener("click", startPr)

function gen(){
    let question = questions[current].question
    main.innerHTML = `<h2 class="title">${question}</h2>`;

    let answers = questions[current].answers;
    let block = "";
    for (let i of answers){
        block += `<button class="btn"a onclick="check('${i}')">${i}</button>`;
    }
    main.innerHTML += `<nav>${block}</nav>`;
}

function check(answer){
    correct = questions[current].correct
    if (correct == answer){
        count += 1;
    }
    current +=1
    gen()
}