
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, background1, clog, slingshot, platform, background2, pig2;
var gamestate = "onSling";
var bg = "sprites/bg.png";
var score = 0;

function preload(){
 //background1 = loadImage("sprites/bg.png"); 
 getTime(); 
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(width/2,height,width,20)

    box1 = new Box(700,790,70,70);
    box2 = new Box(920,790,70,70);
    //pig1 = new Pig(810, 790);
    log1 = new Log(800,715,300, PI/2);

    box3 = new Box(700,715,70,70);
    box4 = new Box(920,715,70,70);
    //pig2 = new Pig(810, 715);

    log3 =  new Log(810,620,300, PI/2);

    box5 = new Box(810,550,70,70);
    log4 = new Log(760,550,150, PI/7);
    log5 = new Log(870,550,150, -PI/7);
    //clog = new Log(200,200,100, PI/2);
    platform = new Ground(150,675,300,300);
     
    //console.log(ground);

    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{x:200,y:390});

}

function draw(){  
    if(background2){

    
    background(background2);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    console.log(windowHeight);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    log1.display();

    box3.display();
    box4.display();
    //pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //clog.display();
    slingshot.display();
    platform.display();

    //text("Score: "+ score, 1350,50);
    //pig1.scoring();
    bird.display();

    }  
}

function mouseDragged(){
if(gamestate !== "launch"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}  
}

function mouseReleased(){
    slingshot.fly();
    gamestate = "launch";
}
function keyPressed(){
    if(keyCode == 32){
    }
}

async function getTime(){
    var TimeResponse = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var TimeResponseJSON = await TimeResponse.json();
    var Time = TimeResponseJSON.datetime;
    var hour = Time.slice(11,13);
console.log(hour);

if(hour > 6 && hour < 18){
    bg = "sprites/bg.png"  
}
else{
    bg = "sprites/bg2.jpg" 
}
background2 = loadImage(bg);
}
