const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3,pig2,pig4,pig5;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score =  0 ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

//    wall2 = new Wall(1,50,10,1600)
  //  wall = new Wall(1199,100,10,1600)
    bird = new Bird(200,50);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    bosss = new Pigboss(805,150,65,65);
    pig4 = new Pig(750,395);
    pig5 = new Pig(885,395);
    log3 = new Log(810,180,300, PI/2);
    
    baby = new Baby (810,100,5,5)
//    dikkra = new  Dikkra 
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

//    box6 = new Box(500,300,70,70);
  //  box7 = new Box(500,30,70,70);
    //box8 = new Box(500,300,70,70);
//    box9 = new Box(500,30,70,70);
  //  box10 = new Box(500,300,70,70);
    //box11 = new Box(500,30,70,70);
    
    
    
    bajirao = new Bajirao (230,150,80,PI/2);
   //slingshot = new SlingShot(bird.body,{x:200, y:50});
    
if(keyPressed === 32){
  bajirao.PositionX=bird.PositionX;
  bajirao.PositionY=bird.PositionY
}
}

function draw(){
    
    //    background(227,255,255);

       noStroke();
       textSize(32.2)
       fill("GREEN")
       text("BAJIRAO'S DHUSHMAN", width=650, 50)
    
        noStroke();
        textSize(32)
        fill("red")
        text("BAJIRAO ", width = 10, 30)

        noStroke();
        textSize(12)
        fill("BROWN")
        text("BAJIRAO KA DANDA", width=150, 200)

        noStroke();
        textSize(22)
        fill("black")
        text("<===BOSS PIG AND GONDAGOL", width=850, 100)
        
//        noStroke();
  //      textSize(22)
    //    fill("aqua")
      //  text("DIKKRA==>", width=330, 390)

//        noStroke();
  //      textSize(30)
    //    fill("WHITE")
      //  text("PIG'S INVISIBLE WALL'S ", width=300, 250)
       

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    
    bosss.display();
    pig4.display();
    pig5.display();
  
 //   wall.display();
    //wall2.display();

    box5.display();
    log4.display();
    log5.display();

//    box6.display();
  //  box7.display();
    //box8.display();
//    box9.display();
  //  box10.display();
    //box11.display();

    baby.display();
//    dikkra.display();

    bird.display();
 //   platform.display();
    bajirao.display();
    //slingshot.display();
   // console.log(bird.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


//function mouseReleased(){
  //  slingshot.fly();
  
//}


function keyPressed(){
    if(keyPressed === 32){
   
    bajirao.x=bird.x;
    bajirao.y=bird.y;
            
          }
          
    }
