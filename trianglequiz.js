var formQuiz = document.querySelector(".quiz-form");
var checkScoreBtn = document.querySelector("#check-score-btn");
var output = document.querySelector("#output");

const correctAnswer = ["90", "right angled"];

function evaluateScore(){
    var score = 0;
    var index = 0;
    var formResults = new FormData(formQuiz);

    for (let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is " + score;
}

checkScoreBtn.addEventListener("click",
evaluateScore)