class CraqValidator {
    constructor(questions, answers) {
        this.questions = questions;
        this.answers = answers;
    }

    isValid() {
        return Object.keys(this.errors()).length === 0;
    }

    errors() {
        let errors = {};
        for(let i = 0; i < this.questions.length; i++) {
            const questionKey = `q${i}`;
            const question = this.questions[questionKey]
            if(this?.answers?.[questionKey] === undefined) {
                errors[questionKey] = 'was not answered';
            }
            // else if (Object.values(question).includes(true)) {

            // }
            else if(this.answers[questionKey] > i) {
                errors[questionKey] = 'has an answer that is not on the list of valid answers'
            }
        }
        return errors;
    }
}

// run it through linter everytime you save it will correct the code for

module.exports = CraqValidator;





