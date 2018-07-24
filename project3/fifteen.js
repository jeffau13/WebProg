window.onload = function () {

	$("shufflebutton").onclick = shuffle;
	$("solve").onclick = solve;
	placeElements();
	document.getElementById("puzzlepic").onchange = placeElements;
	launch();
};

var startTime, endTime, gameTime;
var moveCount = 0;
var numberOn_Piece = [];

function launch() {
	startTime = new Date();
}

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime; // counted in ms
	timeDiff /= 1000;
	gameTime = Math.round(timeDiff);

}

function placeElements() {
	var selection = document.getElementById("puzzlepic");
	var background = selection[selection.selectedIndex].value;
	var puzzlepieces = $$("#puzzlearea div");


	for (var i = 0; i < puzzlepieces.length; i++) {

		puzzlepieces[i].className = "puzzlepiece";
		puzzlepieces[i].id = i;
		numberOn_Piece[i] = i + 1;
		setPositionOfSinglePiece(puzzlepieces[i], i);
		setBackgroundForSinglePiece(puzzlepieces[i], i);
		puzzlepieces[i].addEventListener('click', movePieceEvent);
		puzzlepieces[i].onmouseover = highlightPiece;
		puzzlepieces[i].onmouseout = dehighlightPiece;
		$$('#puzzlearea div')[i].setStyle({
			backgroundImage: "url('" + background + " ')"
		});
	}
	numberOn_Piece[puzzlepieces.length] = 0;
}

var size = 4;

function setPositionOfSinglePiece(piece, index) {
	var x = Math.floor(index / size);
	var y = index % size;

	var fromTheTopEdge = x * (400 / size);
	var fromTheLeftEdge = y * (400 / size);
	piece.style.top = fromTheTopEdge + "px";
	piece.style.left = fromTheLeftEdge + "px";
}

function setBackgroundForSinglePiece(piece, index) {
	var x = Math.floor(index / size);
	var y = index % size;
	var fromTheRightEdge = 400 - x * (400 / size);
	var fromTheBottomEdge = 400 - y * (400 / size);
	piece.style.backgroundPosition = fromTheBottomEdge + "px " + fromTheRightEdge + "px";
}

function movePieceEvent(event) {
	var index = parseInt(this.id);
	var dest = canMoveTo(index);
	if (dest != -1) {
		movePieceFromTo(this, index, dest);
		//Reset the numberOn_Piece[i]
		numberOn_Piece[dest] = numberOn_Piece[index];
		numberOn_Piece[index] = 0;
		this.id = dest;
	}

	var puzzlepieces = $$("#puzzlearea div");
	var correctCount = 0;
	for (var i = 0; i < puzzlepieces.length; i++) {
		if (numberOn_Piece[i] == i + 1)
			correctCount++;
	}
	if (numberOn_Piece[puzzlepieces.length] == 0)
		correctCount++;
	if (correctCount == 16) {
		win();
	} else {
		$$('body')[0].setStyle({
			backgroundColor: 'white'
		});
	}
}

function movePieceFromTo(piece, index, dest) {
	var fromX = Math.floor(index / size) * (400 / size);
	var fromY = (index % size) * (400 / size);
	var destX = Math.floor(dest / size) * (400 / size);
	var destY = (dest % size) * (400 / size);
	var interval = 10;

	var i = 0;
	if (fromX == destX) {
		for (i = 1; i <= 100 / interval; i++)
			setTimeout(stepMoveTo, i * interval, piece, fromX, fromY + (destY - fromY) / (100 / interval) * i);
	} else {
		for (i = 1; i <= 100 / interval; i++)
			setTimeout(stepMoveTo, i * interval, piece, fromX + (destX - fromX) / (100 / interval) * i, fromY);
	}
	moveCount++;
}

function canMoveTo(index) {
	var destination = null;
	var left = index - 1;
	var right = index + 1;
	var up = index - 4;
	var down = index + 4;

	if (left >= 0 && left < 16)
		if (numberOn_Piece[left] == 0 && index % size != 0) {
			return left;
		}
	if (right >= 0 && right < 16)
		if (numberOn_Piece[right] == 0 && index % size != 3) {
			return right;
		}
	if (up >= 0 && up < 16)
		if (numberOn_Piece[up] == 0 && Math.floor(index / size) != 0) {
			return up;
		}
	if (down >= 0 && down < 16)
		if (numberOn_Piece[down] == 0 && Math.floor(index / size) != 3) {
			return down;
		}
	return -1;
}

function win() {
	end();
	alert("You have solved the puzzle with " + moveCount + " moves!");
	alert("Game time: " + gameTime + " seconds!");
	$$('body')[0].setStyle({
		backgroundImage: "url('confetti.jpg')"
	});

}

function solve() {
	end();
	alert("You have given up after " + moveCount + " moves and " + gameTime + " seconds !");
	$$('body')[0].setStyle({
		backgroundImage: "url('confetti.jpg')"
	});
	window.location.replace("fifteen.html");
}

function stepMoveTo(piece, x, y) {
	piece.style.top = x + "px";
	piece.style.left = y + "px";
}

function highlightPiece(event) {
	if (canMoveTo(parseInt(this.id)) != -1) {
		this.style.borderColor = "red";
		this.style.color = "red";
	}
}

function dehighlightPiece(event) {
	this.style.borderColor = "black";
	this.style.color = "white";
	this.style.textDecoration = "";
	this.textShadow = " 2px 2px #ff0000";
}

function shuffle(event) {
	var puzzlepieces = $$("#puzzlearea div");
	for (var step = 0; step < 200; step++) {
		list = [];
		for (var i = 0; i < puzzlepieces.length; i++) {
			var tempIndex = parseInt(puzzlepieces[i].id);
			if (canMoveTo(tempIndex) != -1)
				list.push(puzzlepieces[i]);
		}
		var piece = list[Math.floor(Math.random() * list.length)];
		var index = parseInt(piece.id);
		var dest = canMoveTo(index);
		movePieceFromTo(piece, index, dest);
		numberOn_Piece[dest] = numberOn_Piece[index];
		numberOn_Piece[index] = 0;
		piece.id = dest;
		list = [];
	}
	moveCount = 0;
}