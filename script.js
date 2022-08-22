// we are passing name of the function as input
// we are waiting for the click event to happen before we call the handleClick function...
// that's why we don't write function()


/* Method-1: By using function name

document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("Got clicked!");
}

*/

/* Method-2: Using Anonymous Functions

document.querySelectorAll("button").addEventListener("click",function(){
    alert("Got Clicked");
})

*/

/* 'Got Clicked' alert coming up for all letters

var NumberOfDrumButtons=document.querySelectorAll(".drum").length; 
[used the 'length' attribute as we need the no. of drums]

*/

/*
for(var i=0;i<NumberOfDrumButtons;i++){  //or we can use the while-loop: while(i<NumberOfDrumButtons)
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("Got Clicked");
    })
}
*/

var NumberOfDrumButtons=document.querySelectorAll(".drum").length; 
for(var i=0;i<NumberOfDrumButtons;i++){
        /*
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        console.log(this.style.color="white"); */
        // OR     this.style.color="white";

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  
  
function makeSound(key) {
  
    switch (key) 
    {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
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
  
      default: console.log(key);
    }
}
  
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);  
}  