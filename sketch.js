var player;

var wall1 ,wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;

var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

var wall21 ,wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;

var wall31 ,wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40;

var wall41 ,wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50;

var wall51 ,wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60;

function setup() {
  createCanvas(600,600);

  console.log(600/22);

  console.log(600/22);

  player = createSprite(10,158,10,10);

  wall1 = createSprite(10,77,10,135);

  wall2 = createSprite(10,374,10,405);

  wall3 = createSprite(37,91,10,108);

  wall4 = createSprite(64,104,10,81);

  wall5 = createSprite(64,37,54,10);
  
  wall6 = createSprite(91,64,10,54);

  wall7 = createSprite(171,91,162,10);

  wall8 = createSprite(158,37,81,10);

  wall9 = createSprite(118,50,10,27);

  wall10 = createSprite(145,64,54,10);

  wall11 = createSprite(172,118,216,10);

  wall12 = createSprite(212,64,27,10);

  wall13 = createSprite(226,50,10,27);

  wall14 = createSprite(253,64,10,54);

  wall15 = createSprite(280,77,10,27);

  wall16 = createSprite(293,37,81,10);

  wall17 = createSprite(293,64,27,10);

  wall18 = createSprite(293,91,27,10);

  wall19 = createSprite(306,118,10,54);

  wall20 = createSprite(333,91,10,108);

  wall21 = createSprite(360,145,54,10);

  wall22 = createSprite(360,78,10,81);

  wall23 = createSprite(387,91,10,108);

  wall24 = createSprite(387,91,10,108);

  wall25 = createSprite(468,37,162,10);

  wall26 = createSprite(468,64,108,10);

  wall27 = createSprite(468,91,54,10);

  wall28 = createSprite(455,118,27,10);

  wall29 = createSprite(442,105,10,27);

  wall30 = createSprite(415,105,10,81);

  wall31 = createSprite(469,132,10,27);

  wall32 = createSprite(442,145,54,10);

  wall33 = createSprite(550,293,10,513);

  wall34 = createSprite(523,212,10,297);

  wall35 = createSprite(496,212,10,243);

  wall36 = createSprite(496,212,10,243);

  wall37 = createSprite(104,145,27,10);

  wall38 = createSprite(50,172,81,10);

  wall39 = createSprite(91,185,10,27);

  wall40 = createSprite(63,198,54,10);

  wall41 = createSprite(118,185,10,81);

  wall42 = createSprite(76,225,81,10);

  wall43 = createSprite(37,292,10,135);

  wall44 = createSprite(145,198,10,108);

  wall45 = createSprite(172,211,10,135);

  wall46 = createSprite(199,224,10,162);

  wall47 = createSprite(226,237,10,135);

  wall48 = createSprite(253,250,10,162);

  wall49 = createSprite(253,145,108,10);

  wall50 = createSprite(361,172,216,10);

  wall51 = createSprite(469,253,10,162);

  mousePressed();
}

function draw() {
  background("green");

  wall37.shapeColor = "red";

  drawSprites();
}

function mousePressed(){
  if(keyCode === UP_ARROW){
    player.velocityY = -2;
  }

  if(keyCode === DOWN_ARROW){
    player.velocityY = 2;
  }

  if(keyCode === LEFT_ARROW){
    player.velocityX = -2;
  }

  if(keyCode === RIGHT_ARROW){
    player.velocityX = 2;
  }
}