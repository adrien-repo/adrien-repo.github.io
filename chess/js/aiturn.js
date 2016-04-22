function aiturn()
{
	//load current baord in tmp variable for tests
	var matrixai = new Array(8);
	for(var i=0; i<8; i++) 
	{
	matrixai[i] = new Array(8);
	}
	//zero the entire board
	for(var myzeroli=0; myzeroli<8; myzeroli++) 
	{
	for(var myzeroco=0; myzeroco<8; myzeroco++) 
	{
		matrixai[myzeroco][myzeroli] = 0
	}
	}
	
	
	
	//get legal moves for AI
	listlegalmoves();
	//loop and assess baord value after moving
		startychoosen = -9999
		startxchoosen = -9999
		stopychoosen = -9999
		stopxchoosen = -9999
		bestboardfound = 9999

	for (lilegalai = 0; lilegalai < legalmoveslist.length; lilegalai++) 
	{ 
		//simulate move
		legalmoveslist[lilegalai]
		startyai = legalmoveslist[lilegalai][0]
		startxai = legalmoveslist[lilegalai][1]
		stopyai = legalmoveslist[lilegalai][2]
		stopxai = legalmoveslist[lilegalai][3]
		//copy the existing board
			for(var myzeroli=0; myzeroli<8; myzeroli++) 
			{
			for(var myzeroco=0; myzeroco<8; myzeroco++) 
			{
				matrixai[myzeroco][myzeroli] = matrix[myzeroco][myzeroli]
			}
			}
		matrixai[stopyai][stopxai] = matrixai[startyai][startxai]
		matrixai[startyai][startxai] = 0
		//assess board value -- you want to have boardvalue as low as possible
		aftermoveboardvalue = (matrixai.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
		if (aftermoveboardvalue < bestboardfound)
			{
				startychoosen = startyai
				startxchoosen = startxai
				stopychoosen = stopyai
				stopxchoosen = stopxai
			}
	}

	


	


};