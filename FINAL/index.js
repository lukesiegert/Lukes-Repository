// console.log("hello");

var prevSelect = document.getElementById("about-tab");
function setActive(id){
  // prevSelect.style.color = "white";
console.log("prevSelect1:" + prevSelect);
console.log("selecteditems1:" + id);
  var selectedItem = document.getElementById(id);
  console.log("selecteditems:" + selectedItem);

  selectedItem.style.color = "black";
  prevSelect = selectedItem;
  console.log("prevSelect2:" + prevSelect);
}


// var prevSelect = document.getElementById("work");
// function setActive(id){
//   prevSelect.style.color = "white";
//   var selectedItem = document.getElementById(id);
//   console.log(selectedItem);
//
//   selectedItem.style.color = "black";
//   prevSelect = selectedItem;
// }


// var prevSelect = document.getElementById("contact");
// function setActive(id){
//   prevSelect.style.color = "white";
//   var selectedItem = document.getElementById(id);
//   console.log(selectedItem);
//
//   selectedItem.style.color = "black";
//   prevSelect = selectedItem;
// }

// for(i=0; i<document.getElementsByClassName("logo").length; i++){
  // document.getElementsByClassName("logo")[i].innerHTML = "#" + tabs[i] + "#";
  //
  // document.getElementsByClassName("logo")[i].addEventListener('click', setActive, false);
  //
  // document.getElementsByClassName("logo")[i].id = tabs[i];

// }

// document.getElementById('./index.html').classList.toggle('active');
