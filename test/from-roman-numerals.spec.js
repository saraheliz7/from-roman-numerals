const expect = require("chai").expect;
const convert = require("../src/from-roman-numerals");

describe("Roman Numeral Converter", function() {

    it("should change a Roman Numeral to a number", function() {
       expect(convert("I")).to.equal(1);
    });

    it("should change IV to 4", function() {
        expect(convert("IV")).to.equal(4);
    });

    it("should change V to 5", function() {
        expect(convert("V")).to.equal(5);
    });

    it("should change X to 10", function() {
        expect(convert("X")).to.equal(10);
    });

    it("should change L to 50", function() {
       expect(convert("L")).to.equal(50);
    });

    it("should change C to 100", function() {
        expect(convert("C")).to.equal(100);
    });

    it("should change D to 500", function() {
        expect(convert("D")).to.equal(500);
    });

    it("should change M to 1000", function() {
        expect(convert("M")).to.equal(1000);
    });

    it("should change MMC to 2100", function() {
        expect(convert("MMC")).to.equal(2100);
    });

    it("should change MMMMMCCXLIII to 5243", function() {
        expect(convert("MMMMMCCXLIII")).to.equal(5243);
    });
});