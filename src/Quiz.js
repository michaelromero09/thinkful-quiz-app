import Question from './Question';
import Model from './lib/Model';
import TriviaApi from './TriviaApi';

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    super();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.askedQuestions = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;

    // TASK: Add more props here per the exercise

  }

  askQuestion() {
    this.askedQuestions.push( this.unasked.pop() );
    this.update();
  }

  // Example method:
  startGame() {
    this.active = true;
    let game = new TriviaApi();
    console.log('Start quiz');
    game.apiFetch()
      .then((res) => {
        this.unasked = res;
        for (let i=this.unasked.length-1;i >= 0;i--) {
          let newQuestion = new Question(this.unasked[i]);
          let answers = newQuestion.randomizeAnswers();
          // console.log(answers);
          // console.log(newQuestion.correctAnswer);
          // console.log(newQuestion.checkUserAnswer(answers[1]));
          // console.log(`Score: ${this.score}`);
          this.askQuestion();
        }
        this.update();
      })
      .catch(err => console.log(err.message))
  }

  handleUserAnswer(answer) {
    console.log(`User answer: ${answer}`);
    // if (Question.checkUserAnswer(answer)) {
    //   this.updateScore();
    // }
  }

  updateScore() {
    this.score = this.score + 1;
  }

  endGame() {
    this.active = false;
    this.scoreHistory.push(this.score);
  }
}

export default Quiz;
