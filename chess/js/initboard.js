// Load canvas
var canvas = document.getElementById('myBoard');
var context = canvas.getContext('2d');
// Load material picture sources
var Bbishop = document.getElementById("Bbishop").src;
var Bking = document.getElementById("Bking").src;
var Bknight = document.getElementById("Bknight").src;
var Bpawn = document.getElementById("Bpawn").src;
var Bqueen = document.getElementById("Bqueen").src;
var Brook = document.getElementById("Brook").src;
var Wbishop = document.getElementById("Wbishop").src;
var Wking = document.getElementById("Wking").src;
var Wknight = document.getElementById("Wknight").src;
var Wpawn = document.getElementById("Wpawn").src;
var Wqueen = document.getElementById("Wqueen").src;
var Wrook = document.getElementById("Wrook").src;
// Init matrix
var matrix = new Array(8);
for(var i=0; i<8; i++) 
	{
	matrix[i] = new Array(8);
	}
//zero the entire board
for(var myzeroli=0; myzeroli<8; myzeroli++) 
	{
	for(var myzeroco=0; myzeroco<8; myzeroco++) 
	{
		matrix[myzeroco][myzeroli] = 0
	}
	}
// init board start places
value_queen = 9
value_rook = 5
value_knight = 3.1
value_bishop = 3
value_pawn = 1
value_king = 50
// -1 for black, 1 for white
matrix[0][0] = -value_rook
matrix[0][1] = -value_knight
matrix[0][2] = -value_bishop
matrix[0][3] = -value_queen
matrix[0][4] = -value_king
matrix[0][5] = -value_bishop
matrix[0][6] = -value_knight
matrix[0][7] = -value_rook
matrix[1][0] = -value_pawn
matrix[1][1] = -value_pawn
matrix[1][2] = -value_pawn
matrix[1][3] = -value_pawn
matrix[1][4] = -value_pawn
matrix[1][5] = -value_pawn
matrix[1][6] = -value_pawn
matrix[1][7] = -value_pawn
matrix[7][0] = value_rook
matrix[7][1] = value_knight
matrix[7][2] = value_bishop
matrix[7][3] = value_queen
matrix[7][4] = value_king
matrix[7][5] = value_bishop
matrix[7][6] = value_knight
matrix[7][7] = value_rook
matrix[6][0] = value_pawn
matrix[6][1] = value_pawn
matrix[6][2] = value_pawn
matrix[6][3] = value_pawn
matrix[6][4] = value_pawn
matrix[6][5] = value_pawn
matrix[6][6] = value_pawn
matrix[6][7] = value_pawn
//Render start state
drawboard();
drawmaterial();
