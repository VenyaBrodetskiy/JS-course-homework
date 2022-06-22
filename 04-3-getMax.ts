import range from './04-2-range'
//
// Exercise 6. Get Max
//
function getMax(array: number[]): number {
    return array.reduce((prev, current) => (prev > current)? prev : current);
}
const numbers = range(1, 10, 2);
console.log('Array is: ', numbers);
console.log('Max is: ', getMax(numbers));
