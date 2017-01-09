import numbers from './numbers.json';
import uniqueRandomArray from 'unique-random-array';

function generateRandoms(num){
    let randomItems = [];
    for(let x=0; x<num; x++){
        let randomNumber = uniqueRandomArray(numbers)()
        randomItems.push(randomNumber)
    }
    return randomItems;
}

export const Random = (number) => number ? generateRandoms(number) : uniqueRandomArray(numbers)() 

export const All = () => numbers;

export const Odd = () => numbers.filter(number => number%2 !== 0)

export const Even = () => numbers.filter(number => number%2 === 0)