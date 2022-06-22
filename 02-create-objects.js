// Exercise 1 - create object
const address0 = {
    street: 'Lenina',
    city: 'AnyCityInRussia',
    zipcode: '123456'
}
function showAddress(address) {
    /* console.log('Street: ', address.street);
    console.log('City: ', address.city);
    console.log('Zipcode: ', address.zipcode); */
    for (let i in address) {
        console.log(`${i}: ${address[i]}`)
    }
}
console.log('--> Exercise 1 - create object');
showAddress(address0);
console.log('--> Exercise 1 finished \n\n')

// Exercise 2 - address object with contructor
// without class, creating object with constructor function
function Address_constructor(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
console.log('--> Exercise 2.1 - create object with constructor function');
const address1 = new Address_constructor('Lenina', 'Moscow', '654321');
showAddress(address1);
console.log('--> Exercise 2.1 finished \n')

// without class, creating object with factory function
function Address_factory(street, city, zipcode) {
    return {
        street,
        city,
        zipcode,
    }
}
console.log('--> Exercise 2.2 - create object with factory function');
const address2 = new Address_factory('Krupskoy', 'Moscow', '123456');
showAddress(address2);
console.log('--> Exercise 2.2 finished \n\n')

//creating function which checks if objects are equal inside
function areEqual(address1, address2) {
    check = false;
    for (let i in address1) {
        if (address1[i] === address2[i]) {
            check = true;
        } else {
            return false;
        }
    }
    return check;
}
console.log('--> Exercise 3.1 - areEqual? (same inside)');
const address3 = new Address_factory('Krupskoy', 'Moscow', '123456');
console.log('Input objects:\n', address2, '\n', address3);
console.log('Are equal? ->',  areEqual(address2,address3));
console.log('Input objects:\n', address1, '\n', address2);
console.log('Are equal? ->',  areEqual(address1,address2));
console.log('--> Exercise 3.1 finished \n');

//creating function which checks if objects are same(uses same reference)
function areSame(address1, address2) {
    return address1 === address2;
}
console.log('--> Exercise 3.2 - areSame? (same object itseld)');
const address4 = address2;
console.log('Input objects:\n', address2, '\n', address4);
console.log('Are same? ->',  areSame(address2,address4));
console.log('Input objects:\n', address2, '\n', address3);
console.log('Are same? ->',  areSame(address2,address3));
console.log('--> Exercise 3.2 finished \n');

// additional. Exercize 1,2,3 using class
class Address {
    constructor(street, city, zipcode) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }
    
    showAddress() {
        console.log('Address contains of:')
        for (let i in this) {
            console.log(`${i}: ${this[i]}`)
        }
    }

    static areEqual(address1, address2) {
        check = false;
        for (let i in address1) {
            if (address1[i] === address2[i]) {
                check = true;
            } else {
                return false;
            }
        }
    return check;
    }

    static areSame(address1, address2) {
        return address1 === address2;
    }
}

console.log('--> Exercise 3* - same methods with creating Class Address');
const ad1 = new Address('Izumskaya', 'Butovo', '117624');
const ad2 = new Address('Izumskaya', 'Butovo', '117624');
const ad3 = new Address('Lenina', 'Moscow', '117624');
const ad4 = ad1; 
console.log(ad1, '\n', ad2, '\n', ad3, '\n', ad4, '\n',);
ad1.showAddress();
console.log('Are equal ad1 and ad2? ->',  Address.areEqual(ad1, ad2));
console.log('Are same ad1 and ad2? ->',  Address.areSame(ad1, ad2));
console.log('--> Exercise 3* finished \n');
Address.showAddress;

// Exercise 4 - create post object
const post = {
    title: 'Статья про пингвинов',
    body: 'Here will be important text about pinguins',
    views: 50123,
    comments: [
        { author: 'commenter1', body: 'this is interesting article'},
        { author: 'commenter2', body: "i don't like pinguins"}
    ],
    isLive: false
}
console.log('--> Exercise 4 - creating an object for blog post');
console.log(post); 
showAddress(post);
console.log('--> Exercise 4 finished \n');
console.log(post.hasOwnProperty('title'));

