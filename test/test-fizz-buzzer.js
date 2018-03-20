// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should implement the fizzBuzz function ', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15, expected: "fizz-buzz"},
      {num: 5, expected: "buzz"},
      {num: 3, expected: "fizz"}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const result = fizzBuzzer(input.num);
      expect(result).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a','1',false];

    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });


});
