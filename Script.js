// add to score 

var score = 0;

function addToScore (amount) {
    score = score + amount
    document.getElementById("score").innerHTML = score;
}
// dogo stuff
var dogocost = 5;
var dogoamount = 0;

function buydogo () {
    if (score >= dogocost) {
        score = score - dogocost;
        dogoamount = dogoamount + 1;
       dogocost = Math.round (1.75 * dogocost);

        document.getElementById("score").innerHTML = score;
        document.getElementById("dogocost").innerHTML = dogocost;
        document.getElementById("dogoamount").innerHTML = dogoamount;
        updateops ();
    }
}
setInterval (function () {
    score = score + dogoamount * 5
    document.getElementById("score").innerHTML = score;
    document.getElementById("dogoamount").innerHTML = dogoamount;
} , 1000);

//per second

var ops = 0;

function updateops () {
    ops = dogoamount * 5 + monkeamount * 10;
    document.getElementById("ops").innerHTML = ops;
}

// monke stuff

var monkeamount = 0
var monkecost = 100
var monke = 0;

function buymonke () {
    if (score >= monkecost) {
        score = score - monkecost;
        monkeamount = monkeamount + 1;
       monkecost = Math.round (1.75 * monkecost);

        document.getElementById("score").innerHTML = score;
        document.getElementById("monkecost").innerHTML = monkecost;
        document.getElementById("monkeamount").innerHTML = monkeamount;
        updateops ();
    }
}

setInterval (function () {
    score = score + monkeamount * 10
    document.getElementById("score").innerHTML = score;
    document.getElementById("monkeamount").innerHTML = monkeamount;
} , 1000);


// IMPORTANT SAVE STUFF

function savegame () {
    var gamesave = {
        score: score,
        dogocost: dogocost,
        dogoamount: dogoamount,
        monkeamount : monkeamount,
        monkecost: monkecost,
    };
    localStorage.setItem("gamesave", JSON.stringify(gamesave));
}

setInterval (function () {
savegame();
} , 30000);

window.onload = function () {
    loadgame();
    updateops ();
    document.getElementById('score').innerHTML = score;
    document.getElementById('dogocost').innerHTML = dogocost;
    document.getElementById('dogocost').innerHTML = dogocost;
    document.getElementById('dogoamount').innerHTML = dogoamount;
    document.getElementById('monkeamount').innerHTML = monkeamount;
    document.getElementById('monkecost').innerHTML = monkecost;
}


function loadgame () {
    var savedgame = JSON.parse(localStorage.getItem("gamesave"));
    if (typeof savedgame.score !== "undefined") score = savedgame.score;
    if (typeof savedgame.dogocost !== "undefined") dogocost = savedgame.dogocost;
    if (typeof savedgame.dogoamount !== "undefined") dogoamount = savedgame.dogoamount;
    if (typeof savedgame.monkeamount !== "undefined") monkeamount = savedgame.monkeamount;
    if (typeof savedgame.monkecost !== "undefined") monkecost = savedgame.monkecost;
}

//reset

function resetgame () {
    if (confirm ("Are you sure you want to reset ALL your progress?")) {
        var gamesave = {} ;
        localStorage.setItem('gamesave', JSON.stringify(gamesave));
        location.reload ();
    }
}

// save key

document.addEventListener("keydown", function(event) {
if (event.ctrlKey && event.which == 83) {
    event.preventDefault();
    savegame();
}
}, false);


// wdym im not hacking im just good

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.which == 81) {
        event.preventDefault();
        addToScore(1000000000000000);
    }
}, false);

