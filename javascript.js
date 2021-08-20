

var openModalName = "";
var isMobile = false;

// // First we check if you support touch, otherwise it's click:
// let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
//
// // Then we bind via thát event. This way we only bind one event, instead of the two as below
// document.getElementById('hbs').addEventListener(touchEvent, someFunction);


function openModal(itemName) {
  if(window.openModalName == "") {
  var modalName = itemName.concat("Modal");
  document.getElementById(modalName).style.display = "block";

  window.openModalName = modalName;


  if (isMobile) {
    document.getElementById(modalName).style.backgroundColor = "white";
    var items = document.getElementsByClassName("imgContainer");
    for(var i = 0; i < items.length; i++)
    {
     items[i].style.display = "none";
    }
    }
  }
}

// When the user clicks anywhere outside of the modal or on the X, close it
window.onclick = function(event) {
  if (event.target.className == "close" || event.target.className == "modal") {
  document.getElementById(window.openModalName).style.display = "none";
  window.openModalName = "";
  if (isMobile) {
    var items = document.getElementsByClassName("imgContainer");
    for(var i = 0; i < items.length; i++)
    {
     items[i].style.display = "block";
      }
    }
  }



}

window.ontouchstart = function(event) {
  isMobile = true;
  if (event.target.className == "close" || event.target.className == "modal") {
  document.getElementById(window.openModalName).style.display = "none";
  window.openModalName = "";
  if (isMobile) {
    var items = document.getElementsByClassName("imgContainer");
    for(var i = 0; i < items.length; i++)
    {
     items[i].style.display = "block";
      }
    }
}
}

function changeExpanded(imgs, targetID) {
  var expandImg = document.getElementById(targetID);
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
