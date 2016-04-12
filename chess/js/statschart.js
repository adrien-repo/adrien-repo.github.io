$( "#showhidestats" ).click(function() {
$( "#chart_div" ).toggle();
$( "#board_div" ).toggle();
});

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);
var myturn = 1
var mydata = [['Turn', 'Rank'],[0, 0],];

function drawChart() 
{
var data = google.visualization.arrayToDataTable(mydata, false); // 'false' means that the first row contains labels, not data.
var options = {vAxis: {title: 'Board balance'}, pointSize: 5, colors: ['black'], width: 340, height: 350, legend: 'none', vAxis: {format:'#', title: 'Board balance'}, hAxis: {format:'#'}};
var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
};
