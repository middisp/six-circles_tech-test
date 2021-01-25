import './App.css';
import {useState} from 'react';

import questions from './data/questions';

import Question from './components/question';
import Button from './components/button';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const previousQuestion = (e) => {
    
    e.preventDefault();
    let cQ = currentQuestion;
    cQ = cQ - 1;
    if(cQ < 0) {
      cQ = 0
    } 
    setCurrentQuestion(cQ);
  }

  const nextQuestion = (e) => {
    e.preventDefault();

    let cQ = currentQuestion;
    cQ = cQ + 1;
    if(cQ >= questions.length) {
      cQ = questions.length - 1;
    } 
    setCurrentQuestion(cQ);
  }

  const calculateScore = (e) => {
    e.preventDefault();
    //loop answers, cross ref with questions[i].correctIndex
    chosenAnswers.forEach((answer, index) => {
      console.log(questions[index].correctIndex, answer);
      if(questions[index].correctIndex === answer) {
        setScore(score => score + 1);
      }
    })
    setShowScore(true);
  }

  const updateAnswers = (e) => {
    const answers = chosenAnswers;
    answers[currentQuestion] = parseInt(e.target.value, 10);
    setChosenAnswers(chosenAnswers => [...answers]);
  }

  return (
    <>
      <header className="App-header">
        <h1>Pop Quiz Hotshot!</h1>
      </header>
      {showScore && <h2>Your final score is {score}</h2>}
        <Question 
          question={`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
          answers={questions[currentQuestion].answers}
          currentQuestion={currentQuestion}
          onChange={updateAnswers}
        />

      {currentQuestion > 0 && <Button onClick={previousQuestion}>Previous</Button>}
      {currentQuestion < questions.length - 1 && <Button onClick={nextQuestion}>Next</Button>}
      {currentQuestion === questions.length - 1 && <Button onClick={e => calculateScore(e)}>Submit</Button>}
    </>
  );
}

export default App;
