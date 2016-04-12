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
			if (mylegstartcell == value_pawn)
			{
				//can go 1 cell forward if empty
				if (matrix[mylegco-1][mylegli] == 0)
				{
				legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1,mylegli]])
					//and can go 2 cells fwd if both are empty and is first pawn move
					if ((matrix[mylegco-2][mylegli] == 0) && (mylegco == 6))
					{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-2,mylegli]])
					}
				}
				//can eat black material (<0) in diagonal 1 cell forward, to the left
				if (matrix[mylegco-1][mylegli-1] < 0)
				{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1,mylegli-1]])
				}
				//can eat black material (<0) in diagonal 1 cell forward, to the right
				if (matrix[mylegco-1][mylegli+1] < 0)
				{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1,mylegli+1]])
				}
			}
			
			
			
			//white bishop can move in diagonal as long as cells are free, can eat the next immediate black material
			//so does the queen ;)
			if ((mylegstartcell == value_bishop) || (mylegstartcell == value_queen)) 
			{	
				//up left (- -)
				cangoahead = 1

				for (var mylegbishop=1; mylegbishop<=(Math.min(mylegco,mylegli)); mylegbishop++) 
				{
					if ((matrix[mylegco-mylegbishop][mylegli-mylegbishop] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli-mylegbishop]])
					}
					if ((matrix[mylegco-mylegbishop][mylegli-mylegbishop] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli-mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegbishop][mylegli-mylegbishop] > 0) && (cangoahead == 1))
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
					if ((matrix[mylegco-mylegbishop][mylegli+mylegbishop] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegbishop,mylegli+mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegbishop][mylegli+mylegbishop] > 0) && (cangoahead == 1))
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
					if ((matrix[mylegco+mylegbishop][mylegli-mylegbishop] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli-mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegbishop][mylegli-mylegbishop] > 0) && (cangoahead == 1))
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
					if ((matrix[mylegco+mylegbishop][mylegli+mylegbishop] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegbishop,mylegli+mylegbishop]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegbishop][mylegli+mylegbishop] > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}

			}

			//white rook can move in line as long as cells are free, can eat the next immediate black material
			//so does the queen ;)
			if ((mylegstartcell == value_rook) || (mylegstartcell == value_queen)) 
			{	
				//up left (- -)
				cangoahead = 1

				for (var mylegrook=1; mylegrook<=(Math.min(mylegco,mylegli)); mylegrook++) 
				{
					if ((matrix[mylegco-mylegrook][mylegli-mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli-mylegrook]])
					}
					if ((matrix[mylegco-mylegrook][mylegli-mylegrook] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli-mylegrook]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegrook][mylegli-mylegrook] > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//up right (- +)
				cangoahead = 1
				for (var mylegrook=1; mylegrook<=(Math.min(mylegco,7-mylegli)); mylegrook++) 
				{
					if ((matrix[mylegco-mylegrook][mylegli+mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli+mylegrook]])
					}
					if ((matrix[mylegco-mylegrook][mylegli+mylegrook] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-mylegrook,mylegli+mylegrook]])
						cangoahead = 0
					}
					if ((matrix[mylegco-mylegrook][mylegli+mylegrook] > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				
				//down left (+ -)
				cangoahead = 1

				for (var mylegrook=1; mylegrook<=(Math.min(7-mylegco,mylegli)); mylegrook++) 
				{
					if ((matrix[mylegco+mylegrook][mylegli-mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli-mylegrook]])
					}
					if ((matrix[mylegco+mylegrook][mylegli-mylegrook] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli-mylegrook]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegrook][mylegli-mylegrook] > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}
				//down right (+ +)
				cangoahead = 1
				for (var mylegrook=1; mylegrook<=(Math.min(7-mylegco,7-mylegli)); mylegrook++) 
				{
					if ((matrix[mylegco+mylegrook][mylegli+mylegrook] == 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli+mylegrook]])
					}
					if ((matrix[mylegco+mylegrook][mylegli+mylegrook] < 0) && (cangoahead == 1))
					{
						legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco+mylegrook,mylegli+mylegrook]])
						cangoahead = 0
					}
					if ((matrix[mylegco+mylegrook][mylegli+mylegrook] > 0) && (cangoahead == 1))
					{
						cangoahead = 0
					}
				}

			}


	
	}
	}
}
