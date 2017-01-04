var list = ['hola','adios']
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: list,
    random: uniqueRandomArray(list)
}