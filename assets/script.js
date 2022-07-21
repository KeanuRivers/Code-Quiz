let quiz = document.getElementById('quiz');
let questionContent = document.getElementById('question');
let choice1 = document.getElementById('question1');
let choice2 = document.getElementById('question2');
let choice3 = document.getElementById('question3');
let choice4 = document.getElementById('question4');
let saveBtn = document.getElementById('save');
let results = document.querySelector('#results');
let win = document.getElementById('win');
let input = document.getElementById('initials');
let highScore = JSON.parse(localStorage.getItem('quiz')) || [];
let startBtn = document.getElementById('start');

let score = 0;
let wins = 0;
let losses = 0;
let counter = 20;
let questionTimer = " ";

let questions = [
    {
        question: "What is the skeleton of a Web Browser?",
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "HTML"
    },
    {
        question: "Arrays in Javascript can be used to store what?",
        choices: ["Other Arrays", "Booleans", "Numbers and Strings", "All of the above"],
        answers: "All of the above"
    },
    {
        question: "How many looping statements are in Javascript?",
        choices: ["7", "20", "1", "15"],
        answers: "7"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Central Style Sheet", "Cascading Style Sheet", "Cat Smile Sinister", "Cascading Simple Sheets"],
        answers: "Cascading Style Sheet"
    },
    {
        question: "Who is Luke Skywalker's father?", 
        choices: ["Count Dooku", "Yoda", "Obi-Wan Kenobi", "Darth Vader"],
        answers: "Darth Vader"
    }
];