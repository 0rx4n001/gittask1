const acordion = document.getElementsByClassName('contentBx');
for (let i = 0; i<acordion.length; i++){
    acordion[i].addEventListener('click', function(){
        // alert(acordion.length)
        this.classList.toggle('active');
    })
}