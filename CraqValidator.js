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
            else if (this.questions[0].options.length - 1 === this.answers[questionKey]) {
                
            }
            else if(this.answers[questionKey] > i) {
                errors[questionKey] = 'has an answer that is not on the list of valid answers'
            }
        }
        return errors;
    }
}

//Ideas for find if question was completed. I would flatten all the Object values or entries and check to see if they include true
//and check if the placement of true is equal to the answer index and if it has numbers after it. 

module.exports = CraqValidator;





