
//==============Js TASK-4 =================
// 1.Write program that will reverse string: 'Hello world' => 'dlrow olleH'  
// let str = prompt("ters cevirmek istediyiniz sozu daxil edin","");
// function revWord(str){
//   str = str.split("").reverse().join("");
//   return alert(str);}
// revWord(str)
//------------------------------------------


//2.Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'  
// let x = prompt('Sozu daxil edin', '');
// let x1 = x.length;
// let y = +prompt('her simvol nece defe tekrarlansin?','');
// let z = '';
// function repSym(x1, y){
//     for (let i = 0; i<x1; i++){
//         z +=x[i].repeat(y);
//     }
//     return alert(z)
// }
// repSym(x1, y);
//----------------------------------------


//3.Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'    
// let q = prompt('sozu daxil et','');
// let qq = +prompt('bu soz nece defe tekrarlansin?', '');
// alert(q.repeat(qq));
//----------------------------------------


// 4.Write program to find the first not repeated character: 'abacddbec' => 'e'  
// let qStr = prompt('Metni daxil edin','');
// function firstNotRepChar(qStr) {
//   for (let i = 0; i < qStr.length; i++) {
//     let char = qStr[i];
//     if (qStr.indexOf(char) == i && qStr.indexOf(char, i + 1) == -1) {
//       return char;
//     }
//   }
//   return "simvol tapilmadi";
// }
// firstNotRepChar(qStr)
// alert(`tekrarlanmayan simvol: ${firstNotRepChar(qStr)}`)
//----------------------------------------


//5.Write program to find the first repeated character: 'abacddbec' => 'a'
// let wStr = 'abaqcddecq';
// let we = '';
// let val = 0;
// function repeatCh(wStr){
//   for (let i = 0; i < wStr.length; i++){
//     val = 0;
//     for( let j = 0; j<wStr.length; j++){
//       if (wStr[i] === wStr[j]){
//         val +=1; 
//       }
//     }   
//     if (val > 1){
//       we = wStr[i];
//       break;
//     }
//   }
// }
// repeatCh(wStr)
// console.log(we)
//----------------------------------------


//6.Write program to find the count of each character: 'abacddbec'=> {a: 2, b: 2, c: 1, d: 3, e: 1}   
// let str = "abacddbec";
// let obj ={};
// for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
// console.log(obj)
//----------------------------------------


//7.Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'   
// function subFunc(x,y,z){
//   if (x.length < y ){
//       return x 
//    }else{
//       return x.substring(0,y)+z
//     }
// }
// console.log(subFunc('hello world', 5, '...'))
//----------------------------------------


//8.Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...' 
// function truncateAfter( str, length, delimiter ) {
//   return str.substring( 0, ( str.indexOf( ' ', str.substring( length ) ) + length ) ) + delimiter;
// }

// function truncateMiddle(str, length, delimiter) {
// let middle = str.indexOf(' ', str.length / 2);

// return truncateAfter(str.substring(0, middle), length, '') 
//         + delimiter 
// }
// let res = truncateMiddle("Hello world, nice talking to you", 20, " ... ");

// console.log(res);
//----------------------------------------


//9.Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15 
// const numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum)
//----------------------------------------


//10. Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3   
// const num = [1, 2, 3, 4, 5];
// let sum = num.reduce(myFunction);
// function myFunction(total, value) {
//   return total + value;
// }
// let average = sum/num.length;
// console.log(average)
//----------------------------------------


//11.Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5    
// const points = [1, 2, 3, 4, 5];
// function myArrayMax(arr) {
// let len = arr.length;
// let max = -Infinity;
// while (len--) {
// if (arr[len] > max) {
// max = arr[len]; }}
// return max; }
// let f = myArrayMax(points)
// console.log(f)
//----------------------------------------


//12.Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1   
// const points = [40, 100, 1, 5, 25, 10];
// function myArrayMin(arr) {
// let len = arr.length;
// let min = Infinity;
// while (len--) {
// if (arr[len] < min) {
// min = arr[len]; } }
// return min;}
// let f = myArrayMin(points)
// console.log(f)
//----------------------------------------


//13.Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4  
// function print2largest(arr, arr_size) {
//   arr.sort();
//   arr.reverse();
//   for (let i = 1; i < arr_size; i--) {
//       if (arr[i] != arr[0]) {
//           console.log(arr[i]);
//           return;
//       }
//   }
// }
// let arr= [ 12, 35, 1, 10, 34, 1 ];
// let n = arr.length;
// print2largest(arr, n);
//----------------------------------------


//14.Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2 
// let arr = [1, 2, 3, 4, 5];
// let min = Infinity, secondMin = Infinity; 
// for (let i= 0; i< arr.length; i++) {
//     if (arr[i]< min) {
//         secondMin = min;
//         min = arr[i]; 
//     } else if (arr[i]< secondMin) {
//         secondMin = arr[i]; 
//     }
// }
// console.log(secondMin);
//----------------------------------------


//15.Create a program to find the count of each element in an array of numbers: 
// let strNum = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// let objNum ={};
// for(let s of strNum)if(!objNum[s])objNum[s] = 1;else objNum[s] = objNum[s]  + 1;
// console.log(objNum)
//----------------------------------------


//16.Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9
// const nums = [1, 2, 3, 4, 5];
// const oddNums = nums.filter(oddFunc);
// function oddFunc(item){
//   if ((item % 2)!=0){
//     return item
//   }
// }
// let sumOdd = oddNums.reduce(myFunc);
//     function myFunc(x,y){
//         return x+y
// }
// console.log(sumOdd);
//----------------------------------------