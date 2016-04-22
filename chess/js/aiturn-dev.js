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
    
    //init utility_treshold
    utility_treshold = 9999
    utility_human = -9999
    
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
        //evaluate board after move
        evaluate_second = (matrix_second.reduce(function(a,b) { return a.concat(b) }).reduce(function(a,b) { return a + b })).toFixed(2)

    //here is the selection of best answer-only from human
    if (evaluate_second >= utility_human)
    {
    utility_human = evaluate_second
    
    
    
    
    
    
    
    
        utility_first = evaluate_first - evaluate_zero
        utility_second = evaluate_second - evaluate_first
    
        utility_function = utility_first - 0.5*utility_second
        //keep the move that minimizes the utility_function
        if (utility_function < utility_treshold)
        {
        startychoosen = starty_first
        startxchoosen = startx_first
        stopychoosen = stopy_first
        stopxchoosen = stopx_first
        utility_treshold = utility_function
        alert(startychoosen+" ** "+startxchoosen+" ** "+stopychoosen+" ** "+stopxchoosen)
        alert(utility_function)

        }

        

    //end of best human (if)
    }
            
    //end of second loop (for)
    }
    
    //end of first loop (for)
    }
       
       
//end of function
}        
