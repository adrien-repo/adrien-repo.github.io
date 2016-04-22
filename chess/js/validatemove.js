function validatemove()
{
	
if (whoisthinking == 1)
{
	legalmoveslistbis = listlegalmoves(matrix);
	legalmoveslist = removechessfromlist(legalmoveslistbis,matrix);
	
	
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
		document.getElementById('txtbox').innerHTML = "Thinking..";
		//AI turn now !
		whoisthinking = -1;

		
		try {
		aiturn();
		}
		catch(err) {alert(err.message)
			}
			
		if (list_first.length < 1)
		{
		document.getElementById('txtbox').innerHTML = "Wow congrats ! White won ! 1-0";
		drawboard();
		drawmaterial();
		return
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
		document.getElementById('txtbox').innerHTML = "Your turn !";
		
		//Human turn now !
		whoisthinking = 1;
		
		
	} else {
		document.getElementById('txtbox').innerHTML = "You can't do that move :)";
		if (legalmoveslist.length < 1)
		{
		document.getElementById('txtbox').innerHTML = "Hmm.. no possible move no ? :) Black won ! 0-1";
		}
	}
}

};	
