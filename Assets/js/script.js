//DEPENDENCIES




//DATA
var questionContainer;
var choicesContainer;
var questionIndex = 0;


var questionBank = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the capital of Japan?",
      choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: "Tokyo"
    },
    {
      question: "What is the capital of Brazil?",
      choices: ["Buenos Aires", "Rio de Janeiro", "Brasilia", "Sao Paulo"],
      correctAnswer: "Brasilia"
    },
    {
      question: "What is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra"
    },
    {
      question: "What is the capital of Italy?",
      choices: ["Tuscany", "Naples", "Rome", "Milan"],
      correctAnswer: "Rome"
    }
  ];

  var currentQuestion = questionBank[questionIndex];


  //FUNCTIONS
  function startGame() {
    displayQuestion();
    displayChoices();
    checkAnswer();
}
    function displayQuestion() {
        questionContainer = document.getElementById('question-section');
        var questionElement = document.createElement('p');
            questionElement.textContent = currentQuestion.question;
            questionContainer.appendChild(questionElement);
    }
    
    function displayChoices() {
        choicesContainer = document.getElementById('choices-section');
        
        for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.textContent = currentQuestion.choices[i];
        choicesContainer.appendChild(choiceBtn);
        choiceBtn.addEventListener('click', function (event) {
            checkAnswer(event.target.textContent, currentQuestion.correctAnswer);
          });
        }
        }
 
    ;

    function checkAnswer(selectedAnswer, correctAnswer) {
            if (selectedAnswer === correctAnswer) {
                  alert('Right!');
                } else {
                  alert('Wrong!');
                }
              
                questionIndex++;
                choicesContainer.innerHTML = '';
                questionContainer.innerHTML = '';
            if (questionIndex < questionBank.length) {
                  currentQuestion = questionBank[questionIndex];
                  displayQuestion();
                  displayChoices();
            } else {
                  alert('Game Over!');
                }
              }
              
        
        
    
        
        



  //INITIALIZATION
  startGame();