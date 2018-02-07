const expect = require("chai").expect;
const convert = require("../src/from-roman-numerals");

describe("Roman Numeral Converter", function() {

    it("should change a Roman Numeral to a number", function() {
       expect(convert("I")).to.equal(1);
    });

    it("should change IV to 4", function() {
        expect(convert("IV")).to.equal(4);
    });
});