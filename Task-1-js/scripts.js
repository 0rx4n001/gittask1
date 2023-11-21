
// // ====================== Task 1 Array methods =========================
const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//###############################################
//***MAP***
// Map====>1. Get the array of all names

  // let namesAr = persons.map((item)=>item.name)
  // console.log(namesAr)

// ---------------------------------------------

// //Map====>2. Get the array of all heights

  // let heightAr = persons.map((item)=>item.height)
  // console.log(heightAr)

// //---------------------------------------------

// //Map====>3. Get the array of objects with just name and height properties

// let val = persons.map((item) => [{
//   name: item.name,
//   height: item.height

// }]);

// console.log(val);

// //---------------------------------------------

// //Map====>4. Get the array of all first names

// //---------------------------------------------

// //########################################################
//***FILTER***

// //Filter====>1. Get characters with a mass greater than 100

// // let filtArr= persons.filter((item)=>Number(item.mass)>100)
// // console.log(filtArr)

// //---------------------------------------------
// //Filter====>2. Get characters with a height of less than 200

// // let filtArr= persons.filter((item)=>Number(item.height)<200)
// // console.log(filtArr)

// //---------------------------------------------
// //Filter====>3. Get all male characters

// // let filtArr= persons.filter((item)=>item.gender=='male')
// // console.log(filtArr)

// //---------------------------------------------
// //Filter====>4. Get all female characters

// // let filtArr= persons.filter((item)=>item.gender=='female')
// // console.log(filtArr)

// //--------------------------------------------

// //########################################################
//***SORT***

// //Sort====>1. Sort by mass

// //   let sortarr = persons.sort ((x,y) => x.mass - y.mass)
// //   console.log(sortarr)

// //-----------------------------------------------

// //Sort====>2. Sort by height

// //   let sortarr = persons.sort ((x,y) => x.height - y.height)
// //   console.log(sortarr)

// //-----------------------------------------------

// //Sort====>3. Sort by name

// //     let sortArr = persons.sort((a,b) => {
// //     const nameA = a.name.toUpperCase();
// //     const nameB = b.name.toUpperCase(); 
// //     if (nameA < nameB) {
// //       return -1;
// //     }
// //     if (nameA > nameB) {
// //       return 1;
// //     }
// //     return 0;
// //   });
// //     console.log(sortArr)

// //-----------------------------------------------

// //Sort====>4.Sort by gender

// let sortArr = persons.sort((a, b) => {
//     const male = a.gender;
//     const female = b.gender;
//     if (male < female) {
//         return -1;
//     }
//     if (male > female) {
//         return 1;
//     }
//     return 0;
// });
// console.log(sortArr)

// -----------------------------------------------

// //########################################################
//***EVERY***
//Every====>1. Does every character have blue eyes?

// everyBlue = persons.every((item) => item.eye_color=="blue") 
// console.log(everyBlue)

// // -----------------------------------------------

// //Every====>2. Does every character have a mass of more than 40?

// everyMass = persons.every((item) => item.mass>40)
// console.log(everyMass)

// // -----------------------------------------------
// //Every====>3. Is every character shorter than 200?

// everyHeight = persons.every((item) => item.height>200)
// console.log(everyHeight)

// // -----------------------------------------------

// //Every====>4.Is every character male?

// everyGen = persons.every((item) => item.gender == "male")
// console.log(everyGen)

// -----------------------------------------------

// //########################################################
//***SOME***
//SomeEvery====>1. Is there at least one male character?

  someMale = persons.some((item) => item.gender == "male")   
  console.log(someMale)

  // -----------------------------------------------\

//SomeEvery====>2. Is there at least one character with blue eyes?

someblue = persons.some((item) => item.eye_color == "blue")   
console.log(someblue)

  // -----------------------------------------------\

//SomeEvery====>3. Is there at least one character taller than 210?

some210 = persons.some((item) => Number (item.height) > 210)   
console.log(some210)

  // -----------------------------------------------\

//SomeEvery====>4. Is there at least one character that has a mass of less than 50?

some50 = persons.some((item) => Number (item.mass) < 50)   
console.log(some50)

  // -----------------------------------------------\



