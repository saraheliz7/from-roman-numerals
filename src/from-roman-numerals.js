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
        }  else {
            number += romanValueMap[romanNumeral[i]];
        }
    }
    return number;
};

module.exports = convert;