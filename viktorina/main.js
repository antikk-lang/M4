let start = document.getElementById("start")
let result = document.getElementById("result")
let main = document.getElementById("main")

let current = 0
let count = 0
let questions = [
    {
        question: "2+2",
        correct: 4,
        answers: [2,3,4,5,6]
    },
    {
        question: "4+4",
        correct: 8,
        answers: [8,3,56,5,6]
    },
    {
        question: "24+4",
        correct: 28,
        answers: [8,123,56,28,6]
    },
    {
        question: "41+314",
        correct: 355,
        answers: [658,355,56,587,643]
    },
    {
        question: "34+4",
        correct: 38,
        answers: [85,38,56,53,67]
    },
    {
        question: "skolko glaz u pauka",
        correct: 8,
        answers: [8,3,5,9,6]
    },
    {
        question: "34**4",
        correct: 1336336,
        answers: [24685,35638,56876456,1336336,69977]
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
        block += `<button class="btn" onclick="check('${i}')">${i}</button>`;
    }
    main.innerHTML += `<nav>${block}</nav>`;
}

function check(answer){
    correct = questions[current].correct
    if (correct == answer){
        count += 1;
    }
    current +=1;
    if (questions.length > current) {
        gen()
    } else{
        stop()
    }
}

function stop() {
    start.classList.remove("close")
    main.classList.add("close")
    result.classList.remove("close")

    result.innerHTML = `решено ${count} из ${questions.length}`;
    current = 0
    count = 0
}
