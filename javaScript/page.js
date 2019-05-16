function myFunction() {
  alert("DON'T TOUCH THE FISH!");
}





var getRandomNumber = function(size){
  return Math.floor(Math.random() * size)
};

var getDistance = function(event, target){
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX *diffX) + (diffY*diffY));
};

var getDistanceHint = function (distance) {
  if(distance < 50){
    return "You are going to scare the fish away";
  }
  else if(distance < 100){
    return "Go away";
  }
  else if(distance < 150){
    return "Leave the betta alone";
  }
  else if(distance < 200){
    return "Get away from my fish tank";
  }
  else if(distance < 250){
    return "Leave the fish alone";
  }
  else if(distance < 300){
    return "Stay away";
  }
  else if(distance < 350){
    return "No touchy";
  }
  else{
    return "Don't touch";
  }
};

//set up variables
var width = 500;
var height = 500;
var clicks = 0;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
//Add a click handler to the images
$("#map").click(function(event){
  //click handler code goes here
  clicks++;

//Gets the distance between the click and the event
var distance = getDistance(event, target);
//Convert the distance to show a hint
var distanceHint = getDistanceHint(distance);
//update the distance element in html
$("#distance").text(distanceHint);

if(distance < 15){
  alert("You are going to kill the fish");
  }
});
