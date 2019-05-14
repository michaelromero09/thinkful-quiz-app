import $ from 'jquery';
import Quiz from './Quiz';
import TriviaApi from './TriviaApi';
import Question from './Question';
import QuizDisplay from './QuizDisplay';
import QuizStatus from './QuizStatus';


function main() {
  const q = new Quiz();
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  // let game = new TriviaApi();
  const quizDisplay = new QuizDisplay(q, '.display');
const quizStatus = new QuizStatus(q, '.status');
  // game.apiFetch()
  // .then((res) => {
    
  //   q.unasked = res;
  //   for (let i=q.unasked.length-1;i >= 0;i--) {
  //     let newQuestion = new Question(q.unasked[i]);
  //     let answers = newQuestion.randomizeAnswers();
  //     console.log(answers);
  //     // newQuestion.userAnswer = answers[1];
  //     console.log(newQuestion.correctAnswer);
  //     console.log(newQuestion.checkUserAnswer(answers[1]));
  //     if (newQuestion.checkUserAnswer(answers[1])) {
  //       q.updateScore();
  //     }
  //     console.log(`Score: ${q.score}`);
  //     q.askQuestion();
  //   }
  //   q.endGame();
  //   console.log(q.scoreHistory);
    



    
  // })
  // .catch(err => console.log(err.message))
}

$(main);
