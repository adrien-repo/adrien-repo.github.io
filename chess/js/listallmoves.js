function listlegalmoves()
{

	//init
	legalmoveslist = [];
	var cangoahead = 1;
	//append all possibilities
	
	for (var mylegli=0; mylegli<8; mylegli++) 
	{
	for (var mylegco=0; mylegco<8; mylegco++) 
	{
		mylegstartcell = matrix[mylegco][mylegli]
			
			
			//white pawn
			if (mylegstartcell == value_pawn*whoisthinking)
			{
				//can go 1 cell forward if empty
				if (matrix[mylegco-1*whoisthinking][mylegli] == 0)
				{
				legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1*whoisthinking,mylegli]])
					//and can go 2 cells fwd if both are empty and is first pawn move
					if ((matrix[mylegco-2*whoisthinking][mylegli] == 0) && (mylegco == (2.5+3.5*whoisthinking))) // return row 6 for white, row 1 for black
					{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-2*whoisthinking,mylegli]])
					}
				}
				//can eat black material (<0) in diagonal 1 cell forward, to the left
				if (matrix[mylegco-1*whoisthinking][mylegli-1]*whoisthinking < 0)
				{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1*whoisthinking,mylegli-1]])
				}
				//can eat black material (<0) in diagonal 1 cell forward, to the right
				if (matrix[mylegco-1*whoisthinking][mylegli+1]*whoisthinking < 0)
				{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1*whoisthinking,mylegli+1]])
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
					if ((matrix[mylegco-mylegbishop][mylegli-mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli-mylegbishop]])
					}
					if ((matrix[mylegco-mylegbishop][mylegli-mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli-mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegbishop][mylegli-mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//up right (- +)
				cangoahead = 1
				for (var mylegbishop=1; mylegbishop<=(Math.min(mylegco,7-mylegli)); mylegbishop++) 
				{
					if ((matrix[mylegco-mylegbishop][mylegli+mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli+mylegbishop]])
					}
					if ((matrix[mylegco-mylegbishop][mylegli+mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli+mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegbishop][mylegli+mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				
				//down left (+ -)
				cangoahead = 1

				for (var mylegbishop=1; mylegbishop<=(Math.min(7-mylegco,mylegli)); mylegbishop++) 
				{
					if ((matrix[mylegco+mylegbishop][mylegli-mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli-mylegbishop]])
					}
					if ((matrix[mylegco+mylegbishop][mylegli-mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli-mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegbishop][mylegli-mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//down right (+ +)
				cangoahead = 1
				for (var mylegbishop=1; mylegbishop<=(Math.min(7-mylegco,7-mylegli)); mylegbishop++) 
				{
					if ((matrix[mylegco+mylegbishop][mylegli+mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli+mylegbishop]])
					}
					if ((matrix[mylegco+mylegbishop][mylegli+mylegbishop]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli+mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegbishop][mylegli+mylegbishop]*whoisthinking > 0) && (cangoahead == 1))
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
					if ((matrix[mylegco-mylegrook][mylegli] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli]])
					}
					if ((matrix[mylegco-mylegrook][mylegli]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegrook][mylegli]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//right (0 +)
				cangoahead = 1
				for (var mylegrook=1; mylegrook<=(7-mylegli); mylegrook++) 
				{
					if ((matrix[mylegco][mylegli+mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco,mylegli+mylegrook]])
					}
					if ((matrix[mylegco][mylegli+mylegrook]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco,mylegli+mylegrook]])
						cangoahead = 0
					}
					if ((matrix[mylegco][mylegli+mylegrook]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				
				//down (+ 0)
				cangoahead = 1

				for (var mylegrook=1; mylegrook<=(7-mylegco); mylegrook++) 
				{
					if ((matrix[mylegco+mylegrook][mylegli] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli]])
					}
					if ((matrix[mylegco+mylegrook][mylegli]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegrook][mylegli]*whoisthinking > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//left (0 -)
				cangoahead = 1
				for (var mylegrook=1; mylegrook<=(mylegli); mylegrook++) 
				{
					if ((matrix[mylegco][mylegli-mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco,mylegli-mylegrook]])
					}
					if ((matrix[mylegco][mylegli-mylegrook]*whoisthinking < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco,mylegli-mylegrook]])
						cangoahead = 0
					}
					if ((matrix[mylegco][mylegli-mylegrook]*whoisthinking > 0) && (cangoahead == 1))
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
						if (matrix[mylegco+mylegkingx][mylegli+mylegkingy]*whoisthinking <= 0)
						{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegkingx,mylegli+mylegkingy]])
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
						if (matrix[mylegco+mylegknightx][mylegli+mylegknighty]*whoisthinking <= 0)
						{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegknightx,mylegli+mylegknighty]])
						}
					}
				}	
				}
			}

	
	}
	}
}
