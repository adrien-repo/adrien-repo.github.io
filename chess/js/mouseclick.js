 document.addEventListener("DOMContentLoaded", init, false);
      function init()
      {
        var canvas = document.getElementById("myBoard");
        canvas.addEventListener("mousedown", getPosition, false);
      }
      function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("myBoard");
        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        if (startstop == 1)
        	{
        	startx = Math.floor((x-xboard)/cellsize)
        	starty = Math.floor((y-yboard)/cellsize)
        	stopx = -1
        	stopy = -1
        	}
        if (startstop == -1)
        	{
        	stopx = Math.floor((x-xboard)/cellsize)
        	stopy = Math.floor((y-yboard)/cellsize)
        	}   
        if (whoisthinking == 1)
			{
			startstop = startstop * (-1)
			drawboard();
			drawmaterial();
			}
      }
