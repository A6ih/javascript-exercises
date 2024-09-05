const sumAll = function(...args) {
    if (args[0] < 0 || args[1] < 0
       || args[0] !== parseInt(args[0]) || args[1] !== parseInt(args[1])) {
        return "ERROR"
    }
    const numbers = []
    let minNum = Math.min(args[0], args[1])
    let maxNum = Math.max(args[0], args[1])
    for (let i = 0; i <= maxNum; i++) {
        if(minNum <= maxNum) {
            numbers.push(minNum++)
        }
    } 

    const sum = numbers.reduce((accumulator , value) => {
        return accumulator += value;
      }, 0)

    return sum;
};

//console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
