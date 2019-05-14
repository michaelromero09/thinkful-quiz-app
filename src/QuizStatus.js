'use strict';

import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    if (!this.model.active && this.model.askedQuestions.length === 0) {
      return `<div>Quiz Status</div>`;
    }
    return `
      <div>
        Status
      </div>
      `
  }
}

export default QuizStatus;