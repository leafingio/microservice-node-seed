var numbers = [0,1,2,3,4,5,6,7,8,9];
var uniqueRandomArray = require('unique-random-array');

exports.Random = uniqueRandomArray(numbers);

exports.All = () => numbers;

exports.Odd = () => numbers.filter(number => number%2 !== 0)

exports.Even = () => numbers.filter(number => number%2 === 0)
