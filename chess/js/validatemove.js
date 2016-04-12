function validatemove()
{
	listlegalmoves();
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
		drawboard();
		drawmaterial();
		//update chart for stats
		var currentrank = (matrix.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
		mydata.push([myturn,currentrank])
		myturn=myturn+1;
		drawChart();
		document.getElementById('infotext').innerHTML = "Your turn !";
	} else {
		document.getElementById('infotext').innerHTML = "You can't do that move :)";
	}
};	
