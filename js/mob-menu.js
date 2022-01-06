window.onload = function(){
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    b1.style.marginTop = b2.offsetHeight + "px";
    b2.style.marginTop = -(b1.offsetHeight + b2.offsetHeight) + "px";
}