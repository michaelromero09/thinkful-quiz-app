'use strict';

import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    let currentHighScore = 0;
    let status = 'Inactive';
    if (Math.max(... this.model.scoreHistory) > 0) {
      currentHighScore = Math.max(... this.model.scoreHistory);
    }
    if (this.model.active) {
      status = `${this.model.askedQuestions.length} out of ${this.model.askedQuestions.length + this.model.unasked.length}`
    }
    return `
      <div>
        Score: ${this.model.score}
        High Score: ${currentHighScore}
        Progress: ${status}
      </div>
      `;
  }
}

export default QuizStatus;