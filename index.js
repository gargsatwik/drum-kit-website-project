list = document.querySelectorAll('.drum')

function playSound(keydata){
    switch (keydata) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();   
        break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        default: console.log(this.innerHTML);
    }
}

for(var i=0; i<list.length; i++){
    list[i].addEventListener('click', function (){
            playSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
    });
}

document.addEventListener('keydown', function(event){
            playSound(event['key']);
            buttonAnimation(event['key']);
});

function buttonAnimation(key){
    var pressedKey = document.querySelector("."+key);
    pressedKey.classList.add('pressed')
    setTimeout(function (){
        pressedKey.classList.remove('pressed');
    }, 100);
};
