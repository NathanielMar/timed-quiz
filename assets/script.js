var gameBtn =document.querySelector("#gameBtn");
var answerBtn =document.querySelector("#answerBtn")

var questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["booleans", "numbers","descriptions", "integers"],
        answer: "descriptions"
    },
    {
        question: "Which is the best description of a variable?",
        answers: ["timed events", "functions that can perform several tasks", "names used to hold one or more values", "placeholders for unentered data"],
        answer: "names used to hold one or more values"
    },
    {
        question: "Html is short for:",
        answers: ["Hypertext Markup Language", "Hyperlane Maker Language","Hydrophobe Market Language", "Himalayan Mountain Looker"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "Which is the best description of an id?",
        answers: ["a general element identifier", "a general function starter", "a specific element identifier","a risky business venture"],
        answer: "a specific element identifier"
    },
];

var currentIndex = 0

gameBtnEl.addEventListener("click", function(){
    event.preventDefault();
    setTimeout(notifyTimeout, 5000);



 function generateQuestion(){
    var currentQuestion = questions[currentIndex];

    var questionEl = document.getElementById("question-text");

    questionEl.textContent = currentQuestion.question;

    for(var i = 0; i < currentQuestion.answers.length; i++){
        var answerButton =document.createElement("button");
        answerButton.textContent = i + 1 +currentQuestion[i];
    }
 function notifyTimeout(){
     alert("time is up")
 }
function checkAnswer(){
    currentIndex++
    if(event.target.value === currentQuestion.answer){

    }

    generateQuestion
 }
