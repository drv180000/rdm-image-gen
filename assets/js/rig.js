window.onload = chooseWODPic;

let word_of_day = ["assets/img/word-of-day/don1",
 "assets/img/word-of-day/don2.jpg", "assets/img/word-of-day/don3.jpg",
 "assets/img/word-of-day/don4.jpg", "assets/img/word-of-day/don5.jpg",
 "assets/img/word-of-day/don6.jpg", "assets/img/word-of-day/don7.jpg",
 "assets/img/word-of-day/don8.jpg", "assets/img/word-of-day/don9.jpg",
 "assets/img/word-of-day/don10.jpg", "assets/img/word-of-day/don11.jpg", 
 "assets/img/word-of-day/don12.jpg", "assets/img/word-of-day/don13jpg", 
 "assets/img/word-of-day/don14.jpg", "assets/img/word-of-day/don15.jpg", 
 "assets/img/word-of-day/don16.jpg", "assets/img/word-of-day/don17.jpg", 
 "assets/img/word-of-day/don18.jpg", "assets/img/word-of-day/don19.jpg", 
 "assets/img/word-of-day/don20.jpg", "assets/img/word-of-day/don21.jpg",
 "assets/img/word-of-day/don22.jpg", "assets/img/word-of-day/don23.jpg", 
 "assets/img/word-of-day/don24.jpg", "assets/img/word-of-day/don25.jpg", 
 "assets/img/word-of-day/don26.jpg", "assets/img/word-of-day/don27.jpg",
 "assets/img/word-of-day/don28.jpg"];

let memes = ["assets/img/memes/meme1.jpg", "assets/img/memes/meme2.png", "assets/img/memes/meme3.png", 
    "assets/img/memes/meme4.png", "assets/img/memes/meme5.jpg", "assets/img/memes/meme6.png",
    "assets/img/memes/meme7.JPG", "assets/img/memes/meme8.png", "assets/img/memes/meme9.jpg",
    "assets/img/memes/meme10.jpg", "assets/img/memes/meme11.jpg", "assets/img/memes/meme12.jpg",
    "assets/img/memes/meme13.jpg", "assets/img/memes/meme14.jpg", "assets/img/memes/meme15.png"];

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