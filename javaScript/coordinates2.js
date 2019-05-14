var getRandomNumber = function(size){
  return Math.floor(Math.random() * size)
};

var getDistance = function(event, target){
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX *diffX) + (diffY*diffY));
};

var getDistanceHint = function (distance) {
  if(distance < 25){
    return "You're On Fire!";
  }
  else if(distance < 50){
    return "It's Hot";
  }
  else if(distance < 100){
    return "Tempeture Is Rising";
  }
  else if(distance < 150){
    return "Closer";
  }
  else if(distance < 200){
    return "You Are Getting Warmer";
  }
  else if(distance < 250){
    return "There Is A Nip To The Air";
  }
  else if(distance < 300){
    return "Brr...";
  }
  else{
    return "Antarctica Weather";
  }
};

//set up variables
var width = 750;
var height = 435;
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
  alert("Found the Iowa treasure in " + clicks + " clicks!");
  }
});
