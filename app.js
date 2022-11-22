let hands = ["Rock","Paper","Scissors"];
let messageEl = document.getElementById ('message-el');
let userEl = document.getElementById ('user-el');
let computerEl = document.getElementById ('computer-el');
let	rockEl = hands[0];
let	paperEl = hands[1];
let	scissorsEl = hands[2];

function getHand () {
	let handIndex = hands [Math.floor (Math.random ()*3)*1];
	return handIndex;
};

function computerChoice (){
	return getHand(); 
};


function rockHand (){
	computerEl.textContent = computerChoice ();
	const pcChoice = computerChoice ();
	userEl.textContent = "Your choice:" + " " + hands[0];
	
	if (pcChoice === hands[2]){
		messageEl.textContent = "You won!!!"
	} else if (pcChoice === hands[1]){
		messageEl.textContent = "You lost!!!"
	} else {
		messageEl.textContent = "No Winners"
	}
	
};

function paperHand (){
	userEl.textContent = "Your choice: PAPER";
	paperEl = getHand ();
	if (getHand ()=== hands[1]){
		messageEl.textContent = "No Winner!!!"
	} else if (getHand ()=== hands[2]){
		messageEl.textContent = "You lost!!!"
	} else {
		messageEl.textContent = "You won!!!"
	}
	computerEl.textContent = computerChoice ();
};

function scissorsHand (){
	userEl.textContent = "Your choice: SCISSORS";
	scissorsEl = getHand ();
	if (getHand ()=== hands[2]){
		messageEl.textContent = "No Winner!!!"
	} else if (getHand ()=== hands[0]){
		messageEl.textContent = "You lost!!!"
	} else {
		messageEl.textContent = "You won!!!"
	}
	computerEl.textContent = computerChoice ();
};





