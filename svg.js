//Ibnul Jahan
//SoftDev2 pd7
//K #07: Connect the Dots
//2018-03-05

var cl = document.createElementNS("http://www.w3.org/2000/svg","circle");

cl.setAttribute("cx","200");
cl.setAttribute("cy","100");
cl.setAttribute("r","100");
cl.setAttribute("fill","green");
cl.setAttribute("stroke","orange");


var svg = document.getElementById("vimage");
//svg.appendChild(cl);

var lastX;
var lastY;



var drawCircle = function(e){
    if (lastX != null) {
	drawLine(e);
    }
    var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circ.setAttribute("cx",e.offsetX);
    circ.setAttribute("cy",e.offsetY);
    circ.setAttribute("r","10");
    circ.setAttribute("fill","red");
    circ.setAttribute("stroke","orange");
    svg.appendChild(circ);

    lastX=e.offsetX;
    lastY=e.offsetY;
};
var drawLine = function(e){   
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lastX);
    line.setAttribute("y1", lastY);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black")
    svg.appendChild(line);
};

var clear = document.getElementById("clear");


var clearSVG = function() {
    svg.innerHTML = "";
    lastX = null;
    lastY = null;
};

svg.addEventListener("click", drawCircle);
clear.addEventListener("click", clearSVG);
