'use strict';

import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  template() {
    if (!this.model.active && this.model.askedQuestions.length === 0) {
      return `
        <div>Intro Screen</div>
        <button class="start">Start</button>
      `;
    } else if (this.model.active && this.model.askedQuestions.length && !this.model.askedQuestions[this.model.askedQuestions.length- 1].userAnswer) {
      console.log(this.model.askedQuestions);
      let question = this.model.askedQuestions[this.model.askedQuestions.length -1];
      console.log(question);
      let answers = question.answers;
      let options = answers.map((answer, index) => {
        console.log(`answer: ${answer}`)
        return `<input id="answer-${index}" type="radio" name="answer" value="${answer}">
          <label for="answer-${index}">${answer}</label>`;
      }).join('');
      return `
        <div>
          <p>${question.text}<p>
          <form>
            ${options}
            <input type=submit>
          </form>
        </div>
      `;
    } else if (this.model.active && this.model.askedQuestions[this.model.askedQuestions.length- 1].userAnswer) {
      if (this.model.isLastCorrect) {
        this.model.isLastCorrect = false;
        return `
          <div>
            <p>Correct Answer</p>
          </div>
          <button class="continue">Continue</button>`
      } else {
        return `
        <div>
          <p>Incorrect Answer</p>
        </div>
        <button class="continue">Continue</button>`
      }
    } else if (!this.model.active && this.model.askedQuestions) {
      let newHighScore = '';
      if (Math.max(... this.model.scoreHistory) === this.model.score) {
        newHighScore = `
        <div>
          <p>That's a new High Score!</p>
        </div>
        `
      }
      return `
      <div>
        <p>Good Job!</p>
        <p>Your final score was ${this.model.score} out of ${this.model.askedQuestions.length}</P>
      </div>
      ${newHighScore}
      <div>
      <button class="playAgain">Play Again</button>
      </div>
      `
    }
    return `
      <div>
        Quiz
      </div>
      `
  }

  handleStart() {
    this.model.startGame();
  };

  handleContinue() {
    this.model.askQuestion();
  };

  handleFormSubmit(e) {
    e.preventDefault();
    let answer = e.target.answer.value;
    this.model.handleUserAnswer(answer);
  }

  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .continue': 'handleContinue',
      'click .playAgain': 'handleStart',
      'submit form': 'handleFormSubmit'
    };
  }
}

export default QuizDisplay;