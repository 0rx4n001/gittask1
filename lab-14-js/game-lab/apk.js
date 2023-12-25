let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let outGnum = document.getElementById('outGnum');
let numbers = document.getElementById('numbers');


let number = [Math.floor(Math.random() * 100)]
let guesNum = 0;
let numberstr ='';
btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input>100 || input<1){
        alert('1-100 arasi eded daxil edin')
    }else{
    if (input == number){
        output.innerHTML = `Düz tapdınız, tapılan rəqəm ${number}`
    }else if (input < number){
        output.innerHTML = 'Tapdığınız rəqəm aşağıdır'
    };
    if (input>number){
        output.innerHTML ='Tapdığınız rəqəm yuxarıdır!'
    }
    guesNum++;
    // numbers = toString(input);
    outGnum.innerHTML = `Of guesses: ${guesNum}`
    numberstr=numberstr+` ${input+','}`
    numbers.innerHTML = `secdiyiniz reqemler ${numberstr}`
}
});