const quizData = [
    {
        question: "What is the skeleton of a Web Browser?",
        a: "Javascript",
        b: "Python",
        c: "HTML",
        d: "CSS",
        correct: "c",
    },
    {
        question: "Arrays in Javascript can be used to store what?"
        a: "Other Arrays"
        b: "Booleans",
        c: "Numbers and Strings",
        d: "All of the above",
        correct:"d",
    },
    {
        question: "How many looping statements are in Javascript?"
        a: "7",
        b: "20",
        c: "1",
        d: "15",
        correct:"a",
    },
    {
        question: "What does CSS stand for?"
        a: "Central Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cat Smile Sinister",
        d: "Cascading Simple Sheets",
        correct:"b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)

}

