var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');

var jaune = document.getElementById('jaune');
var orange = document.getElementById('orange');
var rose = document.getElementById('rose');
var violet = document.getElementById('violet');
var bleu = document.getElementById('bleu');
var vert = document.getElementById('vert');

function music(sound){
  sound.currentTime = 0;
  sound.play()
}

  jaune.onclick = music(a);
  orange.onclick = music(b);
  rose.onclick = music(c);
  violet.onclick = music(d);
  bleu.onclick = music(e);
  vert.onclick = music(f);
