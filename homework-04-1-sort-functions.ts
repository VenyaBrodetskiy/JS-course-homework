// 
// Ex. sorting with for
//
function sort(array: number[]): number[] {
    const arr = [...array];
    const newArray: number[] = [];
    const len = arr.length;
    let min: number, indexMin: number;

    if (len == 1) return array;

    for (let i = 0; i < len; i++) {
        min = Math.min(...arr);
        newArray.push(min);
        indexMin = arr.indexOf(min);
        arr.splice(indexMin, 1);
    }

    return newArray;
}
let array: number[] = [1, 5, -4, 7, 20, 2];
console.log('Array sorted by my function: ', sort(array));
console.log(
    'Array back sorted by built in function: ',
    array.sort((a, b) => {
        return (a < b) ? 1
        : (a > b) ? -1
        : 0
    }),  
    )
///////////////////


// 
// Ex. sorting with underscore packaged
//
import _, { forEach } from 'underscore';

// 1 step: easy. Sort array of numbers
array = [1, 5, -4, 7, 20, 2];
const sortedArray = _.sortBy(array);
console.log('Array sorted by _underscore: ', sortedArray);

// 2 step. Sort array of objects
type Person = {
    firstName : string;
    lastName: string;
    birthDate: Date;
} 
function createPerson(firstName: string, lastName: string, birthDate: Date): Person {
    return {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
    };
}
const family = [
    createPerson("John", "Doe", new Date(1979, 4, 23)),
    createPerson("Kristin", "Doe", new Date(1987, 4, 2)),
    createPerson("Joe", "Smith", new Date(1978, 7, 8)),
    createPerson("Jane", "Smith", new Date(1978, 7, 8)),
    createPerson("Helen", "Doe", new Date(1978, 7, 8)),
];
console.log('Family array is: ');
family.forEach((member) => console.log(member));
/* const familySorted = _.sortBy(family, 'firstName');
console.log('Family sorted by firstName is: ');
familySorted.forEach(member => console.log(member)); */

// sorting with built in sort function
/* let sortRuleForPerson = function(a: Person, b: Person) {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
}
family.sort(sortRuleForPerson);
family.forEach(member => console.log(member)); */



function sortDescByLastNameThenFirstName(family: Person[]): Person[] {
    const copyFamily = [...family];
    copyFamily.sort((a, b) => {
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;
        if (a.lastName === b.lastName && a.firstName < b.firstName) return -1;
        if (a.lastName === b.lastName && a.firstName > b.firstName) return 1;
        return 0;
    })
   
    return copyFamily;
}

const sorted = sortDescByLastNameThenFirstName(family);
console.log('Family sorted by last -> first name is: ');
sorted.forEach(member => console.log(member.lastName + ' '+ member.firstName));

function sort2ndWay(family: Person[]): Person[] {
    const preSorted = _.sortBy(family, 'firs tName');
    const sorted = _.sortBy(preSorted, 'lastName');
    return sorted;
}
const sortedWithSortBy = sortDescByLastNameThenFirstName(family);
console.log('Family sorted by last -> first name with underscore is: ');
sortedWithSortBy.forEach(member => console.log(member.lastName + ' '+ member.firstName));