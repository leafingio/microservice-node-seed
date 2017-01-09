import numbers from './numbers.json';
import uniqueRandomArray from 'unique-random-array';

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