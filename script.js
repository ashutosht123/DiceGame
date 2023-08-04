var no1=Math.floor(Math.random()*6)+1;
var noImg1="images/"+"dice"+no1+".png";
var doc1=document.querySelectorAll("img")[0].setAttribute("src",noImg1);

var no2=Math.floor(Math.random()*6)+1;
var noImg2="images/"+"dice"+no2+".png";
var doc2=document.querySelectorAll("img")[1].setAttribute("src",noImg2);
if(no1 >no2)
document.querySelector("h1").innerHTML="A wins";
else if(no2>no1)
document.querySelector("h1").innerHTML="B wins";
else
document.querySelector("h1").innerHTML="draw";