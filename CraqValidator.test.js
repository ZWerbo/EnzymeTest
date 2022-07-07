// const { default: test } = require('node:test');
// const { default: test } = require('node:test');
// const { default: test } = require('node:test');
const CraqValidator = require('./CraqValidator');

test('validates if question is answered', () => {
    const validator = new CraqValidator([{ text: 'q1', options: [{ text: 'an option' }, { text: 'another option' }] }], {})
    expect(validator.isValid()).toBe(false)
    expect(validator.errors()).toStrictEqual({q0: 'was not answered'})
});

test('validates if question is answered even if null', () => {
    const validator = new CraqValidator([{ text: 'q1', options: [{ text: 'an option' }, { text: 'another option' }] }], null)
    expect(validator.isValid()).toBe(false)
    expect(validator.errors()).toStrictEqual({q0: 'was not answered'})
});

test('validates question has a valid answer', () => {
    const validator = new CraqValidator([{ text: 'q1', options: [{ text: 'yes' }, { text: 'no' }] }], { q0: 0 })
    expect(validator.isValid()).toBe(true)
});

test('validates when there are multiple options and the last option is chosen', () => {
    const validator = new CraqValidator([{ text: 'q1', options: [{ text: 'yes' }, { text: 'no' }, { text: 'maybe' }] }], { q0: 2 })
    expect(validator.isValid()).toBe(true)
});

test('validates it is invalid when an answer is not one of the valid answers', () => {
    const validator = new CraqValidator([{ text: 'q1', options: [{ text: 'an option' }, { text: 'another option' }] }], { q0: 2 })
    expect(validator.isValid()).toBe(false)
} )

test('validates to make sure all questions are answered', () => {
    const validator = new CraqValidator([{ text: 'q1', options: [{ text: 'an option' }, { text: 'another option' }] },{ text: 'q2', options: [{ text: 'an option' }, { text: 'another option' }]}], { q0: 0 }) 
    expect(validator.isValid()).toBe(false)
} )

test('validates that all questions are answered', () => {
    const validator = new CraqValidator([
        { text: 'q1', options: [{ text: 'an option' }, { text: 'another option' }] },
        { text: 'q2', options: [{ text: 'an option' }, { text: 'another option' }] }
      ], { q0: 0, q1: 0 })
      expect(validator.isValid()).toBe(true)
})

test('validates when questions after complete_if_selected are not answered', () => {
    const validator = new CraqValidator([
        { text: 'q1', options: [{ text: 'yes' }, { text: 'no', complete_if_selected: true }] },
        { text: 'q2', options: [{ text: 'an option' }, { text: 'another option' }] }
      ], { q0: 1 })
 
      expect(validator.isValid()).toBe(true)
})

test('validates it is invalid if questions after complete_if are answered', () => {
    const validator = new CraqValidator([
        { text: 'q1', options: [{ text: 'yes' }, { text: 'no', complete_if_selected: true }] },
        { text: 'q2', options: valid_options }
      ], { q0: 1, q1: 0 })
      
 
      expect(validator.isValid()).toBe(false)
})

test('validates it is invalid if complete_if is not a terminal answer and further questions are not answered', () => {
    const validator = new CraqValidator(
        [
            { text: 'q1', options: [{ text: 'yes' }, { text: 'no', complete_if_selected: true }] },
            { text: 'q2', options: [{ text: 'an option' }, { text: 'another option' }] }
          ], { q0: 0 }
    )
      
 
      expect(validator.isValid()).toBe(false)
})








