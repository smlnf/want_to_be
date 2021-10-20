let timerStart = 1; //variable to hold the start time of each iteration of the timer
let timerLength = 2000; //length of the timer (in milliseconds)
let timerCount = 0; //number of times the timer has reset

let timerStart1 = 1; //variable to hold the start time of each iteration of the timer
let timerLength1 = 1000; //length of the timer (in milliseconds)
let timerCount1 = 0; //number of times the timer has reset
let pg;//scondCanvas

let timerStart2 =1;
let timerLength2 = 3000;
let timerCount2 = 0;
let pg2;

let img = []; //make an array to hold image objects
let img1 = [];
let img2 = [];
let numImgs = 3; //variable to hold number of images
let ibm;
let sharing;
var sound1;
let sound2;
let sound3;

function preload(){ 
  ibm = loadFont('ibm.ttf');
  sharing = loadImage('images/sharing.png');
  soundFormats('mp3');
  sound1 = loadSound('sounds/0001.mp3')
  sound2 = loadSound('sounds/0002.mp3')
  sound3 = loadSound('sounds/pg10.mp3')
  //load images during preload
  //load image objects as array elements
  img[0] = loadImage('images/0037.png'); 
  img[1] = loadImage('images/studio.png');
  img[2] = loadImage('images/anime.JPG');

  //load second array
  img1[0] = loadImage('images/digithan.png'); 
  img1[1] = loadImage('images/skin09.jpeg');
  img1[2] = loadImage('images/0040.png');
  
  img2[0] = loadImage('images/anime.JPG'); 
  img2[1] = loadImage('images/0037.png');
  img2[2] = loadImage('images/skin09.jpeg');

}

function setup() {
  createCanvas(1920, 1080);
  pg = createGraphics(1920, 1080);
  pg1 = createGraphics(1920,1080);
  background(255,0);
  textSize(width/15);
  textFont(ibm);
  textAlign(CENTER);
  getAudioContext();
  
}

function Sound1(){
  sound1.play();
}

function draw() {
    
    fill(255,0,0);
    text('WANT',1000,150);
    fill(255,0,0);
    text('WANT TO BE',1000,440);
    fill(255,0,0);
    text('WANT TO BE WANTED BY',1000,800);
  
  image(sharing, mouseX, mouseY, sharing.width / 6, sharing.height / 6);
  

  
    shuffle(img, true); // force shuffle first array
    shuffle (img1, true);//force shuffle seccond
    shuffle (img2, true);
    firstImages();
  pg.background(255,255,255,0);
  //pg.noFill();
  //pg.stroke(255);
    secondImages();
  pg1.background(255,255,255,0)
  secondImages();
    
image(pg, 0, 0);
}


function firstImages(){
    //if the difference in the current time and the starting time of the timer is greater than the length of the timer
  
  
  if (millis() - timerStart > timerLength){ 
    timerCount++; //increment the number of times the timer has reset
  background(255,0);
    //reset timerCount so you don't overrun the number of items in your array
    if (timerCount > numImgs){
      timerCount = 1;

    }
    
    //console.log("one",timerCount); //print number of timer resets to console
    //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)

    image(img[0], random(width-50),random(height-50));

    //image(img[1], random(width-50),random(height-50),50,50);

    timerStart = millis(); //reset start time of timer to new current time
    
}
  
}

function secondImages(){
    //if the difference in the current time and the starting time of the timer is greater than the length of the timer
  if (millis() - timerStart1 > timerLength1){ 
    timerCount1++; //increment the number of times the timer has reset
    pg.clear();
    //reset timerCount so you don't overrun the number of items in your array
    if (timerCount1 > numImgs){
      timerCount1 = 1;
      
    }
    
    //console.log("two",timerCount); //print number of timer resets to console
    //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)

    pg.image(img1[0], random(width-50),random(height-50));

    //pg.image(img1[1], random(width-50),random(height-50),50,50);

    timerStart1 = millis(); //reset start time of timer to new current time
    
}
  
  function thirdImages(){
    //if the difference in the current time and the starting time of the timer is greater than the length of the timer
  if (millis() - timerStart2 > timerLength2){ 
    timerCount1++; //increment the number of times the timer has reset
    pg.clear();
    //reset timerCount so you don't overrun the number of items in your array
    if (timerCount2 > numImgs){
      timerCount1 = 1;
      
     }
    
    //console.log("two",timerCount); //print number of timer resets to console
    //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)

    pg.image(img1[0], random(width-50),random(height-50));

    //pg.image(img1[1], random(width-50),random(height-50),50,50);

    timerStart1 = millis(); //reset start time of timer to new current time
    
}


}
  
}