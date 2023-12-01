//DEPENDENCIES




//DATA
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
        var questionContainer = document.getElementById('question-section');
        var questionElement = document.createElement('p');
            questionElement.textContent = currentQuestion.question;
            questionContainer.appendChild(questionElement);
    }
    
    function displayChoices() {
        var choicesContainer = document.getElementById('choices-section');
        
        for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.textContent = currentQuestion.choices[i];
        choicesContainer.appendChild(choiceBtn);
        }
        }

        
     

    ;

//USER INTERACTIONS



  //INITIALIZATION
  startGame();