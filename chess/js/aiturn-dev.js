function aiturn()
{
	//creat blank matrix
	var matrixai = new Array(8);
	for(var i=0; i<8; i++) {matrixai[i] = new Array(8);}
	for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrixai[myzeroco][myzeroli] = 0}}
	
	
	
	//get legal moves for AI
	aifirstlist = listlegalmoves(matrix);
	aifirstlist = removechessfromlist(aifirstlist,matrix);
	
	//loop and assess baord value after moving
		startychoosen = -9999
		startxchoosen = -9999
		stopychoosen = -9999
		stopxchoosen = -9999
		bestboardfound = 9999
		strongesthumananswerever = 9999 //(tb minimized)
		bestboardsecondai = 9999

		
		
	for (lilegalai = 0; lilegalai < aifirstlist.length; lilegalai++) 
	{ 
		//simulate move
		//aifirstlist[lilegalai]
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
		bestaifirst = (matrixai.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
//		if ((bestaifirst < bestboardfound))
//		{
//			startychoosen = startyai
//			startxchoosen = startxai
//			stopychoosen = stopyai
//			stopxchoosen = stopxai
//			bestboardfound = bestaifirst
			
			
			//now test opponent reaction
			///////////////////////////////////////////////////////////////////
			whoisthinking = 1
			playerreactionlist = listlegalmoves(matrixai);
			playerreactionlist = removechessfromlist(playerreactionlist,matrixai);
			startyhumananswer = -9999
			startxhumananswer = -9999
			stopyhumananswer = -9999
			stopxhumananswer = -9999
			strongesthumananswer = -9999
			
			var matrixaihuman = new Array(8);
			for(var i=0; i<8; i++) {matrixaihuman[i] = new Array(8);}
			for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrixaihuman[myzeroco][myzeroli] = 0	}}


			for (lilegalaihuman = 0; lilegalaihuman < playerreactionlist.length; lilegalaihuman++) 
				{
					//simulate move
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
						//simulate the move: opponent always answers by the best move
						matrixaihuman[stopyaihuman][stopxaihuman] = matrixaihuman[startyaihuman][startxaihuman]
						matrixaihuman[startyaihuman][startxaihuman] = 0
						humananswervalue = (matrixaihuman.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
						if (humananswervalue >= strongesthumananswer)
							{
								strongesthumananswer = humananswervalue
								if (strongesthumananswer < strongesthumananswerever)
									{
										strongesthumananswerever = strongesthumananswer
									}
								
								///////////////////////////////////////////////////////////////////
								//now test AI 2nd move
								whoisthinking = -1
								aisecondlist = listlegalmoves(matrixaihuman);
								aisecondlist = removechessfromlist(aisecondlist,matrixaihuman);
								startysecondai = -9999
								startxsecondai = -9999
								stopysecondai = -9999
								stopxsecondai = -9999

								var matrixsecondai = new Array(8);
								for(var i=0; i<8; i++) {matrixsecondai[i] = new Array(8);}
								for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrixsecondai[myzeroco][myzeroli] = 0}}
								for (lilegalaisecond = 0; lilegalaisecond < aisecondlist.length; lilegalaisecond++) 
								{
									//simulate move
									startysecondai = aisecondlist[lilegalaisecond][0]
									startxsecondai = aisecondlist[lilegalaisecond][1]
									stopysecondai = aisecondlist[lilegalaisecond][2]
									stopxsecondai = aisecondlist[lilegalaisecond][3]
									//copy the existing board
									for(var myzeroli=0; myzeroli<8; myzeroli++) 
									{
									for(var myzeroco=0; myzeroco<8; myzeroco++) 
									{
										matrixsecondai[myzeroco][myzeroli] = matrixaihuman[myzeroco][myzeroli]
									}
									}
									//simulate the move
									matrixsecondai[stopysecondai][stopxsecondai] = matrixsecondai[startysecondai][startxsecondai]
									matrixsecondai[startysecondai][startxsecondai] = 0
									//assess board value after AI and human played, then AI answered -- AI wants to have boardvalue as low as possible
									bestaisecond = (matrixsecondai.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
										
										
										//we have 3 rules for AI
										//1 - by default, play the best next move, reset next move treshold
										
												if ((bestaifirst < bestboardfound))
												{
													startychoosen = startyai
													startxchoosen = startxai
													stopychoosen = stopyai
													stopxchoosen = stopxai
													bestboardfound = bestaifirst
												}
										//2 - when two moves are competing, play the one that minimize opponent next move impact
												if ((bestaifirst == bestboardfound) && (strongesthumananswerever == strongesthumananswer))
												{
													startychoosen = startyai
													startxchoosen = startxai
													stopychoosen = stopyai
													stopxchoosen = stopxai
												}
										//3 - a non weakest opponent next move is tolerated if in two moves, you are better off than after the first
												if ((bestaisecond < bestaifirst) && (bestaisecond < bestboardsecondai))
												{
													startychoosen = startyai
													startxchoosen = startxai
													stopychoosen = stopyai
													stopxchoosen = stopxai
													bestboardsecondai = bestaisecond
												}
												
										
								
								}
								///////////////////////////////////////////////////////////////////
							}		

				}
				
//		}
	}
			///////////////////////////////////////////////////////////////////
		//go back to AI thinking status
		whoisthinking = -1
		
	

	


	


};