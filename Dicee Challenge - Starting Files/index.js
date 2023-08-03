var randomnumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomnumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src" , randomImageSource);


var randomnumber2= Math.floor(Math.random()*6)+1;
var randomImageSource1 = "images/dice"  + randomnumber2 +".png";
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src" , randomImageSource1);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML=" Player1 Wins 🚩";
     
}else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML=" Player2 Wins 🚩 "
}else{
    document.querySelector("h1").innerHTML="Draw! "
}