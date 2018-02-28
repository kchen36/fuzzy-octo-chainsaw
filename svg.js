var pic = document.getElementById("cvg");
var draw = function(){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute(“cx”,”200”);
    pic.appendChild(c1);
}
