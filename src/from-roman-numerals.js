const convert = (romanNumeral) => {
    let number = 0;
    const romanValueMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for(let i = 0; i < romanNumeral.length; i++) {
        let current = romanValueMap[romanNumeral[i]];
        let next = romanValueMap[romanNumeral[i + 1]];

        if(current < next) {
            number += (next - current);
            i++;
        } else if(romanNumeral[i] === "I") {
            number += 1;
        } else if(romanNumeral[i] === "V") {
            number += 5;
        } else if(romanNumeral[i] === "X") {
            number += 10;
        } else if(romanNumeral[i] === "L") {
            number += 50;
        } else if(romanNumeral[i] === "C") {
            number += 100;
        } else if(romanNumeral[i] === "D") {
            number += 500;
        } else if(romanNumeral[i] === "M") {
            number += 1000;
        }
    }
    return number;
};

module.exports = convert;