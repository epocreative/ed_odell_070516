var season = "winter";

if (season === "spring") {
  alert("Smell the flowers!");
} else if (season === "summer") {
  alert("Go to the beach!");
} else if (season === "fall") {
  alert("Bring your Sweater");
} else if (season === "winter") {
  alert("Bundle up!"); 
} else {
  alert("Forget about you!");
}


//For 05 July 2016

//#2 of assignment

function printWord() {
	return console.log("Woooord!");
}

printWord();

function alertTheMedia(media) {
	return alert("Alert the " + media);
}

alertTheMedia("Times")

function printString(string) {
	return console.log("This is a string");
}

printString();

//#3

function addingThings(x, y) {
	return x + y;
}

var result = addingThings(7, 8);

console.log(result);

var result = addingThings("ham & ", "eggs");

console.log(result);

//#4

var epoInfo = {
	favoriteBand: "Chili Peppers",
	luckyNumber: 7, 
	petName: "Percy",
	kidsName: ["Ryder", "Dallas"]
}

console.log(epoInfo.favoriteBand);
console.log(epoInfo.kidsName[1]);

//#5

var number = 12;

if (number < 10) {
  alert("Your number is less than 10");
} else {
  console.log("Your number " + number + " is greater than 10");
}

//#6

var number = 7;

if (number < 10) {
  alert("Your number is less than 10");
} else {
  console.log("Your number " + number + " is greater than 10");
}






