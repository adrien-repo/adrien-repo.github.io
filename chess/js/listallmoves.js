function listlegalmoves()
{
	//init
	legalmoveslist = [];
	//append all possibilities
	
	for(var mylegli=0; mylegli<8; mylegli++) 
	{
	for(var mylegco=0; mylegco<8; mylegco++) 
	{
		mylegstartcell = matrix[mylegco][mylegli]
			//white pawn
			if (mylegstartcell == value_pawn)
			{
				//can go 1 cell forward if empty
				if (matrix[mylegco-1][mylegli] == 0)
				{
				legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-1,mylegli]])
					//can go 2 cells fwd if both are empty and is first pawn move
					if ((matrix[mylegco-2][mylegli] == 0) && (mylegco == 6))
					{
					legalmoveslist = legalmoveslist.concat([[mylegco,mylegli,mylegco-2,mylegli]])
					}
				}
			}
	
	
	}
	}
}