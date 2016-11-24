// function music(option) {
// 	this.sound = option.sound;
// }

var yellow = document.getElementsByClassName("yellow");
var orange = document.getElementsByClassName("orange");
var red = document.getElementsByClassName("red");
var purple = document.getElementsByClassName("purple");
var blue = document.getElementsByClassName("blue");
var green = document.getElementsByClassName("green");

/* ************************* ONCLICK PLAY ********************** */

yellow.onclick = function(){
	var a1 = document.createElement('audio');
  	a1.setAttribute('src', './souds/drums/hi_c_06b.wav');
  	a1.play();
};

orange.onclick = function(){
	var a2 = document.createElement('audio');
  	a2.setAttribute('src', './souds/drums/Shake32j.wav');
  	a2.play();
};

red.onclick = function(){
	var a3 = document.createElement('audio');
  	a3.setAttribute('src', './souds/strings/la3.mp3');
  	a3.play();
};

purple.onclick = function(){
	var a4 = document.createElement('audio');
  	a4.setAttribute('src', './souds/strings/do5.mp3');
  	a4.play();
};

blue.onclick = function(){
	var a5 = document.createElement('audio');
  	a5.setAttribute('src', './souds/drums/hhd1kck08.wav');
  	a5.play();
};

green.onclick = function(){
	var a6 = document.createElement('audio');
  	a6.setAttribute('src', './souds/strings/fa4.mp3');
  	a6.play();
};

// function play(){
// 	var audio = document.getElementById("a1");
//     audio.play();
// }