//JavaScript Documents
function changeBorder(){
    document.getElementById("chimp").style.border = 'solid 1px yellow';
   //document.getElementById('chimp').style.display = "none";

}

function showAlt(){
    //var targ = text.target || text.srcElement
    document.getElementById("chimp").style.opacity = ".3";
    var elem = document.getElementById("chimp").alt;
    
    

    /*if (targ && elem) {
        elem.innerHTML = targ.showAlt || '';
    }*/
  
}
function show(){
   let txt = document.getElementById("chimp").alt;
   txt.alt
}


//let hoverInfo = new MouseEvent()

/*function showInfo(){
    let altText = document.getElementsByTagName("img").alt;
    //document.querySelector("[chimp^='alt']")
    document.getElementById("chimp").innerHTML = altText;
}*/

//chimp.addEventListener("click", changeBorder);
chimp.addEventListener("click", show);
//document.body.style.backgroundColor = "purple";