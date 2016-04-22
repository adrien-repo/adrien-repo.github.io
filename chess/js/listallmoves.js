function listlegalmoves(matrixlegal)
{

	//init
	legalmoveslisted = [];
	var cangoahead = 1;
	//append all possibilities
	
	for (var mylegli=0; mylegli<8; mylegli++) 
	{
	for (var mylegco=0; mylegco<8; mylegco++) 
	{
		mylegstartcell = matrixlegal[mylegco][mylegli]
			
			
			//white pawn
			if (mylegstartcell == value_pawn*whoisthinking)
			{
				//can go 1 cell forward if empty
				if (matrixlegal[mylegco-1*whoisthinking][mylegli] == 0)
				{
				legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-1*whoisthinking,mylegli]])
					//and can go 2 cells fwd if both are empty and is first pawn move
					if ((matrixlegal[mylegco-2*whoisthinking][mylegli] == 0) && (mylegco == (2.5+3.5*whoisthinking))) // return row 6 for white, row 1 for black
					{
					legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-2*whoisthinking,mylegli]])
					}
				}
				//can eat black material (<0) in diagonal 1 cell forward, to the left
				if (matrixlegal[mylegco-1*whoisthinking][mylegli-1]*whoisthinking < 0)
				{
					legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-1*whoisthinking,mylegli-1]])
				}
				//can eat black material (<0) in diagonal 1 cell forward, to the right
				if (matrixlegal[mylegco-1*whoisthinking][mylegli+1]*whoisthinking < 0)
				{
					legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-1*whoisthinking,mylegli+1]])
				}
			}
			
			
			
			//white bishop can move in diagonal as long as cells are free, can eat the next immediate black material
			//so does the queen ;)
			if ((mylegstartcell == value_bishop*whoisthinking) || (mylegstartcell == value_queen*whoisthinking)) 
			{	
				//up left (- -)
				cangoahead = 1

				for (var mylegbishop=1; mylegbishop<=(Math.min(mylegco,mylegli)); mylegbishop++) 
				{
					if ((matrixlegal[mylegco-mylegbishop][mylegli-mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli-mylegbishop]])
					}
					if ((matrixlegal[mylegco-mylegbishop][mylegli-mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli-mylegbishop]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco-mylegbishop][mylegli-mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//up right (- +)
				cangoahead = 1
				for (var mylegbishop=1; mylegbishop<=(Math.min(mylegco,7-mylegli)); mylegbishop++) 
				{
					if ((matrixlegal[mylegco-mylegbishop][mylegli+mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli+mylegbishop]])
					}
					if ((matrixlegal[mylegco-mylegbishop][mylegli+mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli+mylegbishop]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco-mylegbishop][mylegli+mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				
				//down left (+ -)
				cangoahead = 1

				for (var mylegbishop=1; mylegbishop<=(Math.min(7-mylegco,mylegli)); mylegbishop++) 
				{
					if ((matrixlegal[mylegco+mylegbishop][mylegli-mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli-mylegbishop]])
					}
					if ((matrixlegal[mylegco+mylegbishop][mylegli-mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli-mylegbishop]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco+mylegbishop][mylegli-mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//down right (+ +)
				cangoahead = 1
				for (var mylegbishop=1; mylegbishop<=(Math.min(7-mylegco,7-mylegli)); mylegbishop++) 
				{
					if ((matrixlegal[mylegco+mylegbishop][mylegli+mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli+mylegbishop]])
					}
					if ((matrixlegal[mylegco+mylegbishop][mylegli+mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli+mylegbishop]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco+mylegbishop][mylegli+mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}

			}

			//white rook can move in line as long as cells are free, can eat the next immediate black material
			//so does the queen ;)
			if ((mylegstartcell == value_rook*whoisthinking) || (mylegstartcell == value_queen*whoisthinking)) 
			{	
				//up  (- 0)
				cangoahead = 1

				for (var mylegrook=1; mylegrook<=mylegco; mylegrook++) 
				{
					if ((matrixlegal[mylegco-mylegrook][mylegli] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli]])
					}
					if ((matrixlegal[mylegco-mylegrook][mylegli]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco-mylegrook][mylegli]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//right (0 +)
				cangoahead = 1
				for (var mylegrook=1; mylegrook<=(7-mylegli); mylegrook++) 
				{
					if ((matrixlegal[mylegco][mylegli+mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco,mylegli+mylegrook]])
					}
					if ((matrixlegal[mylegco][mylegli+mylegrook]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco,mylegli+mylegrook]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco][mylegli+mylegrook]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				
				//down (+ 0)
				cangoahead = 1

				for (var mylegrook=1; mylegrook<=(7-mylegco); mylegrook++) 
				{
					if ((matrixlegal[mylegco+mylegrook][mylegli] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli]])
					}
					if ((matrixlegal[mylegco+mylegrook][mylegli]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco+mylegrook][mylegli]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//left (0 -)
				cangoahead = 1
				for (var mylegrook=1; mylegrook<=(mylegli); mylegrook++) 
				{
					if ((matrixlegal[mylegco][mylegli-mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco,mylegli-mylegrook]])
					}
					if ((matrixlegal[mylegco][mylegli-mylegrook]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco,mylegli-mylegrook]])
						cangoahead = 0
					}
					if ((matrixlegal[mylegco][mylegli-mylegrook]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}

			}
			
			//white king can move 1 cell around as long as cells are free, can eat the next immediate black material
			
			if (mylegstartcell == value_king*whoisthinking) 
			{	
				//around
				for (var mylegkingx=-1; mylegkingx<=1; mylegkingx++) 
				{
				for (var mylegkingy=-1; mylegkingy<=1; mylegkingy++) 
				{
					if (((Math.abs(mylegkingx)+Math.abs(mylegkingy))>0) && (((mylegco+mylegkingx)>=0) && ((mylegco+mylegkingx)<=7) && ((mylegli+mylegkingy)>=0) && ((mylegli+mylegkingy)<=7))) 
					{
						if (matrixlegal[mylegco+mylegkingx][mylegli+mylegkingy]*whoisthinking <= 0)
						{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegkingx,mylegli+mylegkingy]])
						}
					}
				}	
				}
			}
			
			//white knight do all 3-cells-long moves in a +2/-2 square around it, as long as destination cells are free, can eat the black material
			
			if (mylegstartcell == value_knight*whoisthinking) 
			{	
				//around
				for (var mylegknightx=-2; mylegknightx<=2; mylegknightx++) 
				{
				for (var mylegknighty=-2; mylegknighty<=2; mylegknighty++) 
				{
					if (((Math.abs(mylegknightx)+Math.abs(mylegknighty))==3) && (((mylegco+mylegknightx)>=0) && ((mylegco+mylegknightx)<=7) && ((mylegli+mylegknighty)>=0) && ((mylegli+mylegknighty)<=7))) 
					{
						if (matrixlegal[mylegco+mylegknightx][mylegli+mylegknighty]*whoisthinking <= 0)
						{
						legalmoveslisted = legalmoveslisted.concat([[mylegco,mylegli,mylegco+mylegknightx,mylegli+mylegknighty]])
						}
					}
				}	
				}
			}

	
	}
	}
	
	return legalmoveslisted;
}


function removechessfromlist(mylist,mymatrix)
{
	//blank
	legalmovefiltered = []
	
	//creat blank matrix
	var matrixtest = new Array(8);
	for(var i=0; i<8; i++) 
	{
	matrixtest[i] = new Array(8);
	}
	//zero the entire board
	for(var myzeroli=0; myzeroli<8; myzeroli++) 
	{
	for(var myzeroco=0; myzeroco<8; myzeroco++) 
	{
		matrixtest[myzeroco][myzeroli] = 0
	}
	}
	
	
	//loop into the moves of the pre-filtered list
	
	for (litest = 0; litest < mylist.length; litest++) 
	{ 
		
		var rejected = 0
		
		startytest = mylist[litest][0]
		startxtest = mylist[litest][1]
		stopytest = mylist[litest][2]
		stopxtest = mylist[litest][3]
	
		//copy the existing board for test
			for(var myzeroli=0; myzeroli<8; myzeroli++) 
			{
			for(var myzeroco=0; myzeroco<8; myzeroco++) 
			{
				matrixtest[myzeroco][myzeroli] = mymatrix[myzeroco][myzeroli]
			}
			}
		//simulate the move
		matrixtest[stopytest][stopxtest] = matrixtest[startytest][startxtest]
		matrixtest[startytest][startxtest] = 0
		
		
		//choose the other player point of view
		whoisthinking = whoisthinking*-1
		//list its moves
		consequencelist = listlegalmoves(matrixtest);
		
		//take your seat back
		whoisthinking = whoisthinking*-1
		//test if a move implies eating the king
		
		for (liconsequence = 0; liconsequence < consequencelist.length; liconsequence++) 
		{
			
			if (matrixtest[consequencelist[liconsequence][2]][consequencelist[liconsequence][3]] == whoisthinking*value_king)
				{
				
				rejected = 1
				}
			
			
		}
		
		if (rejected == 0)
		{
			legalmovefiltered = legalmovefiltered.concat([[startytest,startxtest,stopytest,stopxtest]])
		}
	}
	return legalmovefiltered;
}
