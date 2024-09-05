const removeFromArray = function (array, ...args) {
    //works for all tests but test-5 and test-8
    /*  let i = 0;
      while(array.includes(args[i])) {
         array.splice(array.indexOf(args[i]), 1)
          if(array.includes(args[i])) {
            continue;
           }
         i++
      } */
      //works for all the tests
      for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < args.length; j++) {
           if (array[i] === args[j]) {
            array.splice(i, 1);
              }
            }
          }
    return array;
  };


// Do not edit below this line
module.exports = removeFromArray;
