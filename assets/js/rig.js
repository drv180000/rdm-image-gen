import imageData from '../../Images.json' assert {type: 'json'};
//console.log(JSON.stringify(imageData));

const img_data = JSON.parse(JSON.stringify(imageData));
console.log(img_data);

const memeElm = document.getElementById('memeBtn');
memeElm.addEventListener('click', chooseMemePic);
const burgElm = document.getElementById('burgBtn');
burgElm.addEventListener('click', chooseBurgerPic);
const artElm = document.getElementById('artBtn');
artElm.addEventListener('click', chooseArtPic);
const reactElm = document.getElementById('reactBtn');
reactElm.addEventListener('click', chooseReactPic);
const surpElm = document.getElementById('surpBtn');
surpElm.addEventListener('click', chooseSurprisePic);
const irlElm = document.getElementById('irlBtn');
irlElm.addEventListener('click', chooseIRLPic);

window.onload = chooseWODPic;

let word_of_day = img_data['WOTD'];
let memes = img_data['MEME'];
let burger = img_data['BURGER'];
let art = img_data['ART'];
let react = img_data['REACT'];
let irl = img_data['IRL'];
let surprise = word_of_day.concat(memes, burger, art, react, irl);

function chooseWODPic() {
     let currentDate = new Date();
     //currentDate.setDate(7);
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