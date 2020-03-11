
//First I create the HTML elements needed for the Quiz. 
//I create the 10 questionds and the 4 possible answers and store them in an Array of objects and values.
//I identify the elements I need to target and define them with a variable.
var questionContainer = document.getElementById("questions");
var resultContainer = document.getElementById("results");
var submitButtonA = document.getElementById("choiceA");
var submitButtonB = document.getElementById("choiceB");
var submitButtonC = document.getElementById("choiceC");
var submitButtonD = document.getElementById("choiceD");
var startBtn = document.getElementById("startBtn");
var myinitialInput = document.getElementById("myInitialInput");
var submitBtn = document.getElementById("submitBtn");
var counter = document.querySelector("#counter");
var highScoreArr = [];
var totalScoreContainer = document.getElementById("totalScoreContainer");
var totalScore = [];
var questions ="";
var finishedQuiz = false;



var questionsAnswers = [
    {
        question: "What is the color of the sky?",
        answers: ["blue", "red", "green", "yellow"],
        correctAnswer: "blue"
    },
    {
        question: "Who of the four is not a Beatle?",
        answers: ["George Harrison", "David Hasselhoff", "John Lennon", "Ringo Starr"],
        correctAnswer: "David Hasselhoff"
    },

    {
        question: "Which one is not a Super-Hero?",
        answers: ["Sponge Bob", "Wonder Woman", "Superman", "Captain Marvel"],
        correctAnswer: "Sponge Bob"
    },
    {
        question: "What nationality is Mo Salah?",
        answers: ["Martian", "Italian", "Egyptian", "Norwegian"],
        correctAnswer: "Egyptian"
    },
    {
        question: "What is the capital city of Iceland?",
        answers: ["Rome", "Smurflandia", "Cobenhagen", "Reykjavik"],
        correctAnswer: "Reykjavik"
    },
    {
        question: "Name the volcano that erupted in Iceland in 2010?",
        answers: ["Snaefellsjokull", "Lakagigar", "Eyjafjallajokull", "Hekla"],
        correctAnswer:"Eyjafjallajokull"
    },
    {
        question: "Name the best soccer team in the world?",
        answers: ["Barcelona", "Bayern Munich", "Liverpool", "AC Milan"],
        correctAnswer:"Liverpool"
        
    },
    {
        question: "Best and ugliest food in the world?",
        answers: ["Carbonara", "Sheep Head", "Ozzo Buco", "Gormet Sabzi"],
        correctAnswer:"Gormet Sabzi"
        
    }


]



//Set a function for the startBtn to start the quiz and display the currentQuestion and choices of answers.

startBtn.addEventListener("click", function() {
    var timer=60;
    counter.style.visibility = "visible"
    counter.textContent = timer
    var intervalId = setInterval(function(){
    timer--;
    counter.textContent = timer

    if (timer === 0  || finishedQuiz) {
        clearInterval(intervalId) 
    }
},1000);

displayQuestionstoPage(); 

})
var currentQuestion =0;
function displayQuestionstoPage() {
    questionContainer.textContent = questionsAnswers[currentQuestion].question
    console.log(questionContainer)

    submitButtonA.textContent = questionsAnswers[currentQuestion].answers[0]
    submitButtonB.textContent = questionsAnswers[currentQuestion].answers[1]
    submitButtonC.textContent = questionsAnswers[currentQuestion].answers[2]
    submitButtonD.textContent = questionsAnswers[currentQuestion].answers[3]

}
//Evaluate the answer of each button and create a function that compares the answers to the correctAnswer.
function evaluateAnswer(e) {
    var answerButton = e.target
    console.log(answerButton.textContent)

//Create an "if-else statement" that will increment the score if the selected button corresponds to the correctAnswer and spit out the text "CORRECT!!" into the <p> element.
//else the text WRONG!! will appear in the <p> element.

    if(answerButton.textContent === questionsAnswers[currentQuestion].correctAnswer){
        totalScore++
        resultContainer.textContent = "CORRECT!!";

    } else {
        resultContainer.textContent = "WRONG!!";
    }
        resultContainer.style.display = "block";
        resultContainer.style.visibility = "visible";
         

        setTimeout(function() {
        resultContainer.style.display = "none";
        resultContainer.style.visibility = "invisible";
        moveTotheNextQuestion()
        },1500)

    
}

    function moveTotheNextQuestion() {
    currentQuestion++
    if (currentQuestion < questionsAnswers.length) {
        displayQuestionstoPage();

    
    } else {
        totalScoreContainer.textContent = totalScore;
        totalScoreContainer.style.visibility = "visible";
        finishedQuiz = true;
    }

    

}

submitBtn.addEventListener("click", function() {
  
    var myInitialInput = document.getElementById("myInitialInput").value;
    highScoreArr.push({"name": myInitialInput, "score": totalScoreContainer.textContent});

    highScoreArr.forEach(item => {
        var highScore = $(`<p>User: ${item.name} - Score: ${item.score}<p>`);
        $("#outPut").append(highScore)
    })

    var randomthing = JSON.stringify(highScoreArr);
    localStorage.setItem("highScore", randomthing);
})

if (localStorage.getItem("highScore")) {
    JSON.parse(localStorage.getItem("highScore")).forEach(item => {
        var highScore = $(`<p>User: ${item.name} - Score: ${item.score}<p>`);
        $("#outPut").append(highScore)
    })
}
  

submitButtonA.addEventListener("click", evaluateAnswer)
submitButtonB.addEventListener("click", evaluateAnswer)
submitButtonC.addEventListener("click", evaluateAnswer)
submitButtonD.addEventListener("click", evaluateAnswer)


resultContainer.style.visibility = "hidden"

totalScoreContainer.style.visibility = "hidden"

counter.style.visibility = "hidden"

