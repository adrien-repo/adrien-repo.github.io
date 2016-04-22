function validatemove()
{
	
if (whoisthinking == 1)
{
	legalmoveslist = listlegalmoves(matrix);
	var passedtest = 0;
	var candidatemove = [];
	candidatemove = candidatemove.concat([[starty,startx,stopy,stopx]])
	
	for (lilegal = 0; lilegal < legalmoveslist.length; lilegal++) 
	{ 
		if (legalmoveslist[lilegal].equals(candidatemove[0])) 
			{
			passedtest = 1
			}
	}
	
	if (passedtest == 1)
	{
		//make move in matrix and render
		matrix[stopy][stopx] = matrix[starty][startx]
		matrix[starty][startx] = 0
		//drawboard();
		//drawmaterial();
		
		//update chart for stats
		var currentrank = (matrix.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
		mydata.push([myturn,currentrank])
		myturn=myturn+1;
		drawChart();
		document.getElementById('infotext').innerHTML = "You have moved ! Now I am thinking..";
		//AI turn now !
		whoisthinking = -1;

		try {
		aiturn();
		}
		catch(err) {alert(err.message)
			}
		//need to store back choosen move in startx, etc values for move tb drawed with highlight
		starty = startychoosen;
		startx = startxchoosen;
		stopy = stopychoosen;
		stopx = stopxchoosen;
		matrix[stopy][stopx] = matrix[starty][startx]
		matrix[starty][startx] = 0
		drawboard();
		drawmaterial();
		//update chart for stats
		var currentrank = (matrix.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
		mydata.push([myturn,currentrank])
		myturn=myturn+1;
		drawChart();
		document.getElementById('infotext').innerHTML = "Your turn !";
		//Human turn now !
		whoisthinking = 1;
		
		
	} else {
		document.getElementById('infotext').innerHTML = "You can't do that move :)";
	}
}

};	
