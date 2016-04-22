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
	aifirstlist = listlegalmoves(matrix);
	//loop and assess baord value after moving
		startychoosen = -9999
		startxchoosen = -9999
		stopychoosen = -9999
		stopxchoosen = -9999
		bestboardfound = 9999

	for (lilegalai = 0; lilegalai < aifirstlist.length; lilegalai++) 
	{ 
		//simulate move
		aifirstlist[lilegalai]
		startyai = aifirstlist[lilegalai][0]
		startxai = aifirstlist[lilegalai][1]
		stopyai = aifirstlist[lilegalai][2]
		stopxai = aifirstlist[lilegalai][3]
		//copy the existing board
			for(var myzeroli=0; myzeroli<8; myzeroli++) 
			{
			for(var myzeroco=0; myzeroco<8; myzeroco++) 
			{
				matrixai[myzeroco][myzeroli] = matrix[myzeroco][myzeroli]
			}
			}
		//simulate the move
		matrixai[stopyai][stopxai] = matrixai[startyai][startxai]
		matrixai[startyai][startxai] = 0
		
		//now test opponent reaction
		///////////////////////////////////////////////////////////////////
		whoisthinking = 1
		playerreactionlist = listlegalmoves(matrixai);
		startyhumananswer = -9999
		startxhumananswer = -9999
		stopyhumananswer = -9999
		stopxhumananswer = -9999
		strongesthumananswer = -9999
		
		var matrixaihuman = new Array(8);
		for(var i=0; i<8; i++) 
		{
		matrixaihuman[i] = new Array(8);
		}
		//zero the entire board
		for(var myzeroli=0; myzeroli<8; myzeroli++) 
		{
		for(var myzeroco=0; myzeroco<8; myzeroco++) 
		{
			matrixaihuman[myzeroco][myzeroli] = 0
		}
		}
	

		for (lilegalaihuman = 0; lilegalaihuman < playerreactionlist.length; lilegalaihuman++) 
			{
				//simulate move
					playerreactionlist[lilegalaihuman]
					startyaihuman = playerreactionlist[lilegalaihuman][0]
					startxaihuman = playerreactionlist[lilegalaihuman][1]
					stopyaihuman = playerreactionlist[lilegalaihuman][2]
					stopxaihuman = playerreactionlist[lilegalaihuman][3]
					//copy the existing board
						for(var myzeroli=0; myzeroli<8; myzeroli++) 
						{
						for(var myzeroco=0; myzeroco<8; myzeroco++) 
						{
							matrixaihuman[myzeroco][myzeroli] = matrixai[myzeroco][myzeroli]
						}
						}
					//simulate the move
					matrixaihuman[stopyaihuman][stopxaihuman] = matrixaihuman[startyaihuman][startxaihuman]
					matrixaihuman[startyaihuman][startxaihuman] = 0
					//assess board value after AI and human played -- AI wants to have boardvalue as low as possible
					aftermoveboardvalue = (matrixaihuman.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
					if (aftermoveboardvalue > strongesthumananswer)
						{
							startychoosencandidate = startyai
							startxchoosencandidate = startxai
							stopychoosencandidate = stopyai
							stopxchoosencandidate = stopxai
							strongesthumananswer = aftermoveboardvalue
						}
			}
			
			if (strongesthumananswer<bestboardfound)
			{
				startychoosen = startychoosencandidate
				startxchoosen = startxchoosencandidate
				stopychoosen = stopychoosencandidate
				stopxchoosen = stopxchoosencandidate
				bestboardfound = strongesthumananswer
			}
			///////////////////////////////////////////////////////////////////
		//go back to AI thinking status
		whoisthinking = -1
		
	}

	


	


};
