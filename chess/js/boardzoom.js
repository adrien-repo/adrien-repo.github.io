$( "#zoomin" ).click(function() {
cellsize = Math.max(cellsize+2, 60)
drawboard();
drawmaterial();
});

$( "#zoomout" ).click(function() {
cellsize = Math.max(cellsize-2, 16)
drawboard();
drawmaterial();
});
