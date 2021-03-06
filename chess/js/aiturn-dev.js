function aiturn()
{
    //boxable loops for game discovery and rating
    
    //process description
    //0 - for a given player color and matrix
    //1 - list all legal moves + clear chess-resulting prohibited moves (external functions)
    //2 - loop all admitted moves, get board rank <reloop here if needed>
    //3 - rules for move choice 
    //4 return best move coordinate for AI
    
    //init best move coordinates
    startychoosen = -9999
    startxchoosen = -9999
    stopychoosen = -9999
    stopxchoosen = -9999
    nbtests = 0

    
    //init utility_treshold
    utility_treshold = 9999
    utility_treshold_move = 9999
    utility_human = -9999
    utility_human_bis = -9999
    
    //assess current board 
    evaluate_zero = (matrix.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
    //FIRST AI MOVE
    //1.0 - for a given player color and matrix
    whoisthinking = -1 
    //we use matrix as start point
    //1.1 - list all legal moves + clear chess-resulting prohibited moves (external fucntions)
    list_first = listlegalmoves(matrix);
    list_first = removechessfromlist(list_first,matrix);
    //1.2 - loop all admitted moves, get board rank <reloop here if needed>
    //creat blank matrix
    var matrix_first = new Array(8);
    for(var i=0; i<8; i++) {matrix_first[i] = new Array(8);}
    for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrix_first[myzeroco][myzeroli] = 0}}
    //loop admitted moves
    for (li_first = 0; li_first < list_first.length; li_first++) 
        { 
        //get 4 coordinates of move candidate
        starty_first = list_first[li_first][0]
        startx_first = list_first[li_first][1]
        stopy_first = list_first[li_first][2]
        stopx_first = list_first[li_first][3]
        //set blank matrix to current board state
            for(var myzeroli=0; myzeroli<8; myzeroli++)
                {for(var myzeroco=0; myzeroco<8; myzeroco++) 
                    {matrix_first[myzeroco][myzeroli] = matrix[myzeroco][myzeroli]}}
        //simulate admitted move in mirrored matrix
        matrix_first[stopy_first][stopx_first] = matrix_first[starty_first][startx_first]
        matrix_first[starty_first][startx_first] = 0
                //pawn promotion for black
		if ((matrix[stopy_first][stopx_first] == -1*value_pawn) && (stopy_first == 7))
		{
		matrix[stopy_first][stopx_first] = -1*value_queen
		}
        //evaluate board after move
        evaluate_first = (matrix_first.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
        
    //reset treshold for best second move per first move
    utility_human = -9999

    //SECOND HUMAN MOVE - we assume it plays the best answer to first move
    //2.0 - for a given player color and matrix
    whoisthinking = 1
    //we use matrix_first as start point
    //2.1 - list all legal moves + clear chess-resulting prohibited moves (external fucntions)
    list_second = listlegalmoves(matrix_first);
    list_second = removechessfromlist(list_second,matrix_first);
    //2.2 - loop all admitted moves, get board rank <reloop here if needed>
    //creat blank matrix
    var matrix_second = new Array(8);
    for(var i=0; i<8; i++) {matrix_second[i] = new Array(8);}
    for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrix_second[myzeroco][myzeroli] = 0}}
    //create blank matrix for best answer
    var matrix_second_best = new Array(8);
    for(var i=0; i<8; i++) {matrix_second_best[i] = new Array(8);}
    for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrix_second_best[myzeroco][myzeroli] = 0}}
    //loop admitted moves
    for (li_second = 0; li_second < list_second.length; li_second++) 
        { 
        //get 4 coordinates of move candidate
        starty_second = list_second[li_second][0]
        startx_second = list_second[li_second][1]
        stopy_second = list_second[li_second][2]
        stopx_second = list_second[li_second][3]
        //set blank matrix to current board state
            for(var myzeroli=0; myzeroli<8; myzeroli++)
                {for(var myzeroco=0; myzeroco<8; myzeroco++) 
                    {matrix_second[myzeroco][myzeroli] = matrix_first[myzeroco][myzeroli]}}
        //simulate admitted move in mirrored matrix
        matrix_second[stopy_second][stopx_second] = matrix_second[starty_second][startx_second]
        matrix_second[starty_second][startx_second] = 0
        	//pawn promotion for white
		if ((matrix[stopy_second][stopx_second] == value_pawn) && (stopy_second == 0))
		{
		matrix[stopy_second][stopx_second] = value_queen
		}
        //evaluate board after move
        evaluate_second = (matrix_second.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)

    //here is the selection of best answer-only from human
    if (evaluate_second >= utility_human)
    {
    utility_human = evaluate_second
    
    //added here to filter best overall move only	
    } // end if
    } // end for
    for (li_second = 0; li_second < list_second.length; li_second++) 
        { 
        //get 4 coordinates of move candidate
        starty_second = list_second[li_second][0]
        startx_second = list_second[li_second][1]
        stopy_second = list_second[li_second][2]
        stopx_second = list_second[li_second][3]
        //set blank matrix to current board state
            for(var myzeroli=0; myzeroli<8; myzeroli++)
                {for(var myzeroco=0; myzeroco<8; myzeroco++) 
                    {matrix_second[myzeroco][myzeroli] = matrix_first[myzeroco][myzeroli]}}
        //simulate admitted move in mirrored matrix
        matrix_second[stopy_second][stopx_second] = matrix_second[starty_second][startx_second]
        matrix_second[starty_second][startx_second] = 0
        //evaluate board after move
        evaluate_second = (matrix_second.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)

    //here is the selection of best answer-only from human
    if (evaluate_second == utility_human)
    {
    	
    
    // end addition
    
    //THIRD AI MOVE
    //3.0 - for a given player color and matrix
    whoisthinking = -1
    //we use matrix_second as start point
    //3.1 - list all legal moves + clear chess-resulting prohibited moves (external fucntions)
    list_third = listlegalmoves(matrix_second);
    list_third = removechessfromlist(list_third,matrix_second);
    //2.2 - loop all admitted moves, get board rank <reloop here if needed>
    //creat blank matrix
    var matrix_third = new Array(8);
    for(var i=0; i<8; i++) {matrix_third[i] = new Array(8);}
    for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrix_third[myzeroco][myzeroli] = 0}}
    //loop admitted moves
    for (li_third = 0; li_third < list_third.length; li_third++) 
        { 
        //get 4 coordinates of move candidate
        starty_third = list_third[li_third][0]
        startx_third = list_third[li_third][1]
        stopy_third = list_third[li_third][2]
        stopx_third = list_third[li_third][3]
        //set blank matrix to current board state
            for(var myzeroli=0; myzeroli<8; myzeroli++)
                {for(var myzeroco=0; myzeroco<8; myzeroco++) 
                    {matrix_third[myzeroco][myzeroli] = matrix_second[myzeroco][myzeroli]}}
        //simulate admitted move in mirrored matrix
        matrix_third[stopy_third][stopx_third] = matrix_third[starty_third][startx_third]
        matrix_third[starty_third][startx_third] = 0
                //pawn promotion for black
		if ((matrix[stopy_third][stopx_third] == -1*value_pawn) && (stopy_third == 7))
		{
		matrix[stopy_third][stopx_third] = -1*value_queen
		}
        //evaluate board after move
        evaluate_third = (matrix_third.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)
    
    //reset treshold for best fourth move per third move
    utility_human_bis = -9999

    
    //FOURTH HUMAN MOVE - we assume it plays the best answer to first move
    //4.0 - for a given player color and matrix
    whoisthinking = 1
    //we use matrix_first as start point
    //4.1 - list all legal moves + clear chess-resulting prohibited moves (external fucntions)
    list_fourth = listlegalmoves(matrix_third);
    list_fourth = removechessfromlist(list_fourth,matrix_third);
    //4.2 - loop all admitted moves, get board rank <reloop here if needed>
    //creat blank matrix
    var matrix_fourth = new Array(8);
    for(var i=0; i<8; i++) {matrix_fourth[i] = new Array(8);}
    for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrix_fourth[myzeroco][myzeroli] = 0}}
    //create blank matrix for best answer
    var matrix_fourth_best = new Array(8);
    for(var i=0; i<8; i++) {matrix_fourth_best[i] = new Array(8);}
    for(var myzeroli=0; myzeroli<8; myzeroli++) {for(var myzeroco=0; myzeroco<8; myzeroco++) {matrix_fourth_best[myzeroco][myzeroli] = 0}}
    //loop admitted moves
    for (li_fourth = 0; li_fourth < list_fourth.length; li_fourth++) 
        { 
        nbtests = nbtests+1
            

        //get 4 coordinates of move candidate
        starty_fourth = list_fourth[li_fourth][0]
        startx_fourth = list_fourth[li_fourth][1]
        stopy_fourth = list_fourth[li_fourth][2]
        stopx_fourth = list_fourth[li_fourth][3]
        //set blank matrix to current board state
            for(var myzeroli=0; myzeroli<8; myzeroli++)
                {for(var myzeroco=0; myzeroco<8; myzeroco++) 
                    {matrix_second[myzeroco][myzeroli] = matrix_third[myzeroco][myzeroli]}}
        //simulate admitted move in mirrored matrix
        matrix_fourth[stopy_fourth][stopx_fourth] = matrix_fourth[starty_fourth][startx_fourth]
        matrix_fourth[starty_fourth][startx_fourth] = 0
                //pawn promotion for white
		if ((matrix[stopy_fourth][stopx_fourth] == value_pawn) && (stopy_fourth == 0))
		{
		matrix[stopy_fourth][stopx_fourth] = value_queen
		}
        //evaluate board after move
        evaluate_fourth = (matrix_fourth.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)

    //here is the selection of best answer-only from human
    if (evaluate_fourth >= utility_human_bis)
    {
    utility_human_bis = evaluate_fourth
    
    //added here to filter out best move only
    } //end if
    } // end for
    
        for (li_fourth = 0; li_fourth < list_fourth.length; li_fourth++) 
        { 
        //get 4 coordinates of move candidate
        starty_fourth = list_fourth[li_fourth][0]
        startx_fourth = list_fourth[li_fourth][1]
        stopy_fourth = list_fourth[li_fourth][2]
        stopx_fourth = list_fourth[li_fourth][3]
        //set blank matrix to current board state
            for(var myzeroli=0; myzeroli<8; myzeroli++)
                {for(var myzeroco=0; myzeroco<8; myzeroco++) 
                    {matrix_second[myzeroco][myzeroli] = matrix_third[myzeroco][myzeroli]}}
        //simulate admitted move in mirrored matrix
        matrix_fourth[stopy_fourth][stopx_fourth] = matrix_fourth[starty_fourth][startx_fourth]
        matrix_fourth[starty_fourth][startx_fourth] = 0
        //evaluate board after move
        evaluate_fourth = (matrix_fourth.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)

    //here is the selection of best answer-only from human
    if (evaluate_fourth == utility_human_bis)
    {
    	
        utility_first = evaluate_first - evaluate_zero
        utility_second = evaluate_second - evaluate_first
        utility_third = evaluate_third - evaluate_second
        utility_fourth = evaluate_fourth - evaluate_third

    
        utility_function = (0.1*evaluate_first + 0.6*evaluate_second + 0.1*evaluate_third + 0.3*evaluate_fourth)/(1.2) //-utility_first + utility_second - utility_third + utility_fourth
        utility_function_move = (0.5*evaluate_first + 0.5*evaluate_third)/(1)
        //keep the move that minimizes the utility_function
        if (utility_function <= utility_treshold)
        {
	        if (utility_function_move < utility_treshold_move)
	        {
	        startychoosen = starty_first
	        startxchoosen = startx_first
	        stopychoosen = stopy_first
	        stopxchoosen = stopx_first
	        utility_treshold = utility_function
		utility_treshold_move = utility_function_move
	        }
        }
        
//end of best human bis (if)
    }
            
    //end of fourth loop (for)
    }
    whoisthinking = -1

    //end of third loop (for)
    }
    whoisthinking = 1

    //end of best human (if)
    }
            
    //end of second loop (for)
    }
    whoisthinking = -1
    //end of first loop (for)
    }
       

if (list_first.length < 1)
		{
		document.getElementById('txtbox').innerHTML = "Wow congrats ! White won ! 1-0";
		document.getElementById('loadingicon').style.visibility="hidden";               
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
		document.getElementById('txtbox').innerHTML = "Studied "+nbtests.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")+" games, (best: "+utility_treshold.toFixed(2)+"). Your turn !";
		document.getElementById('loadingicon').style.visibility="hidden";               

		//Human turn now !
		whoisthinking = 1;
//end of function
}        
