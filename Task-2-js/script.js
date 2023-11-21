
//#### Task 1: Function Basics
// 1.1 Create a function named `greetUser` that takes a user's name as an argument and prints a personalized greeting.
function greet(name) {
     alert("Hello, " + name);

}
greet(prompt("Enter Name:"));

//#========================================

//1.2 Write a function `calculateArea` that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

//  function findArea(width, height) {
//     return width * height;
//  }
//  function findPerimeter(width, height) {
//     return 2 * (width + height);
//  }

//  let width = 5;
//  let height = 5;

//  let area = findArea(width, height);
//  let perimeter = findPerimeter(width, height);

//  console.log("Area of rectangle: " + area);
//  console.log("Perimeter of rectangle: " + perimeter);

//#===========================================

//1.3 Implement a function `isEven` that checks if a given number is even. Return `true` if it is, otherwise `false`.

function isEven(number) {
     return number % 2 === 0;
}

console.log(isEven(7));

//#===========================================
/// Task 2.1 Create an array named `fruits` containing at least five different fruit names. Write a function `displayFruits` that prints each fruit in the array.

let fruits = ["Ananas", "Pear", "Apple", "Kiwi", "Banana"];

function displayFruits() {
     for (let fruit of fruits) {
          console.log(fruit);
     }
}

displayFruits();
//#===========================================
///2.2 Implement a function `reverseArray` that reverses the elements of an array. Test it with both numeric and string arrays.

function reverseArray(arr) {
     return arr.reverse();
}

let numericArray = [7, 5, 13, 50, 41];
console.log(reverseArray(numericArray));
//#===========================================
/// Task 2.3 Write a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
     return numbers.filter(num => num % 2 === 0);
}

let numbersArray = [9, 20, 15, 23, 25, 52, 98, 70];
console.log(filterEvenNumbers(numbersArray));
//#===========================================
//// Task 3.1 Define an object `person` with properties `name`, `age`, and `city`. Write a function `displayPersonInfo` that prints the information in a readable format.

let person = {
     name: "Orkhan",
     f_name: "Bayramov",
     age: 30,
     city: "Baku"
};


function displayPersonInfo() {
     console.log(`Name: ${person.name}, Surname: ${person.f_name} Age: ${person.age}, City: ${person.city}`);
}


displayPersonInfo();

//#===========================================
//// Task 3.2 Extend the `person` object by adding a method `haveBirthday` that increments the age by 1 each time it's called.

let persone = {

     age: 40,
   };
   
   function displayPersoneInfo() {
   
     console.log(`Age: ${persone.age}`);
   }
   
   persone.haveBirthday = function () {
     this.age += 1;
   };
   
   persone.haveBirthday();
   displayPersoneInfo();
//#===========================================
//// Task 3.3 Create an object `car` with properties `make`, `model`, and `year`. Write a method `displayCarInfo` that prints the car's information.

const cars = {
     make: 'Hyundai',
     model: 'i30',
     year: 2009,
   
     displeyCarInfo: function () {
       console.log(`Make: ${this.make}`);
       console.log(`Model: ${this.model}`);
       console.log(`Year: ${this.year}`);
     }
   };
   
   cars.displeyCarInfo();
//#===========================================
///// Task 4.1 Create an array of numbers and use the `map` function to square each element. Print the resulting array.

const numbers = [2, 4, 5, 7, 9];

const squaredNumbers = numbers.map(function(number) {
    return number * number;
});

console.log(squaredNumbers);
//#===========================================
///// Task 4.2 Given an array of strings, use the `filter` function to create a new array containing only strings with more than 5 characters.

const fruit = ["Lemon", "Apple", "Pear", "Banana", "Grapes", "Kiwi", "Mango", "Orange", "Grapefruit"];

const longFruit = fruit.filter(function(fruit) {
    return fruit.length > 5;
});

console.log(longFruit);
//#===========================================

// Task 4.3
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (x, y) => x + y,
  initialValue,
);

console.log(sumWithInitial);
//#===========================================