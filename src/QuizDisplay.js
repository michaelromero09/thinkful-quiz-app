'use strict';

import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  template() {
    if (!this.model.active && this.model.askedQuestions.length === 0) {
      return `
        <div>Intro Screen</div>
        <button class="start">Start</button>
      `;
    } else if (this.model.active && this.model.askedQuestions.length) {
      console.log(this.model.askedQuestions);
      let question = this.model.askedQuestions[this.model.askedQuestions.length -1];
      console.log(question);
      let answers = question.incorrect_answers;
      let options = answers.map((answer, index) => {
        console.log(`answer: ${answer}`)
        return `<input id="answer-${index}" type="radio" name="answer" value="${answer}">
          <label for="answer-${index}">${answer}</label>`;
      }).join('');
      return `
        <div>
          <p>${question.question}<p>
          <form>
            ${options}
            <input type=submit>
          </form>
        </div>
      `;
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

  handleFormSubmit(e) {
    e.preventDefault();
    let answer = e.target.answer.value;
    this.model.handleUserAnswer(answer);
  }

  getEvents() {
    return {
      'click .start': 'handleStart',
      'submit form': 'handleFormSubmit'
    };
  }
}

export default QuizDisplay;