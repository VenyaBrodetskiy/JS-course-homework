//
// Execise 0. Write a method that outputs a last family member by the lastName passed to the method
//

function createPerson(firstName, lastName, birthDate) {
    // function creates person
    return {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
    };
}
// creating family by creating several family members
function family() {
    return [
        createPerson("John", "Doe", new Date(1979, 4, 23)),
        createPerson("Kristin", "Doe", new Date(1987, 4, 2)),
        createPerson("Joe", "Smith", new Date(1978, 7, 8))
    ];
}
family = family();
console.log('Family created: ', family);

function findLastMemberWithFamily(family, lastName) {
    family.reverse(); // меняем порядок элементов
    findedElement = family.find((person) => person.lastName === lastName); // находим первый элемент
    family.reverse(); // возвращаем массив в изначальное состояние
    return findedElement;
}
function findLast_ver2(family, lastName) {
    for (let i = family.length - 1; i >= 0; i--) {
        if (family[i].lastName === lastName) return family[i];
    }
}
console.log('--> Exercise 0 - Finding last member by his last name');
console.log(findLastMemberWithFamily(family, 'Doe'));
console.log(findLast_ver2(family, 'Doe'));
console.log('--> Exercise 0    finished \n');



//
// Exercise 1. Making range array
//
function range(min, max, step = 1) {
    let array = [];
    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

const numbers = range(1, 20, 2); 
console.log('--> Exercise 1 - Making range function');
console.log('Array created: ', numbers);
console.log('--> Exercise 1    finished \n');
//
// Ex. 1 finished
//


//
// Ex. 2. Includes function
//
function includesByCheating(array, searchElement) {
    // cheating. any array object already has this function
    return array.includes(searchElement);
}
function includesBy_forEach(array, searchElement) {
    // using forEach to iterate array
    let result = false;
    array.forEach(element => {
        if (element === searchElement) result = true;        
    });
    return result;
}
function includesByFor(array, searchElement) {
    // using for in to iterate array
    for (let element in array) {
        if (element === searchElement) true;
    }
    return false;
}
console.log('--> Exercise 2 - Making includes function');
console.log(numbers);
console.log(includesByFor(numbers, 5));
console.log('--> Exercise 2    finished \n');

//
// Ex. 3. Except
//
function except(array, excluded) {
    for (let i_array = 0; i_array < array.length; i_array++) {
        for (let i_excluded = 0; i_excluded < excluded.length; i_excluded ++) {
            if (array[i_array] === excluded[i_excluded]) array.splice(i_array, 1);
        }
    }
    return array;
}
let excluded = [1, 19]
console.log('--> Exercise 3 - Excluding massive from massive');
console.log(numbers, '\n', excluded);
console.log('Output: ', except(numbers, excluded));
console.log('--> Exercise 3    finished \n');


//
// Ex. 4. Count Occurrences
//
function countOccurrences(array, element) {
    let count = 0;
    for (let i of array) {
        if (i === element) count++;
    }
    return count;
}
numbers.push(3);
const searchElement = 3;
console.log('--> Exercise 4 - Count Occurrences');
console.log(numbers, '\n', searchElement);
console.log('Output: ', countOccurrences(numbers, searchElement));
console.log('--> Exercise 5    finished \n');
