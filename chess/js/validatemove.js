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
		
		//pawn promotion for white
		if ((matrix[stopy][stopx] == value_pawn) && (stopy == 0))
			{
			matrix[stopy][stopx] = value_queen
			}
		
		drawboard();
		drawmaterial();
		
		//update chart for stats
		var currentrank = (matrix.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
		mydata.push([myturn,currentrank])
		myturn=myturn+1;
		drawChart();
		document.getElementById('txtbox').innerHTML = "Thinking..";
		document.getElementById('loadingicon').style.visibility="visible";               

		//AI turn now !
		whoisthinking = -1;

		window.setTimeout(function() {
		//try {
		aiturn();
		//}
		//catch(err) {alert(err.message)
		//	}
		}, 500);
			
		
		
		
	} else {
		document.getElementById('txtbox').innerHTML = "You can't do that move :)";
		if (legalmoveslist.length < 1)
		{
		document.getElementById('txtbox').innerHTML = "Hmm.. no possible move no ? :) Black won ! 0-1";
		}
	}
}

};	
