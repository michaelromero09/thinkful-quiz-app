import Question from './Question';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;

    // TASK: Add more props here per the exercise

  }

  askQuestion() {
    this.asked.push( this.unasked.pop() );
  }

  // Example method:
  startGame() {
    this.active = true;
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
