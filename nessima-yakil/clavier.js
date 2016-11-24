var jaune = document.getElementById('yellow');
var orange = document.getElementById('orange');
var rouge = document.getElementById('red');
var violet = document.getElementById('purple');
var bleu = document.getElementById('blue');
var vert = document.getElementById('green');



var playerJ = document.getElementById('un');
var playerO = document.getElementById('deux');
var playerR = document.getElementById('trois');
var playerP = document.getElementById('quatre');
var playerB = document.getElementById('cinq');
var playerG = document.getElementById('six');




jaune.addEventListener("click", function() {
    playerJ.play();
});


orange.addEventListener("click", function() {
    playerO.play();
});


rouge.addEventListener("click", function() {
    playerR.play();
});

violet.addEventListener("click", function() {
    playerP.play();
});

bleu.addEventListener("click", function() {
    playerB.play();
});

vert.addEventListener("click", function() {
    playerG.play();
});
