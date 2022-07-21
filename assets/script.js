var buttonEl = document.querySelector("#start");
var timer = document.querySelector("#timer");
var startContainer = document.getElementById("game-content")
var questionDisplay = document.getElementById("questions");
var choice1 = document.getElementById("question1");
var choice2 = document.getElementById("question2");
var choice3 = document.getElementById("question3");
var choice4 = document.getElementById("question4");
var results = document.querySelector("#results");
var highScore = JSON.parse(localStorage.getItem("quiz")) || [];
var win = document.getElementById("win");
var input = document.getElementById("initials");
var saveBtn = document.getElementById("save");
// var localStorage = window.localStorage;
var score = 0;
var wins = 0;
var losses = 0;
var counter = 20;
var questionTimer = " ";
var questions = [
    {
        question: "What is the base structure for web design?", 
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "HTML"
    },
    {
        question: "What is one of the most complicated development language?", 
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "JavaScript"
    },
    {
        question: "In JavaScript, the block of code that contains repeatable code or used more than once is known as a...?", 
        choices: ["Block", "Function", "For Loop", "Console"],
        answers: "Function"
    },
    {
        question: "Which form of web design is used to change the style of a page?", 
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "CSS"
    },
    {
        question: "Who is Luke Skywalker's father?", 
        choices: ["Count Dooku", "Yoda", "Obi-Wan Kenobi", "Darth Vader"],
        answers: "Darth Vader"
    }
]
var questionCurrent = 0;
startContainer.style.display = "none";
results.style.display = "none";


// Start Button
buttonEl.addEventListener("click", function () {
    startContainer.style.display = "block";
    buttonEl.style.display = "none";
    questionTimer = setInterval(timerDisplay, 1000)
    displayQuestion();
});


// Questions diplayed
function displayQuestion() {
    questionDisplay.textContent = questions[questionCurrent].question;
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
    
};

// Timer
function timerDisplay() {
    if (counter > 0) {
        timer.textContent = counter;
        counter--;
    }else {
        clearInterval(questionTimer);
        displayResults();
    }
}

// User Chooses answers
function userChoice () {
    var currentChoice = this.value 
    console.log(currentChoice);
    if (currentChoice === questions[questionCurrent].answers){
        wins++;
    } else {
        losses++;
    }
    if (questionCurrent < questions.length -1){
        questionCurrent++;
        displayQuestion();
    } else {
        displayResults();
    }
};

// Results of Quiz:
function displayResults () {
    //hide game content div container. Add 1 more div container to dipslay results. Create a button to store high score in local storage.
    startContainer.style.display ="none";
    results.style.display = "block";
    timer.style.display = "none";
    win.textContent = "wins:"+ wins + "losses"+ losses;
    


    console.log(wins, losses);
}

//  Save button:

saveBtn.addEventListener("click", function(){
    var userInitials = initials.value
    var score = {
        id: userInitials,
        win: wins
    }
    highScore.push(score);
    localStorage.setItem("quiz", JSON.stringify(highScore));

    console.log(JSON.parse(localStorage.getItem("quiz")))

    window.location.assign("./score.html");
})