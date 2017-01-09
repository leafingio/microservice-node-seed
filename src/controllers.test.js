var expect = require('chai').expect;
var Controllers = require('./controllers');

describe('Controllers', function(){
    describe('All', function(){
        it('Should be an array of numbers', function(){
            expect(Controllers.All()).to.satisfy(isArrayOfNumbers);
            
            function isArrayOfNumbers(array) {
                return array.every(function(item){
                    return typeof item === 'number';
                });
            }
        })
        it('Should contain 9', function(){
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
});