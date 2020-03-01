var screen = 0;
var playerX = 10;//for testing
var playerY = 10;
var windowX = 35;
var walletx = 180;
var wallety = 140;
var wallettx = 500;
var walletty = 140;
var score = 0;
var speed1 = 0.5; // for first window coin
var speed2 = 1; // for second window coin

function preload() {
  coinSound = loadSound ("coinforGame.wav");
}

function setup() {
  // score = createDiv('Score = 0');
  // score.position(12, 12);
  // score.style('color', 'white');
  
  createCanvas(600, 500);
  background('#8B6331');
  noStroke();
  
}

//Start Screen
function startScreen(){
		background('#FFE3EE');
		fill(0)
		textAlign(CENTER);
        textSize(18);
		// text('WELCOME TO MY CATCHING GAME', width / 2, height / 2)
        text('STEAL COINS!', width / 2, height / 2);
		text('Click to start the game', width / 2, height / 2 + 20);
		reset();
}


function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}


function windowShape(x,y,w,h){
  
  //window frame
  fill('#FADCA5');
  rect(x,y,w,h)//put every shapes in function
  
  //window deck
  fill('#8B4513')
  rect(x-7,y+150,217,20)//indicates the stroke colour
  strokeWeight(3);
  
  //a person's body
  fill('#8878CD');
  rect(x+115,y+90,50,60,15,15,0,0);
  
  //person's face
  fill('#FDCD8C');
  circle(x+140,y+70,50);
  
  fill ('#FFBE0A');
  ellipse(walletx, wallety, 10);
  ellipse(wallettx, walletty,10);
  
}

//the 2nd window
function windowShape2(x,y,w,h){
  
  //window frame
  fill('#FADCA5');
  rect(x,y,w,h)//put every shapes in function
  
  //window deck
  fill('#8B4513')
  rect(x-7,y+150,217,20)//indicates the stroke colour
  strokeWeight(3);
  
  //a person's body
  fill('#FFA500');
  rect(x+115,y+90,50,60,15,15,0,0);
  
  //person's face
  fill('#FDCD8C');
  circle(x+140,y+70,50);
}

function gameOn(){
    background('#8B6331');
  windowShape(windowX,30,200,150);//you can move the whole window from here'
  //creating the 2nd window
  windowShape2(350,30,200,150)
  
       
  //ground
  fill('#bebebe');
  rect(0,height-30,600,30);;
  
  // player(playerX,playerY,40,0);
  //console.log("test");
  
  //coin
  fill ('#FFBE0A');
  ellipse(walletx, wallety, 10);
  ellipse(wallettx, walletty,10);
 

  //speed of the coin
  wallety += speed1;
  walletty += speed2;
  
  if (keyIsDown(LEFT_ARROW)) {
    //console.log("left");
    playerX -= 13;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 13;
  
  }
  
    if (wallety > height){
    wallety = 140;
    screen =2;
    }
  
    if (walletty > height) {
    // reset
    wallety = 140;
    screen =2;
    }

  
//player's body
  fill('#FF5675');
  rect(playerX, playerY+425,50,60, 15,15,0,0);
  
  //player's head
  fill('#FFE0C6');
  circle(playerX+25, playerY+400,50);
  
  
      if (wallety > height-120 && walletx > playerX && walletx < playerX +60)
      //height - 120 is where it decides how the coin touched the playerX
  //height - 120 is saying that the next coin will drop when it touches the playerX
      {
      wallety = 140; 
        //indicates where the coin comes out - needs to be same number with variable
      score = score+1; // makes the score goes up
      speed1 += 0.3
      coinSound.play();
     // console.log('work');
    }
  
  if (walletty > height-120 && wallettx > playerX && wallettx < playerX +60) {
      walletty = 140; 
    //indicates where the coin comes out - needs to be same number with variable
      score = score+1;
      speed2 += 0.3
      coinSound.play();
      //console.log('work');
    }
  
  //constraining the area
  if (playerX < 0){
   playerX = 0; 
  }
  if (playerX > width-50){
   playerX = width-50; 
  }
  
  if(wallety==-20 & walletty ==-20){
  	pickRandom();
  }
  //score text
    fill(255);
    textSize(16);
    text('SCORE = ',10,10,100); //score,x,y,size // actual text
    text(score,60,10,100);//actual number of score
  

};

//End Screen
function endScreen(){
		background(150)
		textAlign(CENTER);
        textSize(18);
		text('GAME OVER', width / 2, height / 2)
  	    text("SCORE = " + score, width / 2, height / 2 + 20);
		text('Click to play again', width / 2, height / 2 + 40);
}

//Start Screen
function mousePressed(){
	if(screen==0){ //startGame
  	screen=1 // gameOn
  }else if(screen==2){ // endGame
  	screen=0
  }
}


function reset(){
	  score=0;
      //screen=0;
}
