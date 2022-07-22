var highScore = JSON.parse(localStorage.getItem("quiz")) || [];
var scEl = document.getElementById("highS");


// High Score Keeper
for (var i = 0; i < highScore.length; i++) {
    var list = document.createElement("li");
    list.textContent = "Name: "+ highScore[i].id + "  -  " + "Score:" +highScore[i].win;
    scEl.appendChild(list);
}