//DEPENDENCIES
// var timerId;
var button = document.querySelector('#startButton')
choicesContainer = document.getElementById('choices-section');
questionContainer = document.getElementById('question-section');
gameOverContainer = document.getElementById('game-over-screen');
highscore = document.getElementById('high-score');

//DATA
var score = 0;
var questionContainer;
var choicesContainer;
var questionIndex = 0;
var timerEl = document.getElementById('time');
// var questionsEl =
// var time = 30;
button.textContent = "Start Quiz"


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


//   //FUNCTIONS
  function startGame() {
    displayQuestion(currentQuestion);
    displayChoices();
    }
    //hide start screen
  
    //un-hide questions section
    // question
    
    //start timer...need to add function called clockTick (or whatever) to update time and check if use has run out of time
    // timerId = setInterval(timerCount, 1000);

    // function timerCount() {
    //   time--;
    // }

    function displayQuestion(currentQuestion) {
        
      questionContainer.innerHTML = '';
        var questionElement = document.createElement('p');
            questionElement.textContent = currentQuestion.question;
            questionContainer.appendChild(questionElement);
            
    }
    
    function displayChoices() {
        
      choicesContainer.innerHTML = '';
        for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.textContent = currentQuestion.choices[i];
        choicesContainer.appendChild(choiceBtn);
        choiceBtn.addEventListener('click', function (event) {
            event.preventDefault()
            checkAnswer(event.target.textContent, currentQuestion.correctAnswer)
            
          });
          
        }
        }
 
        function checkAnswer(selectedAnswer, correctAnswer) {
          if (selectedAnswer === correctAnswer) {
            alert('Right!');
            score += 10;
          } else {
            alert('Wrong!');
          }
        
          questionIndex++; 
          if (questionIndex < questionBank.length) {
            currentQuestion = questionBank[questionIndex]; // Update currentQuestion
            displayQuestion(currentQuestion);
            displayChoices();
          } else {
            gameOver();
          }
        }
        

        function gameOver() {
          questionContainer.setAttribute('class','hide')
          choicesContainer.setAttribute('class','hide')
          gameOverContainer.classList.remove('hide')
          highscore.textContent = score
          gameOverContainer.appendChild(highscore)
        }
              
        // function quizEnd(){
        //     //stop timer
        //     clearInterval(timerId);

        // //     //show end screen
        //     var endScreenEl = document.getElementById('game-over-screen');
        //     endScreenEl.removeAttribute('class');
        // //     //show final score
        //     var finalScoreEl = document.getElementById('final-score');
        //     finalScoreEl.textContent = score;
        // //     //hide questions section
        //     choicesContainer.setAttribute('class','hide');
        // // }

        // function saveHiScore(){
        //     //get value of input box
        //     var userInitials = userInialsEl.value.trim();

        //     //check to make sure input was not empty
        //     //get save scores from local storage
        //     var highscore = 
        //     JSON.parse(window.localStorage.getItem('highscores') || [])
        //     //format score object for current user
        //     //save to local storage...need to add newScore
        //     highscore.push(newScore);
        //     window.localStorage.setItem('highscores',JSON.stringify(highscores));
        
        // }
    
        
  //do I need to add a prevent default
  //USER INTERACTION
        button.addEventListener("click",function() {
          var startScreenEl = document.getElementById('start-screen');
          startScreenEl.setAttribute('class','hide');
          startGame()
        });
        


  //INITIALIZATION






