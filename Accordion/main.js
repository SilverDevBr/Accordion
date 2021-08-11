//Accordion
var acc = document.getElementsByClassName('acc-box');

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
