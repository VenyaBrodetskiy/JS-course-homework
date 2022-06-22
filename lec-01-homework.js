console.log('Hello World');
let num1 = 12345;
let b = 4;
let c = 4;

len = num1.toString.length;
console.log(len)

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName)

  function sumOfN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
        console.log(`Iteration: ${i}. Sum = ${sum}`)
    }
  }
  sumOfN(10)

  function OddOrEven(num) {
    if (num % 2 === 0) {return 'Even'}
    else {return 'Odd'}
  }
  console.log(OddOrEven(523))

  function myMax(num1, num2) {
    if (num1 > num2) return num1
    else return num2
  }
  console.log(myMax(-1, 500))