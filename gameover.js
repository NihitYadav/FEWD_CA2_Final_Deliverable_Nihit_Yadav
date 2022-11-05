let msg = ["Try again",
 "Don't lose hope",
 "Better luck next time",
 "Nice try",
 "Keep trying",
 "Try harder"
]

var rdm = Math.floor(Math.random()*6)
console.log(rdm)
document.getElementById('gama').innerHTML = msg[rdm]

var replay = document.getElementById("he2")

replay.onclick = () => {
    location.href = "./game.html";
}

var pname = localStorage.getItem('p1');
document.getElementById('beta').innerHTML = pname;

var pname2 = localStorage.getItem('p2');
document.getElementById('beta2').innerHTML = "("+pname2+")";

var output = localStorage.getItem('scoreboard');
document.getElementById('scoreoutput').innerHTML = output;

let backgroundSound = new Audio("./assets/bgm.mp3");
backgroundSound.play();