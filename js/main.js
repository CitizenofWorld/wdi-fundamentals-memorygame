console.log("up and running!");




var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
//var cardThree = cards[];
//var cardFour = cards[];

cardsInPlay.push(cardOne);
console.log("user just flipped" + " " + cardOne);
cardsInPlay.push(cardTwo);
console.log("user just flipped" + " " + cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
	}else{
		alert("sorry try again");
	}
}