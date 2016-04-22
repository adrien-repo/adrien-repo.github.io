function drawboard()
{
var whitecell = '#ffffff'
var blackcell = '#e6e6e6'
var selectedcell = '#ffffb3'
var blackborder = '#000000'
var colorused = ''

//clear board
context.beginPath();
context.rect(xboard-1, yboard-1, 8*60+1, 8*60+1);
colorused = whitecell;
context.fillStyle = colorused;
context.fill();
context.lineWidth = 2;
context.strokeStyle = colorused;
context.stroke();

for (li = 0; li < 4; li++) 
{ 
for (co = 0; co < 4; co++)
{
context.beginPath();
context.rect(xboard+li*2*cellsize, yboard+co*2*cellsize, cellsize, cellsize);
colorused = whitecell;
if ((li*2 == startx) && (co*2 == starty)) {colorused = selectedcell};
if ((li*2 == stopx) && (co*2 == stopy)) {colorused = selectedcell};
context.fillStyle = colorused;
context.fill();
context.lineWidth = 1;
context.strokeStyle = blackborder;
context.stroke();
context.beginPath();
context.rect(xboard+(li*2+1)*cellsize, yboard+co*2*cellsize, cellsize, cellsize);
colorused = blackcell;
if ((li*2+1 == startx) && (co*2 == starty)) {colorused = selectedcell};
if ((li*2+1 == stopx) && (co*2 == stopy)) {colorused = selectedcell};
context.fillStyle = colorused;
context.fill();
context.lineWidth = 1;
context.strokeStyle = blackborder;
context.stroke();
context.beginPath();
context.rect(xboard+li*2*cellsize, yboard+(co*2+1)*cellsize, cellsize, cellsize);
colorused = blackcell;
if ((li*2 == startx) && (co*2+1 == starty)) {colorused = selectedcell};
if ((li*2 == stopx) && (co*2+1 == stopy)) {colorused = selectedcell};
context.fillStyle = colorused;
context.fill();
context.lineWidth = 1;
context.strokeStyle = blackborder;
context.stroke();
context.beginPath();
context.rect(xboard+(li*2+1)*cellsize, yboard+(co*2+1)*cellsize, cellsize, cellsize);
colorused = whitecell;
if ((li*2+1 == startx) && (co*2+1 == starty)) {colorused = selectedcell};
if ((li*2+1 == stopx) && (co*2+1 == stopy)) {colorused = selectedcell};
context.fillStyle = colorused;
context.fill();
context.lineWidth = 1;
context.strokeStyle = blackborder;
context.stroke();
}
}
}


function drawmaterial()
{
	
var canvas = document.getElementById('myBoard');
var context = canvas.getContext('2d');
for(var myli=0; myli<8; myli++) 
{
	for(var myco=0; myco<8; myco++) 
	{
	testvalue = matrix[myco][myli]
		if (testvalue == -value_rook)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
                imageObj.src = Brook;
		}
		if (testvalue == -value_knight)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Bknight;
		}
		if (testvalue == -value_bishop)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Bbishop;
		}
		if (testvalue == -value_queen)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Bqueen;
		}
		if (testvalue == -value_king)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Bking;
		}
		if (testvalue == -value_pawn)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Bpawn;
		}
		if (testvalue == value_rook)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Wrook;
		}
		if (testvalue == value_knight)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Wknight;
		}
		if (testvalue == value_bishop)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Wbishop;
		}
		if (testvalue == value_queen)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Wqueen;
		}
		if (testvalue == value_king)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Wking;
		}
		if (testvalue == value_pawn)
		{
		var imageObj = new Image();
		imageObj.onload = (function() { var xpos = xboard+myli*cellsize; var ypos = yboard+myco*cellsize; return function(){ context.drawImage(this, xpos, ypos, cellsize, cellsize);};})(myco+100*myli)
		imageObj.src = Wpawn;
		}
	}
}
}
