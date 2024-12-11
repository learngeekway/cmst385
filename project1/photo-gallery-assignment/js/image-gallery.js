//JavaScript Documents
function changeBorder() {
  document.getElementsByClassName("thumbnails").style.border = "solid 3px yellow";
  //document.getElementById('chimp').style.display = "none";
}
function noBorder() {
  document.getElementById("chimp").style.border = "0px";
}

/*function displayCaption() {
  var altAttr = document.getElementsByTagName("img");
  altAttr.getAttribute("title");
}*/

function largeImage() {
  var imgClass = document.getElementsByClassName('thumbnails');
  var chooseImg = document.get
  
}

//document.addEventListener("click", changeBorder);
//document.addEventListener("mouseover", displayCaption);
document.addEventListener("mouseover", changeBorder);
chimp.addEventListener("mouseout", noBorder);
//document.body.style.background = "pink";



//document.body.style.background = "pink";
/* var arr = document.getElementsByTagName("img");
  //var arr = borderImg.childNodes;
  for (var i = 0; i < arr.length; i++) {
    arr[i].style.border = "solid 1px yellow";*/
