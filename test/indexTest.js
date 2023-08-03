const chai = require('chai');
const expect = chai.expect;
const mod = require('../index');

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      let num1 = 2;
      let num2 = 31;
      let multiply = num1 * num2;
      expect(num1).to.be.a('number');
      expect(num2).to.be.a('number');
      expect(multiply).to.eq(62);
    });
  });

  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      expect(Number.isInteger(random)).to.be.true;
      expect(random).to.not.eq(0);
    });
  });

  describe('mod function', () => {
    it('should calculate a remainder that is equal to 4', () => {
      const num3 = 12;
      const num4 = 8;
      const expected = 4;
      const actual = mod(num3, num4);
      expect(actual).to.eq(expected);
    });
  });

  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      let result = max(numbers);
      expect(result).to.eq(20);
    });
  });
});