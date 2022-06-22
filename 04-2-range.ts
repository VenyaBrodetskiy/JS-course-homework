//
// Exercise 1. Making range array
//
function myRange(min: number, max: number, step: number = 1): number[] {
    let array: number[] = [];
    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}
const numbers1: number[] = myRange(1, 20, 2); 
console.log('--> Exercise 1 - Making range function');
console.log('Array created: ', numbers1);
console.log('--> Exercise 1    finished \n');
//
// Ex. 1 finished
//

export {myRange as default};