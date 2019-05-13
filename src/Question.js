'use strict';

import Quiz from './Quiz';

class Question {

  constructor(question) {

    this.text = question.question;

    this.answers = question.incorrect_answers;
    this.correctAnswer = question.correct_answer;
    this.userAnswer = null;
  }

}

export default Question;
