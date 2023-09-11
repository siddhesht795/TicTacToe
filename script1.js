console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover=false;

//Function to change the turn
const changeTurn = ()=>{
	return turn === "X" ? "O" : "X";
}

//Function to check for a win
const checkWin = ()=>{
	let boxtext = document.getElementsByClassName('boxtext');
	let wins = [
		[0, 1, 2, 5, 5, 0],
		[3, 4, 5, 5, 15, 0],
		[6, 7, 8, 5, 25, 0],
		[0, 3, 6, -5.1, 15, 90],
		[1, 4, 7, 5, 15, 90],
		[2, 5, 8, 15.15, 15, 90],
		[0, 4, 8, 5.1, 15, 45],
		[2, 4, 6, 5.1, 15, 135],
	]
	wins.forEach(e =>{
		if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
			document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
			isGameover=true;
			document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
			document.querySelector(".line").style.width = "20vw";
			document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

	}
	})
}

//Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(elements=>{
	let boxtext = elements.querySelector('.boxtext');
	elements.addEventListener('click', ()=>{
		if(boxtext.innerText === ''){
			boxtext.innerText = turn;
			turn = changeTurn();
			audioTurn.play();
			checkWin();
			if (!isGameover) {
				document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
			}	
		}
	})
})

reset.addEventListener('click', ()=>{
	let boxtext = document.querySelectorAll('.boxtext');
	Array.from(boxtext).forEach(element =>{
		element.innerText = "";
	});
	turn = "X";
	isGameover=false;
	document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
	document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
	document.querySelector(".line").style.width = "0vw";
})