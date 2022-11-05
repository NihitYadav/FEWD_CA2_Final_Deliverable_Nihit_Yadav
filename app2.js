for(var i=25; i>0; i--){
    let slider = document.createElement("div");
    slider.setAttribute("class","slider animate");
    slider.setAttribute("id", "slider"+i);
    document.getElementById("game").append(slider);
}

var slideWidth = 400; 

function stopSliding(slider){
    var sliderCurrent = document.getElementById("slider".concat(slider));
    var sliderAbove = document.getElementById("slider".concat(slider+1));
    let keypressaudio = new Audio("./assets/place.wav")
    keypressaudio.play();
    if(slider==1){
        var slideBelow = sliderCurrent;
    }else{
        var slideBelow = document.getElementById("slider".concat(slider-1));
    }
    var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;
    var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
    var leftBelow = parseInt(window.getComputedStyle(slideBelow).getPropertyValue("left"));
   left =  parseInt(left);
    var difference = left - leftBelow;
    var absDifference = Math.abs(difference);
    if(difference>width||difference<-width){
        var score = "Score: ".concat(slider-1);
        location.href = "./gameover.html";
   var scoreofuser=localStorage.setItem('scoreboard',score)

    }
    if(difference<0){
        left = left + absDifference;
        sliderCurrent.style.left = left.toString().concat("px");  
    }
    var offset = (width - absDifference).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";
    var onclick = "stopSliding(" + (slider+1) + ")";
    document.getElementById("btn").setAttribute("onclick", onclick);
}

let backgroundSound = new Audio("./assets/bgm2.mp3");
backgroundSound.play();
backgroundSound.loop = true;
