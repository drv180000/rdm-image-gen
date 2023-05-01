import imageData from './Images.json' assert {type: 'json'};
console.log(imageData);

var data = JSON.parse(imageData);

window.onload = chooseWODPic;

let word_of_day = data.WOTD;
let memes = data.MEME;

word_of_day.push(Object.entries(data))


let burger = ["assets/img/burger/burger1.jpg", "assets/img/burger/burger2.jpg", "assets/img/burger/burger3.jpg", 
"assets/img/burger/burger4.jpg"];

let art = ["assets/img/art/art1.jpg", "assets/img/art/art2.jpg", "assets/img/art/art3.jpg", 
"assets/img/art/art4.png", "assets/img/art/art5.png", "assets/img/art/art6.jpg", "assets/img/art/art7.jpg", 
"assets/img/art/art8.jpg", "assets/img/art/art9.jpg", "assets/img/art/art10.jpg", "assets/img/art/art11.jpg", 
"assets/img/art/art12.jpg", "assets/img/art/art13.jpg"];

let react = ["assets/img/reaction/react1.jpg", "assets/img/reaction/react2.jpg", "assets/img/reaction/react3.jpg",
 "assets/img/reaction/react4.jpg", "assets/img/reaction/react5.png"];

let surprise = [];

let irl = ["assets/img/irl/irl1.jpg", "assets/img/irl/irl2.jpg", "assets/img/irl/irl3.jpg", 
"assets/img/irl/irl4.jpg", "assets/img/irl/irl5.jpg", "assets/img/irl/irl6.jpg", "assets/img/irl/irl7.jpg", 
"assets/img/irl/irl8.jpg", "assets/img/irl/irl9.jpg", "assets/img/irl/irl10.jpg"];

function chooseWODPic() {
     let currentDate = new Date();
     let chosenImage = word_of_day[currentDate.getDay()];
     document.getElementById("myPicture").src = chosenImage;
}

function chooseMemePic() {
     let imagesLength = memes.length;
     let randomNum = Math.random();
     randomNum = randomNum * imagesLength;
     randomNum = Math.floor(randomNum);
     let chosenImage = memes[randomNum];
     document.getElementById("myPicture").src = chosenImage;
 }
 
 function chooseBurgerPic() {
     let imagesLength = burger.length;
     let randomNum = Math.random();
     randomNum = randomNum * imagesLength;
     randomNum = Math.floor(randomNum);
     let chosenImage = burger[randomNum];
     document.getElementById("myPicture").src = chosenImage;
 }

 function chooseArtPic() {
     let imagesLength = art.length;
     let randomNum = Math.random();
     randomNum = randomNum * imagesLength;
     randomNum = Math.floor(randomNum);
     let chosenImage = art[randomNum];
     document.getElementById("myPicture").src = chosenImage;
 }
 function chooseReactPic() {
     let imagesLength = react.length;
     let randomNum = Math.random();
     randomNum = randomNum * imagesLength;
     randomNum = Math.floor(randomNum);
     let chosenImage = react[randomNum];
     document.getElementById("myPicture").src = chosenImage;
 }
 function chooseSurprisePic() {
     let imagesLength = surprise.length;
     let randomNum = Math.random();
     randomNum = randomNum * imagesLength;
     randomNum = Math.floor(randomNum);
     let chosenImage = surprise[randomNum];
     document.getElementById("myPicture").src = chosenImage;
 }
 function chooseIRLPic() {
     let imagesLength = irl.length;
     let randomNum = Math.random();
     randomNum = randomNum * imagesLength;
     randomNum = Math.floor(randomNum);
     let chosenImage = irl[randomNum];
     document.getElementById("myPicture").src = chosenImage;
 }
/*
use python to grab directory name to print out filenames in json to automate array generation
host images on other website
*/