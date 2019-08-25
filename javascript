<!DOCTYPE html>
<html>
<head>
<title> Clock </title>
</head>
<body>
<script>
var wakeuptime = 7;
var noon = 12;
var naptime = noon + 2;
var evening = 18;

var showCurrentTime = function () {
    var clock =
	document.getElementById('clock')
}
var currentTime = new Date();
var hours = currentTime.getHours();
var minute = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";

//Set hours
if (hours >= noon)
{
	meridian = "PM";
}
if (hours > noon)
{
	hours = hours - 12;
}
if (minutes < 10)
{ 
   minutes = "0" + minutes;
}
if (seconds < 10)
{
	seconds = "0" + seconds;
}

var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

clock.innerText = clockTime;
};
var updateClock = function()
{
	var time = new Date().getHours();
	var messageText;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
	var timeEventJS = 
	document.getElementById("timeEvent");
	var lolcatImageJS = 
	document.getElementById("lolcatImage");

}

if (time == noon)
{
	image = 
	"https://www.google.com/search?q=party+time&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiJ9syk7JzkAhULvJ4KHbTXCXQQ_AUIESgB#imgrc=3-l1uIChFnU9hM:";" 
	messageText = "Let's Party";
}
else (time != noon)
{  
     image="https://www.google.com/search?q=night+time&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjm7unZ7JzkAhWTLH0KHQLIDQoQ_AUIESgB&biw=1455&bih=599#imgrc=JtPDRiu5I3HsXM:"



}
</script>
</body>
</html>
