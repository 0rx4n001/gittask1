const arr11=[1,2,3,4,5,6,7];
const arr10=[10,20,30,40,50,60,70];
let vall;
let vall1;

// arr.push("hello");

// arr.push({name: "orxan"}); //massivin sonuna elave edir

// arr.concat([1,2,3,4,5,6]);

// arr.unshift("name"); //massivin evveline elave edir

// arr.unshift("333");
// arr.unshift("323");

// arr.pop(); //sondan silir

// arr.shift();

// vall=arr.slice(2,5); //massivi saxlamaqla araligi kesir
// vall1=arr1.splice(2,5); //massivi saxlamadan araligi kesir

// // vall=arr.indexOf(3);  //indexe gore elementi secirik
// vall=arr.includes(3) //axtarilan elementin massivde olub olmadigini true false ile cavablayir

// vall=arr.forEach((item)=>console.log(item))

// arr.forEach(function(){
//     console.log(item);
// });


// function getSumOdd(func){       //istifade eden funksiya
// let valoffunc=func()
// return 45 + valoffunc;
// // console.log("val", valoffunc);
// }

// function getCalculate(){     //ist edilen funksiya
//     return 55;
// }

// // console.log(arr,vall);

// getSumOdd(getCalculate);

// arr.map((item)=>console.log(item*2));  //massivin icini dove salir

// console.log(arr.map((item)=>console.log(item)));

// vall=arr.filter((item)=>item>4) // massivin icindeki elementleri filterleyir 4den boyuk elementleri gosterir

// const employees=[{
//     name: "orxan",
//     age: 30,
//     dep: "it",
// }, 
// {
//     name: "oktay",
//     age: 25,
//     dep: "security",  
// },
// {
//     name: "sebuhi",
//     age: 28,
//     dep: "security",  
// },
// {
//     name: "kamran",
//     age: 40,
//     dep: "security",  
// },
// ];

// const filterArr = employees.filter((item) => item.dep === "security");
// // // const findArr = employees.find((item) => item.name === "oktay");

// console.log(filterArr);





// funksiya 2 parametr isteyir x,y. eger x=y olarsa cavab olaraq kvadrat cavabi verir else duzbucaqlidir.

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let x=4;
// let y=4;
// let result;


// if (x==y){
//     result = `Bu kvadratdir ve eni ${x}, uzunlugu ise ${y}`;
// } else {
//     result = `Bu duzbucaqlidir eni ${x}, uzunlugu ise ${y}`;
// }

// console.log(result);




// function BuNedir(x,y){  // funksiya 2 parametr isteyir x,y. eger x=y olarsa cavab olaraq kvadrat cavabi verir else duzbucaqlidir.
//     let value=0
//     let value1=0
//     if (x==y){
//         value=x*4;
//         console.log( `Bu kvadratdir ve eni ${x}, uzunlugu ise ${y} perimetri ${value}`)
//     } else {
//         // `Bu duzbucaqlidir eni ${x}, uzunlugu ise ${y}`;
//         value=x*y;
//         value1=(x+y)*2;
//         console.log( `Bu duzbucaqlidir ve eni ${x}, uzunlugu ise ${y} sahesi ${value} , perimetri ise ${value1}`)
//     }
// }      

// let result = BuNedir(2,1);

// funksiya parametr olaraq arr qebul eir. arrayin son ve ilk elementini yeni bir arr icinde return edin.

// arr.push({name: "orxan"}); //massivin sonuna elave edir

// arr.concat([1,2,3,4,5,6]);

// arr.unshift("name"); //massivin evveline elave edir


// const getFirstAndLastitem = (arr) =>{  //funksiyani yaradiriq
//     let newArr = [];    //yeni bir array yaradiriq
//     let firstItem = arr[0];         //yeni arrayin 1ci elementini deyisene menimsedirik (secilmis arrayin ilk elementidi)
//     let lastItem = arr[arr.length-1];   //yeni arrayin 2ci elementi deyisene menimsedirik (secilmis arrayin son elementidi)
//     newArr.push(firstItem);     //menimsetdiyimiz ilk elementi daxil edirik
//     newArr.push(lastItem);         //menimsetdiyimiz ilk elementi daxil edirik
//     return newArr;              //funksiyani return edirik
// }
// let arr = [1,2,3,4,5,6,7,8,9]; // icinden element secilecek array
// console.log(getFirstAndLastitem(arr)); //funksiyani ekrana cap edirik




// const getRevers = (String) =>{

// }


//   let metn = "Salam";
//   console.log(metn[3]);

// const dizi = [1, 2, 3, 4, 5];
// console.log("Orjinal dizi: " + dizi);

// let n = dizi.length;
// let temp;

// for (let i = 0; i < Math.floor(n / 2); i++) {
//     temp = dizi[i];
//     dizi[i] = dizi[n - i - 1];
//     dizi[n - i - 1] = temp;
// }

// console.log("Ters çevrilmiş dizi: " + dizi);

//========================================================================
// function getReverse(word){
//     let result = ""

//     // let n = word.length;
//     // let temp;
//     for (let i=[word.length-1]; i<= 0; i--){
//         result = result + word[i]
//     }
//     return result;

// }
// console.log(getReverse("salam"));
//=========================================================================
 
// const str = 'salam';
// console.log('Last txt: ' + str);
// let reversedStr = '';
 
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }
 
// console.log('New txt : ' + reversedStr);

//================================================

// const str = 'neveer give up';
// let ch = 'e';
// let say = 0;
 
// for (let i = str.length - 1; i >= 0; i--) {
//   if (ch==str[i]){
//     say==say+1;
//     console.log(say);
//   }
// }
 
// console.log(say);
//==============================================================

// sm car 1-3 
// m car 4-5
// l car 6-9

// const cars=[{
//     color: "red",
//     type: "mercedes",
//     capacity: 5,
//     price: 120
// }, 
// {
//     color: "blue",
//     type: "bmw",
//     capacity: 2,  
//     price: 70
// },
// {
//     color: "blue",
//     type: "ford",
//     capacity: 6,  
//     price:200
// },
// {
//     color: "blue",
//     type: "bmw",
//     capacity: 6,  
//     price:90
// },
// ];

// const sizeCars = cars.map((car)=>{
//     if(car.capacity<=3){
//     return `small ${car.type}`
//     }
//     if(car.capacity<=5){
//         return `medium ${car.type}`
//         }
//     else{
//         return `large ${car.type}`
//     }
// })
// console.log(sizeCars)


// //--- filter metoduyla qirmizi masinlarin qiymetin deyisme
// const disPrice = cars.filter((car) => car.color="blue").map((car)=> {
//     let discount = car.price - (car.price/100)*30;
//         return `new price ${discount} $ car model ${car.type}`
//     })     
// console.log(disPrice)

//----------------------------------------------------------------------------

//-- birbasa map metoduylla masinlara qiymet vermek
// const newPrice = cars.map((car)=>{
//     if(car.color="red"){
//     return car.price = car.price-(car.price/100)*5 
//     }
// })

// console.log(newPrice)

//========================================================
