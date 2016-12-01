
function change(source,spn1,spn2) {
   img = document.getElementById("img").src = "images/"+source;
   document.getElementById(spn1).className = "hide";
   document.getElementById(spn2).className = "show";
}
function show() {
    document.getElementsByClassName("show").style.display = "inline";
}
