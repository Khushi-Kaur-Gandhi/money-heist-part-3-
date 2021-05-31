var welcome;
var welcomeIMG
var gameState = 0
var playerCount
var player
var database
var sprite
var spriteIMG
var img1
var img2
var sprite2
var sprite3
var sprite4
var img4
var sprite5
var img5
var cont
var contimg
var start
var startIMG
var bg2
var bg2Image
var choose 
var chooseImage
var plr
var plrImage
var bg3
var bg3Image 
function preload(){
  welcomeIMG = loadImage("2.jpg")
  greetingIMG = loadImage("welcome.png")
  //img1 = loadImage("3.jpg")
  nextIMG= loadImage("30.png")
  storyIMG = loadImage("33.png")
  rulesIMG = loadImage("34.jpg")
  contimg = loadImage("32.png")
  startIMG = loadImage("35.png")
  bg2Image=loadImage("bg2.jpg")
  chooseImage=loadImage("37.jpg")
  plrImage=loadImage("1__.png")
  bg3Image=loadImage("4.jpg")
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();

  sprite = createSprite(500,300,20,20)
  sprite.addImage(welcomeIMG);
  sprite.scale = 0.6
  //sprite.visible = false

  greeting= createSprite(500,300.20,20);
  greeting.addImage(greetingIMG);
  greeting.scale = 0.9
  greeting.visible = false

  next = createSprite(900,500,20,20);
  next.addImage(nextIMG);
  next.scale = 0.5
  next.visible = false

  storyPage = createSprite(500,300,20,20);
  storyPage.addImage( storyIMG);
  storyPage.scale = 0
  storyPage.visible = false

  rulesPage= createSprite(500,300.20,20);
  rulesPage.addImage(rulesIMG);
  rulesPage.visible = false

  cont = createSprite(800,580,20,20);
  cont.addImage(contimg);
  cont.scale = 0.8
  cont.visible = false

  starting = createSprite(850,500,20,20)
  starting.addImage(startIMG)
  starting.scale = 0.3
  starting.visible = false

  bg2 = createSprite(500,300,20,20)
  bg2.addImage(bg2Image)
  bg2.scale = 0.55
  bg2.visible = false
  
  choose = createSprite(475,80,20,20)
  choose.addImage(chooseImage)
  choose.scale = 0.3
  choose.visible = false
  
  plr = createSprite(500,0,20,20)
  plr.addImage(plrImage)
  plr.scale = 0.55
  plr.visible = false
  
  bg3 = createSprite(500,300,20,20)
  bg3.addImage(bg3Image)
  //bg3.scale = 0.55
  bg3.visible = false
 
  game = new Game();
  game.start();
}

function draw() {
  background("black");  
 
  if(playerCount === 1){
    game.update(1);
    greeting.visible = true
    next.visible=true
    story()
    rules()
    levelstart()
    level1()
  }
  
  if(gameState === 1){
    game.play();
  }
  // if(gameState===2){
  //   fill("white")
  //   text("hello",500,300)
  // }
  drawSprites()
  fill("blue")
  textSize(50)
  text(mouseX+","+mouseY,mouseX,mouseY)
}

