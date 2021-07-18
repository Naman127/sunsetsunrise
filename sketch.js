const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    if(backgroundImg){
        background(backgroundImg)
    }
    Engine.update(engine);
}

async function getBackgroundImg(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    console.log(datetime);
    if(hour>=5 && hour <=7){
        bg = "sunrise1.png"
    }else if(hour>=7 && hour <=8){
        bg = "sunrise4.png"
    }else if(hour>=19 && hour<=20){
        bg = "sunrise8.png"
    }else if(hour>=20 && hour<=7){
        bg = "sunset12.png"
    }else{
        bg = "sunrise6.png"
    }
    backgroundImg = loadImage(bg);
}
