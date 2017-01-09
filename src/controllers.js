var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var uniqueRandomArray = require('unique-random-array');

exports.Random = (number) => {
    if(number){
        var randomItems = [];
        for(var x=0; x<number; x++){
            var randomNumber = uniqueRandomArray(numbers)()
            randomItems.push(randomNumber)
        }
        return randomItems;
    } else return uniqueRandomArray(numbers)();
}

exports.All = () => numbers;

exports.Odd = () => numbers.filter(number => number%2 !== 0)

exports.Even = () => numbers.filter(number => number%2 === 0)
