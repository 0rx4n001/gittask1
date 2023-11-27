//==============Js TASK-4 =================
// 1.Write program that will reverse string: 'Hello world' => 'dlrow olleH'  
let str = prompt("ters cevirmek istediyiniz sozu daxil edin","");
function revWord(str){
  str = str.split("").reverse().join("");
  return alert(str);}
revWord(str)
//------------------------------------------
//2.Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'  
let x = prompt('Sozu daxil edin', '');
let x1 = x.length;
let y = +prompt('her simvol nece defe tekrarlansin?','');
let z = '';
function repSym(x1, y){
    for (let i = 0; i<x1; i++){
        z +=x[i].repeat(y);
    }
    return alert(z)
}
repSym(x1, y);
//----------------------------------------
//3.Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'    
let q = prompt('sozu daxil et','');
let qq = +prompt('bu soz nece defe tekrarlansin?', '');
alert(q.repeat(qq));
//----------------------------------------
// 4.Write program to find the first not repeated character: 'abacddbec' => 'e'  
let qStr = prompt('Metni daxil edin','');
function firstNotRepChar(qStr) {
  for (let i = 0; i < qStr.length; i++) {
    let char = qStr[i];
    if (qStr.indexOf(char) == i && qStr.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "simvol tapilmadi";
}
firstNotRepChar(qStr)
alert(`tekrarlanmayan simvol: ${firstNotRepChar(qStr)}`)
//----------------------------------------
//4.Write program to find the first repeated character: 'abacddbec' => 'a'
let wStr = 'abaqcddecq';
let we = '';
let val = 0;
function repeatCh(wStr){
  for (let i = 0; i < wStr.length; i++){
    val = 0;
    for( let j = 0; j<wStr.length; j++){
      if (wStr[i] === wStr[j]){
        val +=1; 
      }
    }   
    if (val > 1){
      we = wStr[i];
      break;
    }
  }
}
repeatCh(wStr)
console.log(we)
//----------------------------------------
//5.



