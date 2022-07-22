let quiz = document.getElementById("quiz");
let questionContent = document.getElementById("question");
let choice1 = document.getElementById("question1");
let choice2 = document.getElementById("question2");
let choice3 = document.getElementById("question3");
let choice4 = document.getElementById("question4");
let saveBtn = document.getElementById("save");
let results = document.querySelector("#results");
let win = document.getElementById("win");
let input = document.getElementById("initials");
let highScore = JSON.parse(localStorage.getItem("quiz")) || [];
let startBtn = document.getElementById("start");

let score = 0;
let wins = 0;
let losses = 0;
let counter = 20;
let questionTimer = " ";

let questions = [
  {
    question: "What is the skeleton of a Web Browser?",
    choices: ["HTML", "CSS", "JavaScript", "jQuery"],
    answers: "HTML",
  },
  {
    question: "Arrays in Javascript can be used to store what?",
    choices: [
      "Other Arrays",
      "Booleans",
      "Numbers and Strings",
      "All of the above",
    ],
    answers: "All of the above",
  },
  {
    question: "How many looping statements are in Javascript?",
    choices: ["Seven", "Twenty", "One", "Fifteen"],
    answers: "Seven",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Central Style Sheet",
      "Cascading Style Sheet",
      "Cat Smile Sinister",
      "Cascading Simple Sheets",
    ],
    answers: "Cascading Style Sheet",
  },
  {
    question: "Who is Luke Skywalker's father?",
    choices: ["Count Dooku", "Yoda", "Obi-Wan Kenobi", "Darth Vader"],
    answers: "Darth Vader",
  },
];

let questionCurrent = 0;
quiz.style.display = "none";
results.style.display = "none";

// Click event to start game:
startBtn.addEventListener("click", function () {
  quiz.style.display = "block";
  startBtn.style.display = "none";
  questionTimer = setInterval(timerDisplay, 1000);
  displayQuestion();
});

function displayQuestion() {
    questionContent.textContent = questions[questionCurrent].question;
    choice1.innerHTML = questions[questionCurrent].choices[0];
    choice2.innerHTML = questions[questionCurrent].choices[1];
    choice3.innerHTML = questions[questionCurrent].choices[2];
    choice4.innerHTML = questions[questionCurrent].choices[3];
    choice1.setAttribute("value", questions[questionCurrent].choices[0]);
    choice2.setAttribute("value", questions[questionCurrent].choices[1]);
    choice3.setAttribute("value", questions[questionCurrent].choices[2]);
    choice4.setAttribute("value", questions[questionCurrent].choices[3]);
    choice1.onclick = userChoice;
    choice2.onclick = userChoice;
    choice3.onclick = userChoice;
    choice4.onclick = userChoice;
  }
  
  // User Chooses answer
  function userChoice() {
    let currentChoice = this.value;
    console.log(currentChoice);
    if (currentChoice === questions[questionCurrent].answers) {
      wins++;
    } else {
      losses++;
    }
  
    if (questionCurrent < questions.length - 1) {
      questionCurrent++;
      displayQuestion();
    } else {
      displayResults();
    }
  }
  
  // Displaying results of quiz
  function displayResults() {
    //Hide game content div container. Add 1 more div container to display results. Create a button to store high score in local storage.
    quiz.style.display = "none";
    results.style.display = "block";
    timer.style.display = "none";
    win.textContent = "Wins: " + wins + "Losses: " + losses;
  
    console.log(wins, losses);
  }
  
  //Timer function:
  function timerDisplay() {
    if (counter > 0) {
      timer.textContent = counter;
      counter--;
    } else {
      clearInterval(questionTimer);
      displayResults();
    }
  }
  
  //Save button event listener:
  saveBtn.addEventListener("click", function () {
    let userInitials = initials.value;
    let score = {
      id: userInitials,
      win: wins,
    };
    highScore.push(score);
    localStorage.setItem("quiz", JSON.stringify(highScore));
    console.log(JSON.parse(localStorage.getItem("quiz")));
  
    window.location.assign("./score.html");
  });
  