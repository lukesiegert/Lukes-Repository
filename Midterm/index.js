let days = ["Monday", "Wednesday", "Friday"];
let prevDay;


for(i=0; i<document.getElementsByClassName("Day").length; i++){
  document.getElementsByClassName("Day")[i].innerHTML = "<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("Day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("Day")[i].id = days[i];

  // document.getElementById("one").addEventListener('click', setActiveButton, false);
  // document.getElementById("two").addEventListener('click', setActiveButton, false);

}

document.getElementById('Monday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(e){


  prevDay = document.getElementsByClassName("active")[0].id;
  if(prevDay != undefined){
    document.getElementById(prevDay).classList.toggle("active");
    document.getElementById(prevDay +"items").style.display = "none";

  }
  // console.log("previous meal: " + prevmeal);
  // prevmeal.classList.toggle('active');


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  Day = document.getElementsByClassName('active')[0].id;
  console.log(Day);
  document.getElementById(Day +"items").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + Day + ".jpg' >";

}
