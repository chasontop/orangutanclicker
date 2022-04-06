// add to score 

var score = 0;

function addToScore (amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}
// dogo stuff
var dogocost = 5;
var dogoamount = 0;
var dogoops = 5;
function buydogo () {
    if (score >= dogocost) {
        score = score - dogocost;
        dogoamount = dogoamount + 1;
       dogocost = Math.round (1.75 * dogocost);
       dogoops = dogoamount * 5;

       if (dogoamount >= 15) {
        dogocost = Math.round (1.25 * dogocost / 1.75)
        }
        
        if (dogoamount >= 25) {
            dogocost = Math.round (1.5 * dogocost / 1.25)
            }    

            if (dogoamount >= 30) {
                dogocost = Math.round (1.75 * dogocost / 1.5)
                }
                


        document.getElementById("score").innerHTML = score;
        document.getElementById("dogocost").innerHTML = dogocost;
        document.getElementById("dogoamount").innerHTML = dogoamount;
        document.getElementById("dogoops").innerHTML = dogoops;
        updateops ();
    }
}
setInterval (function () {
    score = score + dogoamount * 5
    document.getElementById("score").innerHTML = score;
    document.getElementById("dogoamount").innerHTML = dogoamount;
} , 1000);


// frog

var frogcost = 10000
var frogamount = 0
var frogops = 25;
function buyfrog () {
    if (score >= frogcost) {
        score = score - frogcost;
        frogamount = frogamount + 1;
        frogcost = Math.round(1.75 * frogcost);
        frogops = frogamount * 25;

        if (frogamount >= 15) {
            frogcost = Math.round (1.25 * frogcost / 1.75)
            }
            
            if (frogamount >= 25) {
                frogcost = Math.round (1.5 * frogcost / 1.25)
                }    
    
                if (dogoamount >= 30) {
                    frogcost = Math.round (1.75 * frogcost / 1.5)
                    }




        document.getElementById("score").innerHTML = score;
        document.getElementById("frogcost").innerHTML = frogcost;
        document.getElementById("frogamount").innerHTML = frogamount;
        document.getElementById("frogops").innerHTML = frogops;
        updateops ();
    }
}

setInterval (function () {
    score = score + frogamount * 25;
    document.getElementById("score").innerHTML = score;
    document.getElementById("frogamount").innerHTML = frogamount;
} , 1000);

//per second

var ops = 0;

function updateops () {
    ops = dogoamount * 5 + monkeamount * 10 + frogamount * 25 + rokamount * 150;
    document.getElementById("ops").innerHTML = ops;
}

// monke stuff

var monkeamount = 0
var monkecost = 100
var monke = 0;
var monkeops = 10;

function buymonke () {
    if (score >= monkecost) {
        score = score - monkecost;
        monkeamount = monkeamount + 1;
       monkecost = Math.round (1.75 * monkecost);
       monkeops = monkeamount * 10;

       if (monkeamount >= 10) {
        monkecost = Math.round (1.25 * monkecost / 1.75)
        }
        
        if (monkeamount >= 20) {
            monkecost = Math.round (1.5 * monkecost / 1.25)
            }    

            if (monkeamount >= 30) {
                monkecost = Math.round (1.75 * monkecost / 1.5)
                }


        document.getElementById("score").innerHTML = score;
        document.getElementById("monkecost").innerHTML = monkecost;
        document.getElementById("monkeamount").innerHTML = monkeamount;
        document.getElementById("monkeops").innerHTML = monkeops;
        updateops ();
    }
}

setInterval (function () {
    score = score + monkeamount * 10
    document.getElementById("score").innerHTML = score;
    document.getElementById("monkeamount").innerHTML = monkeamount;
} , 1000);



// rok

var rokcost = 1000000;
var rokamount = 0;
var rokops = 0;


function buyrok () {
    if (score >= rokcost) {
        score = score - rokcost;
        rokamount = rokamount + 1;
        rokcost = Math.round (rokcost * 1.75)
        rokops = rokamount * 150;

        if (rokamount >= 15) {
            rokcost = Math.round (1.25 * rokcost / 1.75)
            }
            
            if (rokamount >= 25) {
                rokcost = Math.round (1.5 * rokcost / 1.25)
                }    
    
                if (rokamount >= 30) {
                    rokcost = Math.round (1.75 * rokcost / 1.5)
                    }

        document.getElementById("score").innerHTML = score;
        document.getElementById("rokcost").innerHTML = rokcost;
        document.getElementById("rokamount").innerHTML = rokamount;
        document.getElementById("rokops").innerHTML = rokops;
        updateops ();
    }
}

setInterval (function () {
    score = score + rokamount * 150
    document.getElementById("score").innerHTML = score;
    document.getElementById("rokamount").innerHTML = rokamount;
} , 1000);

// IMPORTANT SAVE STUFF

function savegame () {
    var gamesave = {
        score: score,
        dogocost: dogocost,
        dogoamount: dogoamount,
        monkeamount : monkeamount,
        monkecost: monkecost,
        totalclicks: totalclicks,
        frogamount: frogamount,
        frogcost: frogcost,
        dogoops: dogoops,
        monkeops: monkeops,
        frogops: frogops,
        rokops: rokops,
        rokamount: rokamount,
        rokcost: rokcost
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
    document.getElementById("totalclicks").innerHTML = totalclicks;
    document.getElementById("frogamount").innerHTML = frogamount;
    document.getElementById("frogcost").innerHTML = frogcost;
    document.getElementById("dogoops").innerHTML = dogoops;
    document.getElementById("monkeops").innerHTML = monkeops;
    document.getElementById("frogops").innerHTML = frogops;
    document.getElementById("rokamount").innerHTML = rokamount;
    document.getElementById("rokcost").innerHTML = rokcost;
    document.getElementById("rokops").innerHTML = rokops;
}


function loadgame () {
    var savedgame = JSON.parse(localStorage.getItem("gamesave"));
    if (typeof savedgame.score !== "undefined") score = savedgame.score;
    if (typeof savedgame.dogocost !== "undefined") dogocost = savedgame.dogocost;
    if (typeof savedgame.dogoamount !== "undefined") dogoamount = savedgame.dogoamount;
    if (typeof savedgame.monkeamount !== "undefined") monkeamount = savedgame.monkeamount;
    if (typeof savedgame.monkecost !== "undefined") monkecost = savedgame.monkecost;
    if (typeof savedgame.totalclicks !== "undefined") totalclicks = savedgame.totalclicks;
    if (typeof savedgame.frogamount !== "undefined") frogamount = savedgame.frogamount;
    if (typeof savedgame.frogcost !== "undefined") frogcost = savedgame.frogcost;
    if (typeof savedgame.dogoops !== "undefined") dogoops = savedgame.dogoops;
    if (typeof savedgame.monkeops !== "undefined") monkeops = savedgame.monkeops;
    if (typeof savedgame.frogops !== "undefined") frogops = savedgame.frogops;
    if (typeof savedgame.rokops !== "undefined") rokops = savedgame.rokops;
    if (typeof savedgame.rokamount !== "undefined") rokamount = savedgame.rokamount;
    if (typeof savedgame.rokcost !== "undefined") rokcost = savedgame.rokcost;
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
    alert('Game Saved!')
}
}, false);


// wdym im not hacking im just good

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.which == 81) {
        event.preventDefault();
        addToScore(1000000000000000);
    }
}, false);

// save button test

function savegamebutton () {
savegame();
alert('Game Saved!')
   }

// total clicks

var totalclicks = 0

function updatetotalclicks (amount) {
    totalclicks = totalclicks + amount ;
    document.getElementById("totalclicks").innerHTML = totalclicks;
}

//random

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.which == 76) {
        event.preventDefault();
       alert('balls');
    }
}, false);
