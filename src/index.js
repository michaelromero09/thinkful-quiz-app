import $ from 'jquery';
import Quiz from './Quiz';
import TriviaApi from './TriviaApi';
import Question from './Question';


function main() {
  const q = new Quiz();
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  let game = new TriviaApi();
  q.startGame();
  game.apiFetch()
  .then((res) => {
    
    q.unasked = res;
    for (let i=q.unasked.length-1;i >= 0;i--) {
      let newQuestion = new Question(q.unasked[i]);
      console.log(newQuestion);
      q.askQuestion();
    }



    
  })
  .catch(err => console.log(err.message))
}

$(main);
