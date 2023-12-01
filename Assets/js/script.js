//DEPENDENCIES




//DATA
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
      choices: ["Buenos Aires", "Rio de Janeiro", "Brasília", "São Paulo"],
      correctAnswer: "Brasília"
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

  //FUNCTIONS
  function startGame();
    //Display first question
    function displayQuestion() {
     var questionContainer = document.getElementById('question-section');
        for (var i = 0; i<questionBank.length < i++) {
            var currentQ = questionBank[i].question[i]
        }

    function displayChoices(index){

    }
       
        var questionSet = questionBank[index].question[index];
     

    }

//USER INTERACTIONS



  //INITIALIZATION
  startGame();