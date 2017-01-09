var expect = require('chai').expect;
var Controllers = require('./controllers');

function isArrayOfNumbers(array) {
    return array.every(function(item){
        return typeof item === 'number';
    });
}

describe('Controllers', function(){
    describe('All', function(){
        it('Should be an array of numbers', function(){
            expect(Controllers.All()).to.satisfy(isArrayOfNumbers);
        })
        it('Should contain number 9', function(){
            expect(Controllers.All()).to.include(9);
        })
    })
    describe('Random', function(){
        it('Should return a random number', function(){
            var randomItem = Controllers.Random();
            expect(Controllers.All()).to.include(randomItem)
        })
        it('Should return an array of numbers if passed a number', function(){
            var randomItems = Controllers.Random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item){
                expect(Controllers.All()).to.include(item);
            })
        })
    })
    describe('Odd', function(){
        it('Should return an array of numbers', function(){
            expect(Controllers.Odd()).to.satisfy(isArrayOfNumbers);
        })
        it('Should contain 5 numbers', function(){
            expect(Controllers.Odd()).to.have.length(5);
        })
        it('Should contain number 5', function(){
            expect(Controllers.Odd()).to.include(5)
        })
    })
    describe('Even', function(){
        it('Should return an array of numbers', function(){
            expect(Controllers.Even()).to.satisfy(isArrayOfNumbers);
        })
        it('Should contain 5 numbers', function(){
            expect(Controllers.Even()).to.have.length(5);
        })
        it('Should contain number 6', function(){
            expect(Controllers.Even()).to.include(6)
        })
    })
});