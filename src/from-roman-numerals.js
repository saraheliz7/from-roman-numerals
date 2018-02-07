const convert = (romanNumeral) => {
    let number = 0;

    const romans = ["M", "D", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const numerals = [1000, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if(romanNumeral === "I") {
        number += 1;
    }
    return number;
};

module.exports = convert;